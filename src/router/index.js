import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import SignupPage from '../components/SignupPage.vue'
import MainPage from '../components/MainPage.vue'
import EmployeesPage from '../components/EmployeesPage.vue'
import EmployeePage from '../components/EmployeePage.vue'
import ProjectsPage from '../components/ProjectsPage.vue'
import ProjectPage from '../components/ProjectPage.vue'



const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupPage
  },
  {
    path: '/home',
    name: 'home',
    component: MainPage
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsPage
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectPage
  },
  {
    path: '/employees',
    name: 'employees',
    component: EmployeesPage
  },
  {
    path: '/employee',
    name: 'employee',
    component: EmployeePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
