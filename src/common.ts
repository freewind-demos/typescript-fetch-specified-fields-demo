export type SpecifyFields<T> = {
  [key in keyof T]?: true
}

export type User = {
  id: number,
  username: string,
  email: string,
}
