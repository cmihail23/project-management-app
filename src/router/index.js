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
    path: '/projects/edit/:id',
    name: 'ProjectPageEdit',
    component: ProjectPage,
    props: { isAdd: false } // Pass route params as props to the component
  },
  {
    path: '/projects/add',
    name: 'ProjectPageAdd',
    component: ProjectPage,
    props: { isAdd: true } // Pass route params as props to the component
  },
  {
    path: '/employees',
    name: 'EmployeesPage',
    component: EmployeesPage
  },
  {
    path: '/employees/edit/:id',
    name: 'EmployeePageEdit',
    component: EmployeePage,
    props: { isAdd: false } // Pass route params as props to the component
  },
  {
    path: '/employees/add',
    name: 'EmployeePageAdd',
    component: EmployeePage,
    props: { isAdd: true } // Pass route params as props to the component
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
