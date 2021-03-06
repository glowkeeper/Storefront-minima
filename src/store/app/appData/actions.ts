// @ts-ignore
import { Minima } from './blockchain/minima'

import {
  AppDispatch,
  AppDataActionTypes,
  AppData
} from '../../types'

import { Local } from '../../../config'

import { write } from '../../actions'

export const setActivePage = (page: string) => {
  return async (dispatch: AppDispatch) => {

    let appData: AppData = {
      activePage: page
    }

    if ( ( page === Local.allDapps ) ||
         ( page === Local.about ) ||
         ( page === Local.help ) ||
         ( page === Local.contact ) ||
         ( page === Local.serverSettings ) ||
         ( page === Local.showStoreDapps ) ) {

      dispatch(write({data: appData})(AppDataActionTypes.APPDATA_SUCCESS))

    } else {

      appData.activePage = Local.home
      dispatch(write({data: appData})(AppDataActionTypes.APPDATA_FAILURE))
    }
  }
}
