// create interface for class
import { Request, Response } from 'express';

export interface IProductHandler {
    getProducts(req: Request, res: Response): Promise<void | Error>
    getProductById(req: Request, res: Response): Promise<void | Error>
}