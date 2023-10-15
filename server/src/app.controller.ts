import {Controller, Get, Query} from '@nestjs/common'
import { AppService } from './app.service'


@Controller('/api')
export class  AppController {

    constructor(private appService: AppService) {}


    // @Get('/list')
    // getList() {
    //     return this.appService.getList()
    // }

    @Get('/list')
    findNote(@Query() params) {
        // console.log(params.email, params.number)
        return this.appService.findNote(params.email, params.number)
    }

}