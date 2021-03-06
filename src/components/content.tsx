import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { InfoTypes } from '../store/types'

import { Home, AllDapps, Info, Storefronts } from '../components/pages'
import { Storefront } from '../containers/pages'

import { Paths, Local } from '../config'

export const Content = () => {

    return (

      <Switch>

        <Route name={Paths.help} exact path={Local.help} render={() => <Info type={InfoTypes.HELP}/>} />
        <Route name={Paths.contact} exact path={Local.contact} render={() => <Info type={InfoTypes.CONTACT}/>} />
        <Route name={Paths.about} exact path={Local.about} render={() => <Info type={InfoTypes.ABOUT}/>} />

        <Route name={Paths.showStoreDappsIndex} exact path={Local.showStoreDappsIndex} render= {() => <Storefront />} />
        <Route name={Paths.allDapps} exact path={Local.allDapps} render= {() => <AllDapps />} />

        <Route name={Paths.showStoreDapps} path={Local.showStoreDapps} render= {() => <Storefronts />} />


      </Switch>
    )
}
