import React, { FC } from 'react'
import { createRoot } from 'react-dom/client'
import { Config } from './types/global'
import devConfig from './reapit.config.dev.json'
import prodConfig from './reapit.config.prod.json'
import { isInProdEnv } from './utils/app-env'

// Init global config
const initGlobalConfig = () => {
  window.reapit = {
    config: {
      appEnv: 'local',
      connectClientId: '',
      connectOAuthUrl: '',
      connectUserPoolId: '',
      platformApiUrl: '',
      marketplaceUrl: '',
    },
  }

  let globalConfig: Config = devConfig
  if (isInProdEnv) {
    globalConfig = prodConfig
  }

  window.reapit.config = globalConfig
}
export const renderApp = (Component: FC) => {
  const rootElement = document.querySelector('#root') || document.body
  const isDesktop = Boolean(window['__REAPIT_MARKETPLACE_GLOBALS__'])
  const html = document.querySelector('html')

  if (isDesktop && html) {
    html.classList.add('is-desktop')
  }

  if (rootElement) {
    createRoot(rootElement).render(<Component />)
  }
}

const run = async () => {
  try {
    initGlobalConfig()
    // I import the app dynamically so that the config is set on window and I avoid any
    // runtime issues where config is undefined
    const { default: App } = await import('./core/app')

    renderApp(App)
  } catch (error) {
    console.error('Cannot fetch config', error)
  }
}

run()
