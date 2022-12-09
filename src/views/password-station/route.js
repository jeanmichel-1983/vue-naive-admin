const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Password',
  path: '/password',
  component: Layout,
  redirect: '/password/station',
  meta: {
    title: '密码管理',
    icon: 'ri:lock-password-line',
    role: ['admin'],
    requireAuth: true,
    order: 4,
  },
  children: [
    {
      name: 'PasswordStation',
      path: 'station',
      component: () => import('./index.vue'),
      meta: {
        title: '密码站',
        icon: 'ri:lock-password-line',
        role: ['admin'],
        requireAuth: true,
        order: 0,
      },
    },
  ],
}
