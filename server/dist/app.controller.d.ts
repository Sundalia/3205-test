import { AppService } from './app.service';
export declare class AppController {
    private appService;
    constructor(appService: AppService);
    findNote(params: any): string | {
        email: string;
        number: string;
    };
}
