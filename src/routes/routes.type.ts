import { navLinks } from './navLinks/index'
export type routerType = {
  title: string
  path: string
  element: JSX.Element
}

export type NavLinkRouter = {
  name: string
  href: string
}
