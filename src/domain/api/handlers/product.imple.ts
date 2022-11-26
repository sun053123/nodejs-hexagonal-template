import { IProductHandler } from './product';
import { IProductService } from '../../services';
import { NextFunction, Request, Response } from 'express';

export default class ProductHandler implements IProductHandler{
    
    constructor(private productService: IProductService) {
        this.productService = productService;
    }
    
    // Request : Params, ResBody, ReqBody, ReqQuery
    public async getProducts<Request, Response>(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{
            const products = this.productService.getAllProduct();
            return products;
        }catch(error){
            next(error)
        }
    }

    public async getProductById<Request, Response>(req: Request, res: Response,  next: NextFunction): Promise<void> {
        try {
            return 
        } catch (error) {
            
        }
    }

    private async _commonValidate(): Promise<void | Error> {
        return
    }
}
