export type Children = {
  children: React.ReactNode
}

export type ActiveTaskPropsChildren = {
    category: string
    name: string
    price: number
    feedback: string
}
export type TaskPropsChildren = {
  selected: boolean
  update: (number: number) => void
  number: number
  id: number
  price: string
  name: string
  category: string
  image: string
}
