// create interface for class

export default interface IProductService {
    getAllProduct(): Promise<void>
    getProductById(): Promise<void>
}