import express, { Application, Request, Response, Router } from 'express';
import 

const app: Application = express();
const router: Router = express.Router();

const PORT: number = 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

productRouter(router);
userRouter(router);
cartRouter(router);

app.use() //404 path
app.use() //handle error (optional)


https://expressjs.com/en/guide/routing.html
// Inject App to route

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});