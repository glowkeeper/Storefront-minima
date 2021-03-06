import React from 'react'

import { createMuiTheme, responsiveFontSizes, makeStyles } from '@material-ui/core/styles'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import red from '@material-ui/core/colors/red'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/blue'
import indigo from '@material-ui/core/colors/indigo'
import orange from '@material-ui/core/colors/orange'
import yellow from '@material-ui/core/colors/yellow'

/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 960px
lg, large: 1280px
xl, extra-large: 1920px
*/

const breakpoints = createBreakpoints({})
let theme = createMuiTheme ({
  spacing: 8,
  typography: {
    fontFamily: [
      'Manrope',
      'Roboto',
      'Arial',
      'sans-serif',
      '-apple-system',
    ].join(','),
    fontSize: 1,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      [breakpoints.up('xs')]: {
        lineHeight: "2",
        fontSize:  "1.8em",
        fontWeight: 700,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#001C32',
      },
      [breakpoints.up('md')]: {
        lineHeight: "2.4",
        fontSize:  "2.2em",
        fontWeight: 700,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#001C32',
      }
    },
    h2: {
      [breakpoints.up('xs')]: {
        lineHeight: "2.3",
        fontSize: "1.4em",
        fontWeight: 700,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#001C32'
      },
      [breakpoints.up('md')]: {
        lineHeight: "2",
        fontSize: "1.6em",
        fontWeight: 700,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#001C32'
      }
    },
    h3: {
      [breakpoints.up('xs')]: {
        lineHeight: '1.2',
        fontSize: "1em",
        fontWeight: 700,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#001C32'
      },
      [breakpoints.up('md')]: {
        lineHeight: '1.2',
        fontSize: "1em",
        fontWeight: 700,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#001C32'
      }
    },
    h4: {
      [breakpoints.up('xs')]: {
        lineHeight: '1.2',
        fontSize: "0.9em",
        fontWeight: 400,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#317aff'
      },
      [breakpoints.up('md')]: {
        lineHeight: '1.2',
        fontSize: "1em",
        fontWeight: 400,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#317aff'
      }
    },
    h5: {
      [breakpoints.up('xs')]: {
        lineHeight: "1",
        fontSize: "0.9em",
        fontWeight: 400,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#001C32'
      },
      [breakpoints.up('md')]: {
        lineHeight: "1.2",
        fontSize: "1em",
        fontWeight: 400,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#001C32'
      }
    },
    h6: {
      [breakpoints.up('xs')]: {
        lineHeight: "1.2",
        fontSize: "0.9em",
        fontWeight: 700,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#001C32'
      },
      [breakpoints.up('md')]: {
        lineHeight: "2",
        fontSize: "1em",
        fontWeight: 700,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#001C32'
      }
    },
    subtitle1: {
      lineHeight: "2.5",
      fontSize: "1em",
      fontWeight: 600,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#FFFFFF'
    },
    subtitle2: {
      lineHeight: "1",
      fontSize: "1em",
      fontWeight: 600,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#FF512F'
    },
    body1: {
      lineHeight: '1.1',
      fontSize: "1",
      fontWeight: 400,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#001C32',
    },
    body2: {
      lineHeight: '1',
      fontSize: "1",
      fontWeight: 400,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#001C32',
    },
    caption: {
      fontSize: "0.9em",
      fontWeight: 700,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
    },
    button: {
      fontSize: "1.8em",
      textTransform: "uppercase",
      fontWeight: 500,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#001C32'
    }
  },
  palette: {
    type: 'dark',
    background: {
      default: '#edefef',
    },
    text: {
      primary: "#001C32",
      secondary: "#001C32"
    },
    primary: {
      main: '#929396'
    },
    secondary: {
      main: '#ff671e'
    },
    error: red,
    warning: orange,
    info: yellow,
    success: green,
  }
})

theme = responsiveFontSizes(theme)

