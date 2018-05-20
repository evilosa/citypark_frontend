import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { CartItem } from '../../components'
import * as actions from '../../actions'

const CART_STATES = [
  {left: '-1000px'},
  {left: '-352px'},
  {left: '10px'}
]

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartState: 0,
    }
    this.totalCost = 0
  }

  handleClick = () =>
    this.setState({
      cartState: this.state.cartState ^ 0b11
    })

  listItems = () => {
    const { cart, changeCount } = this.props
    return cart ? cart.map(item => <CartItem changeCount={changeCount} key={item.id} {...item} />)
    : null
  }

  componentWillReceiveProps = nextProps => {
    const { cart } = nextProps
    console.log(cart);
    if ((!this.props.cart || !this.props.cart.length) && cart) this.setState ({
      cartState: 1
    })
    else if (!cart.length) this.setState({
      cartState: 0
    })
    if (cart) {
      this.totalCost = 0
      cart.forEach(item => this.totalCost += item.cost * item.count)
    }
  }

  render = () => {
    const { cartState } = this.state
    return (
      <div className="shopping" style={CART_STATES[cartState]}>
        <div className="t_list">
          {this.listItems()}
        </div>

        <div className="basket_summ">
          {
            this.totalCost >= 500 ?
              <div id="free_dost">Бесплатная доставка!</div>
            : null
          }
          Сумма заказа: <span id="t_all_summ">{this.totalCost}</span>₽
          <div id="skidka">С учетом скидки 10%</div>
        </div>

        <div className="zakaz_info">
          <div style={{fontSize: "24px", lineHeight: "24px"}}>8-918-311-97-91</div>
          Пожалуйста, позвоните по этому номеру и продиктуйте ваш заказ.
        </div>


        <div id="s_open_btn" onClick={this.handleClick}>
          <div></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.restcafe.payload.cart
})

const mapDispatchToProps = dispath => bindActionCreators({
  ...actions.cart
}, dispath)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
