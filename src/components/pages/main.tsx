import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom"

import Markdown from 'react-markdown'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { Content } from '../content'
import { App } from '../../config/strings'

import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone'
import CheckTwoToneIcon from '@material-ui/icons/CheckTwoTone';
import AttachFileTwoToneIcon from '@material-ui/icons/AttachFileTwoTone'
import TocTwoToneIcon from '@material-ui/icons/TocTwoTone'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import HelpIcon from '@material-ui/icons/Help'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting'

import Tooltip from '@material-ui/core/Tooltip'

import minimaLogo from '../../images/minimaLogo.png'
import appName from '../../images/appName.png'

import { themeStyles } from '../../styles'

import { Paths, Local, Help } from '../../config'

export const Main = () => {

  let path = window.location.href
  const indexOf = path.indexOf("index")
  if (indexOf > -1) {
      const redirect = path.substr(0, indexOf)
      window.location.href = redirect
  }

  const classes = themeStyles()
  const tagLine = `${App.catchLine}`

  return (
      <div className={classes.root}>
        <Grid container>

          <Paper className={classes.header} square={true}>
            <Grid item container xs={12}>

                <Grid className={classes.subTitle}  item xs={1}>
                  {tagLine}
                </Grid>

                <Grid item container xs={6}>

                  <Grid item xs={4}>
                    &nbsp;
                  </Grid>
                  <Grid item xs={2}>
                    <img className={classes.title} src={appName}/>
                  </Grid>
                </Grid>

                <Grid item container justify="flex-end" xs={5}>

                    <Grid item xs={1}>
                      <NavLink to={Local.help} className={classes.link}>
                          <Tooltip title={Help.helpTip}>
                            <HelpIcon />
                          </Tooltip>
                      </NavLink>
                    </Grid>

                    <Grid item xs={1}>
                      <NavLink to={Local.contact} className={classes.link}>
                          <Tooltip title={Help.contactTip}>
                            <ContactMailIcon />
                          </Tooltip>
                      </NavLink>
                    </Grid>

                    <Grid item xs={1}>
                      <NavLink to={Local.about} className={classes.link}>
                          <Tooltip title={Help.aboutTip}>
                            <InfoIcon />
                          </Tooltip>
                      </NavLink>
                    </Grid>
                </Grid>

            </Grid>
          </Paper>

          <Paper className={classes.content} square={true}>
            <Grid item container xs={12}>
               <Grid item xs={1}>
                    &nbsp;
                </Grid>
                <Grid item xs={10}>
                    <Content />
                </Grid>
                <Grid item xs={1}>
                    &nbsp;
                </Grid>
            </Grid>
          </Paper>

          <Paper className={classes.footer} square={true}>
            <Grid item container xs={12}>

              <Grid item xs={12}>

                   <NavLink to={Local.home} className={classes.link}>
                       <Grid item>
                          <Paper className={classes.footerLinks} elevation={0} square={true}>
                            <HomeTwoToneIcon fontSize={'large'}/>
                          </Paper>
                       </Grid>
                       <Grid item>
                          <Paper className={classes.footerLinks} elevation={0} square={true}>
                              {Paths.home}
                          </Paper>
                       </Grid>
                   </NavLink>

                </Grid>

            </Grid>
          </Paper>

        </Grid>
      </div>
  )
}
