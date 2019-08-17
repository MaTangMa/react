import Home from '../components/Home.js';
import News from '../components/News.js';
import FormDemo from '../components/FormDemo.js';
import ToDoList from '../components/ToDoList.js';
import NewsDetail from '../components/NewsDetail.js';
import SetCenter from '../components/SetCenter.js';
import SetUserSeting from '../components/SetUserSeting.js';
import SetSecuritySeting from '../components/SetSecuritySeting';

let routers = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/newsDetail',
    component: NewsDetail
  },
  {
    path: '/form',
    component: FormDemo
  },
  {
    path: '/todoList',
    component: ToDoList
  },
  {
    path: '/setCenter',
    component: SetCenter,
    routers: [
      // 嵌套路由
      {
        path: '/setCenter/userSeting',
        component: SetUserSeting,
        exact: true
      },
      {
        path: '/setCenter/securitySeting',
        component: SetSecuritySeting
      }
    ]
  }
];

export default routers;
