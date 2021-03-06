import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/myviews/index.vue'
import TablesView from './components/myviews/table.vue'
import TasksView from './components/myviews/tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/myviews/leaflet.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: '主页',
        meta: {description: '看看这个环境'}
      }, {
        path: 'tables',
        component: TablesView,
        name: '表格',
        meta: {description: '简单的表格'}
      }, {
        path: 'tasks',
        component: TasksView,
        name: '任务',
        meta: {description: '任务列表'}
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings',
        meta: {description: 'User settings page'}
      }, {
        path: 'access',
        component: AccessView,
        name: 'leaflet地图',
        meta: {description: '用于移动设备的交互式地图'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers'}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
