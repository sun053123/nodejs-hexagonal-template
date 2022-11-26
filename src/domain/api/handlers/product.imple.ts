import { IProductHandler } from './product';
import { IProductService } from '../../services';
import { Request, Response } from 'express';

export default class ProductHandler implements IProductHandler{
    
    constructor(private productService: IProductService) {
        this.productService = productService;
    }
    
    public async getProducts<Request, Response>(req: Request, res: Response): Promise<void | Error> {
        const products = this.productService.getAllProduct();
        return products;
    }

    public async getProductById<Request, Response>(req: Request, res: Response): Promise<void | Error> {
        return
    }

    private async _commonValidate(): Promise<void | Error> {
        return
    }
}

// create class that extend from interface
