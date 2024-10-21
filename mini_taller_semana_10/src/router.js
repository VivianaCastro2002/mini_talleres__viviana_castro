import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import View1 from './components/View1.vue'
import View2 from './components/View2.vue'
import View3 from './components/View3.vue'
import View4 from './components/View4.vue'
import View5 from './components/View5.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/View1', component: View1 },
  { path: '/View2', component: View2 },
  { path: '/View3', component: View3 },
  { path: '/View4', component: View4 },
  { path: '/View5', component: View5 },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router