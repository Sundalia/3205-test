"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor() {
        this.list = [{
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
            }];
        this.findNote = (email, number) => {
            if (!email && !number) {
                return JSON.stringify("Заполните данные");
            }
            else if (!email) {
                return JSON.stringify("Заполните \"email\"");
            }
            else if (!number) {
                return JSON.stringify("Заполните \"number\"");
            }
            else {
                let a = this.list.find(el => el.email === email && el.number === number);
                if (a) {
                    return a;
                }
                else {
                    return JSON.stringify("Нет такой записи");
                }
            }
        };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)({})
], AppService);
//# sourceMappingURL=app.service.js.map