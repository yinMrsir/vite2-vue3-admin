import BasicLayout from '@/layouts/basicLayout/index.vue';

export default {
  orderNo: 2,
  path: '/users',
  name: 'users',
  component: BasicLayout,
  meta: {
    icon: 'TeamOutlined',
    title: '用户管理',
  },
  redirect: '/users/list',
  children: [
    {
      path: '/users/list',
      name: 'usersList',
      component: () => import('@/view/users/list.vue'),
      meta: {
        title: '用户列表',
      }
    },
    {
      path: '/users/info',
      name: 'usersInfo',
      hidden: true,
      component: () => import('@/view/users/info.vue'),
      meta: {
        parentName: 'usersList',
        title: '用户详情',
      }
    }
  ]
}