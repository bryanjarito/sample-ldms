import { Checklist } from '../checklist/types'

export type Lake = {
  id: number
  englishName: string
  droneShots: string[]
  geoTag: string
  gujaratiName: string
  village: string
  dimensions: string
  partner: string
  startDate: string
  endDate: string
  capacity: string
  projectHead: string
  projectHeadContact: string
  supervisor: string
  supervisorContact: string
  checklist: Checklist[]
}
