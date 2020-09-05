declare class OrderedMap<T = any> {
  constructor(content: T[])

  find(key: string): number

  get(key: string): T

  update(key: string, value: T, newKey?: string): OrderedMap<T>

  remove(key: string): OrderedMap<T>

  addToStart(key: string, value: T): OrderedMap<T>

  addToEnd(key: string, value: T): OrderedMap<T>

  addBefore(place: string, key: string, value: T): OrderedMap<T>

  forEach(fn: (key: string, value: T) => any): void

  prepend<U extends MapLike>(
    map: U
  ): U extends MapLike<infer A> ? OrderedMap<T | A> : never

  append<U extends MapLike>(
    map: U
  ): U extends MapLike<infer A> ? OrderedMap<T | A> : never

  subtract<U extends Record<string, any> | OrderedMap>(map: U): OrderedMap<T>

  get size(): number

  static from<U extends MapLike>(
    value: U
  ): U extends MapLike<infer T> ? OrderedMap<T> : never
}

type MapLike<T = any> = Record<string, T> | OrderedMap<T>

export default OrderedMap
