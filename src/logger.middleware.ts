import { Logger, NestMiddleware } from "@nestjs/common";
import { Request } from "@nestjs/common";

export class LoggerMiddleware implements NestMiddleware{
    private readonly longger = new Logger (LoggerMiddleware.name);
    use(req: Request, res: any, next: (error?: any) => void) {
        switch(req.method){
            case 'POSt':
            case 'PUT':
            this.longger.log(
                `LoggerMiddleware | Request [${req.method}] | Request Body ${JSON.stringify(req.body)} `,

            );
            break;
            case 'GET':
            case 'DELETE':
                this.longger.log(`LoggerMiddleware | Request [${req.method}]`);
                break;
                default:
                    this.longger.log(
                        `LoggerMiddleware | Request [${req.method}] default logging`,
                    );
        }
        next();
    }
    
}