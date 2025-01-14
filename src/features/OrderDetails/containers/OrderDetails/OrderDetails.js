import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from "react-router-dom"
import Captcha from 'react-google-recaptcha'
import { Helmet } from 'react-helmet'
import { NotificationManager } from 'react-notifications'

import { createOrder, validOrder } from '../../models'
import { filterCart } from 'utils'
import { deliveryAndTotalCost } from './utils'
import * as actions from '../../actions'
import { RestaurantAndCafe, Cart } from 'features'
import { Spinner } from 'components'
import { DeliveryAddress, DeliveryTimes, CustomerInfo } from '../../components'
import { ORDER_DETAILS, PAYMENT, ACCEPTED } from '../../links'
import { TITLE_PREFIX } from 'appConstants'

class OrderDetails extends React.Component {

  constructor(props) {
    super(props)
    let { cart, user: { name, phone } } = props
    const dishes_orders_attributes = filterCart(cart)
    this.state = {
      order: createOrder({ name, phone, dishes_orders_attributes }),
      invalidFields: [],
      accepted: true,
      ...deliveryAndTotalCost(cart)
    }
  }

  handleChange = prop => {
    const { target, delivery, deliveryPrice } = prop
    const { cart } = this.props
    this.setState(prev => ({
      ...prev,
      ...(() => delivery !== undefined || deliveryPrice ? deliveryAndTotalCost(cart, delivery, deliveryPrice) : {})(),
      order: {
        ...prev.order,
        ...(() => target ? { [target.name]: target.value } : prop)()
      }
    }))
  }

  handleSubmit = () => {
    const { order, g_recaptcha_response } = this.state
    delete order.deliveryPrice
    const { createOrder, user: { id } } = this.props
    const invalidFields = validOrder(order)
    if (invalidFields) this.setState({ invalidFields })
    if (!invalidFields.length && (id || g_recaptcha_response)) {
      createOrder({
        ...order,
        street: order.street.value || ''
      }, g_recaptcha_response)
    } else {
      NotificationManager.error('Заполните все необходимые поля!', '', 3000)
    }
  }

  componentDidMount = () => {
    window.scrollTo(0, 0)
    const { cart, loadCartFromLocalstorage, orderClear } = this.props
    orderClear()
    !cart && loadCartFromLocalstorage()
  }

  componentWillReceiveProps = (nextProps) => {
    const { cart, errors, fetching, order: { delivery, mnt_signature, accepted }, history, user: { name, phone } } = nextProps
    const { deliveryPrice } = this.state.order
    !cart.length && history.push(RestaurantAndCafe.links.MENU.URL)
    if (!fetching && errors.msg) {
      NotificationManager.error(errors.msg, '', 3000)
    }
    else if (accepted) {
      history.push(ACCEPTED.URL)
    } else if (mnt_signature) {
      //localStorage.clear()
      history.push(PAYMENT.URL)
    } else {
      const dishes_orders_attributes = filterCart(cart)
      this.setState(prev => ({
        ...prev,
        order: {
          ...prev.order,
          phone: phone ? phone : prev.order.phone,
          name, dishes_orders_attributes
        },
        ...deliveryAndTotalCost(cart, delivery, deliveryPrice)
      }))
    }
  }

  render = () => {
    const { totalCost, invalidFields, order, accepted, deliveryPrice } = this.state
    const { clearCart, fetching } = this.props
    const { REACT_APP_CAPTCHA_KEY } = process.env
    return (
      <div style={{ position: "relative" }}>
        {fetching ? Spinner() : null}
        <Helmet title={TITLE_PREFIX + ORDER_DETAILS.TITLE} />
        <div id="order" className="form-layout">
          <div id="order-header">
            <div id="logo" className="order-logo" />
            <h2>{ORDER_DETAILS.TITLE}</h2>
          </div>
          <div id="order-content">
            <DeliveryTimes onChange={delivery_times => this.handleChange({ delivery_times })} />
            <DeliveryAddress onChange={this.handleChange} invalidFields={invalidFields} />
            <CustomerInfo
              onChange={this.handleChange}
              invalidFields={invalidFields}
              order={order}
            />
            <div id="total">
              <Captcha
                sitekey={REACT_APP_CAPTCHA_KEY}
                onChange={g_recaptcha_response => this.setState({ g_recaptcha_response })}
              />
              <div className="bl_cena">
                {
                  order.delivery ? <div>Стоимость доставки: {deliveryPrice}₽</div> : <div>&nbsp;</div>
                }
                <span style={{ fontSize: "1.5em" }}>К оплате: </span>
                <span className="bsm">
                  <span className="bsm_n">{totalCost}</span><span style={{ fontSize: "30px" }}>₽</span>
                </span>
              </div>
            </div>
            <div style={{marginTop: '1rem'}}>
            <input
              id="accept-checkbox"
              type="checkbox"
              checked={accepted}
              onChange={() => this.setState(prev => ({
                ...prev,
                accepted: !prev.accepted
              }))}
            />
            <label htmlFor="accept-checkbox">С <a target="_blank" href="/private_policy">политикой конфиденциальности</a> согласен</label>
            </div>
          </div>
          <div id="submit">
            <div onClick={clearCart} className="z_btn order-btn">
              Отмена
              <i style={{ color: "red" }} className="material-icons">close</i>
            </div>
            <div onClick={() => accepted && this.handleSubmit()} className={`z_btn order-btn${accepted ? '' : ' next_button-disabled'}`}>
              Далее
              <i style={{ color: "green" }} className="material-icons">done</i>
            </div>
          </div>
        </div>
        <div id="leaf-right" className="leaf leafs" />
        <div id="leaf-left" className="leaf leafs" />
        <Cart.containers.Cart />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.payload,
  user: state.user.payload,
  order: state.order.payload,
  fetching: state.order.fetching,
  errors: state.order.errors
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions,
  ...Cart.actions
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(withRouter(OrderDetails))
export default WrappedComponent
