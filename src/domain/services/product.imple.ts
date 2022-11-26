import IProductService from "./product";
import { IProductEntity } from "../database";

export default class ProductService implements IProductService {
    constructor(private productEntity: IProductEntity){
        this.productEntity = productEntity;
    }
    
    public async getAllProduct(): Promise<void> {
        try {
            const products = await this.productEntity.findAllProducts();
            return products; 
        }catch(err){
            throw err
        }
        
    }

    public async getProductById(): Promise<void> {
        return 
    }

    public async getProductByCategory(): Promise<void> {
        return
    }
}