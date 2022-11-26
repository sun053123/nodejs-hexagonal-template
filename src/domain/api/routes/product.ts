import { Router } from 'express';
import { textChangeRangeIsUnchanged } from 'typescript';

// https://stackoverflow.com/questions/72269530/typescript-class-with-express-mounted-route
export default class ProductRouter {

    public router: Router
    
    constructor(router: Router){
        this.router = router;
        this.productRoutes();
    }

    protected productRoutes(): void {
        this.router.get('/')
    }

    
}





// sigleton pattern

// import { Router } from 'express';
// import { IProductHandler } from '../handlers/product';
// import { IProductService } from '../../services';

// export default class ProductRoute {
//     private static instance: ProductRoute;
//     private router: Router;
//     private productHandler: IProductHandler;

//     private constructor(productHandler: IProductHandler) {
//         this.router = Router();
//         this.productHandler = productHandler;
//         this._init();
//     }

//     public static getInstance(productHandler: IProductHandler): ProductRoute {
//         if (!ProductRoute.instance) {
//             ProductRoute.instance = new ProductRoute(productHandler);
//         }
//         return ProductRoute.instance;
//     }

//     public getRouter(): Router {
//         return this.router;
//     }

//     private _init(): void {
//         this.router.get('/', this.productHandler.getProducts);
//         this.router.get('/:id', this.productHandler.getProductById);
//     }
// }

