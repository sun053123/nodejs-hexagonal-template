 import IProductEntity from './product'

export default class ProductEntity implements IProductEntity {

    // constructor that recieve parameter from database
    constructor(private readonly ProductModel: any) {
        this.ProductModel = ProductModel;
    }
    
    public async findAllProducts(): Promise<void> {
        // code here
        return
    }

    public async findProductById(): Promise<void> {
        // code here
        return
    }

    public async findProductByCategory(): Promise<void> {
        // code here
        return
    }
}