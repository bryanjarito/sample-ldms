import { sleep } from '../../services/utils'
import { Lake } from '../../pages/lakes/types'
import lakesDb from './lakes-db.json'
// import projectsDb from './projects-db.json'
// import { Project } from '../../pages/projects/types'

export const lakes = lakesDb as Lake[]

// Simulate API calls

export type Pagination = {
  page: number
  perPage: number
  total: number
}

export type Sorting = {
  sortBy: keyof Lake | undefined
  sortingOrder: 'asc' | 'desc' | null
}

export type Filters = {
  isActive: boolean
  search: string
}

const getSortItem = (obj: any, sortBy: string) => {
  if (sortBy === 'projects') {
    return obj.projects.map((project: any) => project.project_name).join(', ')
  }

  return obj[sortBy]
}

export const getLakes = async (filters: Partial<Filters & Pagination & Sorting>) => {
  await sleep(1000)
  const { search, sortBy, sortingOrder } = filters
  let filteredLakes = lakes

  // filteredLakes = filteredLakes.filter((lake) => lake.active === isActive)

  if (search) {
    filteredLakes = filteredLakes.filter((lake) => lake.englishName.toLowerCase().includes(search.toLowerCase()))
  }

  // filteredLakes = filteredLakes.map((lake) => ({ ...lake, projects: getUserProjects(lake.id) }))

  if (sortBy && sortingOrder) {
    filteredLakes = filteredLakes.sort((a, b) => {
      const first = getSortItem(a, sortBy)
      const second = getSortItem(b, sortBy)
      if (first > second) {
        return sortingOrder === 'asc' ? 1 : -1
      }
      if (first < second) {
        return sortingOrder === 'asc' ? -1 : 1
      }
      return 0
    })
  }

  const { page = 1, perPage = 10 } = filters || {}
  return {
    data: filteredLakes.slice((page - 1) * perPage, page * perPage),
    pagination: {
      page,
      perPage,
      total: filteredLakes.length,
    },
  }
}

export const addUser = async (user: User) => {
  await sleep(1000)
  users.unshift(user)
}

export const updateUser = async (user: User) => {
  await sleep(1000)
  const index = users.findIndex((u) => u.id === user.id)
  users[index] = user
}

export const removeUser = async (lake: Lake) => {
  await sleep(1000)
  lakes.splice(
    lakes.findIndex((u) => u.id === lake.id),
    1,
  )
}
