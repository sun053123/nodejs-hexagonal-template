// create interface for class
import { NextFunction, Request, Response } from 'express';

export interface IProductHandler {
    getProducts(req: Request, res: Response, next: NextFunction): Promise<void | Error>
    getProductById(req: Request, res: Response, next: NextFunction): Promise<void | Error>
}