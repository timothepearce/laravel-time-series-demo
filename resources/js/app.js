require('./bootstrap');

import { createApp } from 'vue'
import VueApexCharts from "vue3-apexcharts";
import LiveChart from './components/LiveChart'

const app = createApp({})

app.use(VueApexCharts);

app.component('live-chart', LiveChart)

app.mount('#app')
