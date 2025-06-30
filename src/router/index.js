import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import Chat from '../pages/Chat.vue'
import FoodManagment from '../pages/FoodManagment.vue'
import Tasks from '../pages/Tasks.vue'
import Processes from '../pages/Processes.vue'
import Calendar from '../pages/Calendar.vue'
import Salary from '../pages/Salary.vue'
import Efficiency from '../pages/Efficiency.vue'
import Programs from '../pages/Programs.vue'
import Report from '../pages/Report.vue'
import Allocations from '../pages/Allocations.vue'
import Contracts from '../pages/Contracts.vue'
import Payment from '../pages/Payment.vue'
import AnnouncementManager from '../pages/AnnouncementManager.vue'
import Login from '../pages/Login.vue'

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/chat', component: Chat, name: 'chat' },
  { path: '/foodmanagment', component: FoodManagment, name: 'foodmanagment' },
  { path: '/tasks', component: Tasks, name: 'tasks' },
  { path: '/processes', component: Processes, name: 'processes' },
  { path: '/calendar', component: Calendar, name: 'calendar' },
  { path: '/salary', component: Salary, name: 'salary' },
  { path: '/efficiency', component: Efficiency, name: 'efficiency' },
  { path: '/programs', component: Programs, name: 'programs' },
  { path: '/report', component: Report, name: 'report' },
  { path: '/allocations', component: Allocations, name: 'allocations' },
  { path: '/contracts', component: Contracts, name: 'contracts' },
  { path: '/payment', component: Payment, name: 'payment' },
  { path: '/announcementManager', component: AnnouncementManager, name: 'announcementManager' },
  { path: '/login', component: Login, name: 'login' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
