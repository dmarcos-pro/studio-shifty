export type BtnProps = {
  size?: string
  color?: string
  icon?: boolean
  noborder?: boolean
  rotate?: boolean
  url?: string
  children: React.ReactNode
}

export type IconProps = {
  value: string
  children?: React.ReactNode
}

export type LinkProps = {
  default?: boolean
  url: string
  children: React.ReactNode
  className?: React.ReactNode
}

export type ProgressBarProps = {
  start: number
  end: number
  color: string
}

export type ServiceProps = {
  index: number
  id: string
  category: string
  title: string
}

export type ServiceAnim = {
  box: boolean
}