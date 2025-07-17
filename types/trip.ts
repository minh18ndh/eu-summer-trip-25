import type { ReactNode } from "react"

export interface Activity {
  time: string
  title: string
  description: string
  icon: ReactNode
  location?: string
}

export interface Day {
  id: number
  date: string
  city: string
  country: string
  image: string
  activities: Activity[]
}
