import { createRouter, createWebHistory } from 'vue-router'
import TheMain from '../views/TheMain.vue'
import TheUserPage from '../views/TheUserPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: TheMain
    },
    {
      path: '/:userId',
      name: 'UserPage',
      component: TheUserPage
    }
  ]
})

export default router
