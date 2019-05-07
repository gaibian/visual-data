import Vue from 'vue'
import VCharts from 'v-charts'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import '@/styles/index.scss'
import "./component"
require('echarts-gl');
import Highcharts from 'highcharts'
import VueHighCharts from 'vue-highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
highcharts3d(Highcharts)
import _g from './utils/global'
import App from './App'
import store from './store'
import router from './router'
import '@/icons' // icon
import '../mock' // simulation data
Vue.use(VCharts)
Vue.use(ElementUI, { locale })
window._g = _g
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
