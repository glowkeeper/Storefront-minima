import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom"
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Spinner from 'react-spinner-material'

import { initMiniDapps, getMiniDapps } from '../../store/app/fileServer/actions'

//import Markdown from 'react-markdown'
//import { SimpleArrayRenderer } from '../simpleRenderer'
import { Storefronts as StorefrontConfig, Misc, Local } from '../../config'

import { themeStyles } from '../../styles'

import {
  ApplicationState,
  AppDispatch,
  Servers,
  MiniDapps,
  MiniData
} from '../../store'

// @ts-ignore
import { Minima } from '../../store/app/blockchain/minima'

interface StorefrontStateProps {
  serverData: Servers
  miniDappData: MiniDapps
}

interface StorefrontDispatchProps {
  initMiniDapps: () => void
  getMiniDapps: () => void
}

//type Props = StorefrontStateProps & StorefrontDispatchProps
type Props = StorefrontStateProps & StorefrontDispatchProps

const get = ( props: Props ) => {

  const [isLoading, setLoading] = useState(false)

  const {index} = useParams()

  const classes = themeStyles()
  let history = useHistory()

  /*const compare = (a: MiniData, b: MiniData) => {

    const thisA = a.server.url
    const thisB = b.server.url
    if (thisA < thisB) {
      return -1;
    }
    if (thisA > thisB) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  const unique = (elements: MiniData[]): MiniData[] => {

    const uniqElements = elements.reduce((element: MiniData[], current: MiniData) => {

      const x = element.find( (item: MiniData) => {
        return ( item.dir === current.dir &&  item.conf.name === current.conf.name )
      })

      if (!x) {
        return element.concat([current])
      } else {
        return element
      }
    }, [])

    return uniqElements
  }*/

  useEffect(() => {

    if ( props.serverData.servers.length
    && ( props.serverData.servers.length == props.serverData.numAvailable ) ) {

      props.initMiniDapps()
      setLoading(true)
      setTimeout(function(){ setLoading(false) }, Misc.homeSpinnerDelay)
      props.getMiniDapps()
    }

  }, [props.serverData])

  return (
    <>
      <h2>{StorefrontConfig.heading}</h2>
      <hr />
      <p>
          {isLoading ?
            <div className={classes.spinner}>
              <Spinner radius={40} color={"#ff671d"} stroke={5} visible={isLoading} />
            </div> : (
              <Paper className={classes.home} square={true}>
                <Grid container>
                  {
                    props.miniDappData.miniDapps.map( ( miniDapp: MiniData, i: number ) => {

                      const serverIndex = miniDapp.serverIndex
                      const dappStorefront = props.serverData.servers[serverIndex].url
                      const dir = miniDapp.dir
                      const icon = miniDapp.icon
                      const iconURL = dappStorefront + dir + "/" + icon
                      const name = miniDapp.conf.name
                      const description = miniDapp.conf.description
                      const category = miniDapp.conf.category
                      const pathAddDapp = `${Local.addDapp}/${i}`

                      return (
                        <>
                          <Grid item justify="center" alignItems="center" xs={12}  sm={4}>
                            <Paper className={classes.appIconContainer}>
                              <button onClick={() => history.push(`${pathAddDapp}`)}>
                                <img
                                  className={classes.appIcon}
                                  src={iconURL}
                                />
                              </button>
                            </Paper>
                          </Grid>
                          <Grid item justify="center" alignItems="center" xs={12} sm={8}>
                           <b>{name}</b><br/>
                           <i>{category}</i>
                          </Grid>
                        </>
                      )
                    })
                  }
                </Grid>
              </Paper>
            )
          }
      </p>
    </>
  )
}

const mapStateToProps = (state: ApplicationState): StorefrontStateProps => {

  const servers = state.fileServers.data as Servers
  const miniDapps = state.miniDapps.data as MiniDapps
  return {
    serverData: servers,
    miniDappData: miniDapps
  }
}

const mapDispatchToProps = (dispatch: AppDispatch): StorefrontDispatchProps => {
 return {
   initMiniDapps: () => dispatch(initMiniDapps()),
   getMiniDapps: () => dispatch(getMiniDapps())
 }
}

export const Storefront = connect<StorefrontStateProps, StorefrontDispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(get)