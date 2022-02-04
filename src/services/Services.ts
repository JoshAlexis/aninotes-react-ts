export interface Service<T> {
  getItems(params?: unknown): Promise<T>
}
