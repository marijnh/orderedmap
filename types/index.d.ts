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

  subtract<U extends Record<string, any> | OrderedMap>(map: U): OrderedMap<T>

  get size(): number

  static from<U extends Record<string, any> | OrderedMap>(
    value: U
  ): U extends Record<string, infer T>
    ? OrderedMap<T>
    : U extends OrderedMap<infer T>
    ? OrderedMap<T>
    : never
}

export default OrderedMap
