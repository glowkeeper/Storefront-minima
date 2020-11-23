class Config {

  static readonly serverConfig = "serverFile.json"
  static readonly miniDappsConfig = "dapps.json"
}

class Local {

  static readonly home = '/'
  static readonly about = '/about'
  static readonly help = '/help'
  static readonly contact = '/contact'
  static readonly server = '/server'

  static readonly serverSettings = '/settings'

  static readonly addDapp = '/add-dapp'
  static readonly addDappIndex = `${Local.addDapp}/:index`

  static readonly showStoreDapps = '/show-store-dapps'
  static readonly showStoreDappsIndex = `${Local.showStoreDapps}/:index`
}

class Remote {

    static readonly secure = 'https://'
    static readonly insecure = 'http://'
}

export { Config, Local, Remote }
