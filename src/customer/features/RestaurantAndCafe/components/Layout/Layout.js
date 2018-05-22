import React from 'react'
import { renderRoutes } from 'react-router-config'

import { MAIN } from '../../routes'
import { Header, Chef, NavigationBar, SideBar } from 'components'

export default ({ route }) =>
  <div style={{lineHeight: "22px"}}>
    <div className="fold fold_side" />
    <SideBar />
    <div className="content">
      <div className="partbody">
        <Header
          side="left"
          title={MAIN.title}
          link={MAIN.url}
        />
        { route && renderRoutes(route.routes) }
      </div>
    </div>
    <Chef />
    <NavigationBar />
  </div>