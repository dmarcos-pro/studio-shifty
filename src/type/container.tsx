export type HeaderSubMenuItem = {
  name: string
  id: string
}
export type HeaderSubMenu = {
  active: boolean
  top: number | null
  left: number | null
  width: number | null
  size: number | null
  items: any[]
}

export type HeaderService = {
  id: string
  name: string
  category: string
  title: string
  resume: string
  content_title: string
  content_text: string
  picture_url: string
  picture_type: string
}

export type HeaderNav = {
  category: string
  submenu: boolean
  name: string
  id: number
  link: string
}
export type HeaderSubMenuMap = {
  id: string
  name: string
}

export type HeroBannerProject = {
  id: string
  brand: string
}

export type FeedbackContainer = {
  text: string
  who: string
  job: string
  brand: string
}

export type FooterService = {
  id: string
  name: string
}

export type FooterNav = {
  id: string
  name: string
  link: string
  category: string
}

export type ModalProps = {
  update: (boolean: boolean) => void
  children: React.ReactNode
}

export type PresentationRefs = {
  box: React.RefObject<HTMLDivElement>
  cta: React.RefObject<HTMLDivElement>
}

export type ProjectsContainer = {
  id: string
  brand: string
  tag: string
}

export type ProjectsRefs = {
  title: React.RefObject<HTMLDivElement>
}

export type ServicesContainer = {
  id: string;
  category: string;
  name: string;
}