const themeStyles = makeStyles({
  landing: {
    margin: "0",
    padding: "0",
    height: "100vh",
    width: "100vw",
    background: 'linear-gradient(#001C32, #001C32)'
  },
  landingExit: {
    margin: "0",
    padding: "0",
    height: "100vh",
    width: "100vw",
    background: 'linear-gradient(#001C32, #001C32)',
    visibility: "hidden",
    opacity: "0",
    transition: "visibility 0s 0.5s, opacity 0.5s linear"
  },
  landingDisplay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  landingLogoIcon: {
    height: "100px",
    width: '100px'
  },
  landingAppNameIcon: {
    height: "25px",
    width: '168px'
  },
  root: {
    [breakpoints.up('xs')]: {
      background: 'linear-gradient(#F0F0FA, #F0F0FA)',
      height: "100vh",
      width: "100%",
      position: 'relative'
    },
    [breakpoints.up('md')]: {
      marginTop: "5vh",
      marginBottom: "5vh",
      marginLeft: "auto",
      marginRight: "auto",
      height: "90vh",
      width: "50%",
      position: 'relative'
    }
  },
  header: {
    [breakpoints.up('xs')]: {
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingTop: "32px",
      margin: "0",
      textAlign: 'center',
      background: 'linear-gradient(#001C32, #001C32)',
      height: "70px",
      width: "100%",
      position: 'absolute',
      top: '0'
    },
    [breakpoints.up('md')]: {
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(5),
      paddingTop: "30px",
      margin: "0",
      background: 'linear-gradient(#001C32, #001C32)',
      height: "90px",
      width: "100%",
      position: 'absolute',
      top: '0'
    }
  },
  subHeader: {
    [breakpoints.up('xs')]: {
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingBottom: theme.spacing(1),
      paddingTop: theme.spacing(1),
      margin: "0",
      background: 'linear-gradient(#F0F0FA, #F0F0FA)',
      height: "55px",
      width: "100%",
      position: 'absolute',
      top: '70px'
    },
    [breakpoints.up('md')]: {
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(5),
      paddingBottom: theme.spacing(1),
      paddingTop: theme.spacing(1),
      margin: "0",
      textAlign: 'center',
      background: 'linear-gradient(#F0F0FA, #F0F0FA)',
      height: "60px",
      width: "100%",
      position: 'absolute',
      top: '90px'
    }
  },
  content: {
    [breakpoints.up('xs')]: {
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      margin: "0",
      background: 'linear-gradient(#FAFAFF, #FAFAFF)',
      overflow: 'auto',
      width: "100%",
      position: 'absolute',
      bottom: '70px',
      top: '125px'
    },
    [breakpoints.up('md')]: {
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(5),
      margin: "0",
      background: 'linear-gradient(#FAFAFF, #FAFAFF)',
      overflow: 'auto',
      width: "100%",
      position: 'absolute',
      bottom: '100px',
      top: '150px'
    }
  },
  footer: {
    [breakpoints.up('xs')]: {
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingTop: "10px",
      margin: "0",
      background: 'linear-gradient(#001C32, #001C32)',
      height: "70px",
      width: "100%",
      position: 'absolute',
      bottom: '0'
    },
    [breakpoints.up('md')]: {
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(5),
      paddingTop: "10px",
      margin: "0",
      background: 'linear-gradient(#001C32, #001C32)',
      height: "100px",
      width: "100%",
      position: 'absolute',
      bottom: '0'
    }
  },
  storeTitle: {
    padding: "0",
    margin: "0"
  },
  storeDescription: {
    padding: "0",
    margin: "0"
  },
  caption: {
    padding: theme.spacing(1),
    margin: "0"
  },
  details: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    margin: "0",
  },
  footerLinks: {
    fontWeight: 400,
    fontFamily: "\"Lato\", \"Arial\", \"sans-serif\", \"Roboto\"",
  },
  spinner: {
     position: 'relative',
     top: "50%",
     bottom: "50%"
  },
  deleteModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteModalSub: {
    [breakpoints.up('xs')]: {
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.shadows[3],
      padding: theme.spacing(1),
      outline: "none",
      width: "40%"
    },
    [breakpoints.up('md')]: {
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.shadows[3],
      padding: theme.spacing(1),
      outline: "none",
      width: "10%"
    }
  },
  deleteModalSubIcons: {
    textAlign: "center"
  },
  appIcon: {
    [breakpoints.up('xs')]: {
      height: "35px",
      width: "35px"
    },
    [breakpoints.up('md')]: {
      height: "50px",
      width: '50px'
    }
  },
  downloadIcon: {
    [breakpoints.up('xs')]: {
      height: "20px",
      width: '17px'
    },
    [breakpoints.up('md')]: {
      height: "25px",
      width: '20px'
    }
  },
  deleteIcon: {
    [breakpoints.up('xs')]: {
      height: "15px",
      width: '15px'
    },
    [breakpoints.up('md')]: {
      height: "25px",
      width: '25px'
    }
  },
  tickIcon: {
    [breakpoints.up('xs')]: {
      height: "15px",
      width: '19px'
    },
    [breakpoints.up('md')]: {
      height: "25px",
      width: '31px'
    }
  },
  subHeaderIconParent: {
    [breakpoints.up('xs')]: {
      position: "relative"
    },
    [breakpoints.up('md')]: {
      position: "relative",
      height: "100%"
    }
  },
  helpIcon: {
    [breakpoints.up('xs')]: {
      display: 'flex',
      justifyContent: 'flex-start',
      height: "32px",
      width: '32px'
    },
    [breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'flex-start',
      height: "40px",
      width: '40px'
    }
  },
  contactIcon: {
    [breakpoints.up('xs')]: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',
      height: "32px",
      width: '32px'
    },
    [breakpoints.up('md')]: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',
      height: "40px",
      width: '40px'
    }
  },
  aboutIcon: {
    [breakpoints.up('xs')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      height: "32px",
      width: '32px'
    },
    [breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      height: "40px",
      width: '40px'
    }
  },
  footerIcon: {
    [breakpoints.up('xs')]: {
      height: "24px",
      width: '24px'
    },
    [breakpoints.up('md')]: {
      height: "35px",
      width: '35px'
    }
  },
  headerIcon: {
    [breakpoints.up('xs')]: {
      height: "28px",
      width: '28px'
    },
    [breakpoints.up('md')]: {
      height: "50px",
      width: '50px'
    }
  },
  sortIcon: {
    [breakpoints.up('xs')]: {
      height: "20px",
      width: '20px'
    },
    [breakpoints.up('md')]: {
      height: "25px",
      width: '25px'
    }
  },
  appNameIconContainer: {
    [breakpoints.up('xs')]: {
      position: "relative",
      top: "0",
      left: "0",
      height: "28px",
      width: '104px'
    },
    [breakpoints.up('md')]: {
      position: "relative",
      top: "0",
      left: "0",
      height: "50px",
      width: '208px'
    }
  },
  appNameIcon: {
    [breakpoints.up('xs')]: {
      position: "absolute",
      bottom: "0",
      left: "0",
      height: "16px",
      width: '104px'
    },
    [breakpoints.up('md')]: {
      position: "absolute",
      bottom: "0",
      left: "0",
      height: "25px",
      width: '168px'
    }
  },
  storeIcon: {
    [breakpoints.up('xs')]: {
      marginTop: theme.spacing(2),
      width: "20px",
      height: "20px",
      borderRadius: "50%",
    },
    [breakpoints.up('md')]: {
      marginTop: theme.spacing(1.5),
      width: "30px",
      height: "30px",
      borderRadius: "50%"
    }
  },
  storesIcon: {
    [breakpoints.up('xs')]: {
      borderRadius: "50%",
      width: "35px",
      height: "35px"
    },
    [breakpoints.up('md')]: {
      width: "40px",
      height: "40px",
      borderRadius: "50%"
    }
  },
  linkIcon: {
    [breakpoints.up('xs')]: {
      margin: 'auto',
      height: "15px",
      width: '15px'
    },
    [breakpoints.up('md')]: {
      margin: 'auto',
      height: "30px",
      width: '30px'
    }
  },
  link: {
    textDecoration: 'none'
  },
  hr: {
    height: "1px",
    width: "100%"
  }
})

export { theme, themeStyles }
