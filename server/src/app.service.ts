import {Injectable} from '@nestjs/common'
import {HttpException} from'@nestjs/common'
import { resolve } from 'path'

@Injectable({})
export class AppService {

    private readonly list: {email: string, number:string} [] = [{
        email: 'jim@gmail.com',
        number: '223122'
        }, {
        email: 'jam@gmail.com',
        number: '830347'
        }, {
        email: 'john@gmail.com',
        number: '221122'
        }, {
        email: 'jams@gmail.com',
        number: '349425'
        }, {
        email: 'jams@gmail.com',
        number: '141424'
        }, {
        email: 'jill@gmail.com',
        number: '822287'
        }, {
        email: 'jill@gmail.com',
        number: '822286'
        }]

    // getList = () => {return this.list}


    findNote = (email, number) => {
        if(!email && !number) {
            return JSON.stringify("Заполните данные")
        } else if(!email) {
            return JSON.stringify("Заполните \"email\"")
        } else if(!number ) {
            return JSON.stringify("Заполните \"number\"")
        } else {
            let a = this.list.find(el => el.email === email && el.number ===number)
            if(a){
                return a
            } else {
                return JSON.stringify("Нет такой записи")
            }
        }
    }
}
