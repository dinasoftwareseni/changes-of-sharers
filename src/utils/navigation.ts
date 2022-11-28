import { History } from 'history'

export const openNewPage = (uri: string) => () => {
  window.open(uri, '_blank')
}

export const navigate = (history: History, route: string, state?: unknown) => (): void => {
  history.push(route, state)
}
