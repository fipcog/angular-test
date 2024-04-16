export interface Todolist {
  addedDate: string
  id: string
  order: number
  title: string
}

export interface BaseResponse<T = {}> {
  resultCode: number
  messages: string[],
  data: T
}
