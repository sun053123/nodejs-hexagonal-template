export default interface IProductEntity {
    findAllProducts(): Promise<void>
    findProductById(): Promise<void>
    findProductByCategory(): Promise<void>
}