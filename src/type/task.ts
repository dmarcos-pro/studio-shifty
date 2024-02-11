type Children = {
  children: React.ReactNode
}

type ActiveTaskPropsChildren = {
    category: string
    name: string
    price: number
    feedback: string
}
type TaskPropsChildren = {
  selected: boolean
  update: (number: number) => void
  number: number
  id: number
  price: string
  name: string
  category: string
  image: string
}

export type { Children, ActiveTaskPropsChildren, TaskPropsChildren }