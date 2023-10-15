import "./main.css"

import { createApp } from 'vue'
import App from './App.vue'
import {VueInputMask} from 'inputmask'

const app = createApp(App)
app.use(VueInputMask)
app.mount('#app')
