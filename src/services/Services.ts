export interface Service<T> {
  getItems(): Promise<T>
}
