import { center } from './centerLocation'

export interface markerCurrent {
  position: center
  label: {
    color?: string
    text: string
  }
  title: string
  options: any
}
