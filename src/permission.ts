// ./permission.ts
import { Router } from 'vue-router';
import { getToken } from './utils/auth';
import { ElMessage } from 'element-plus';

export default function setupPermission(router: Router) {
  router.beforeEach((to, from, next) => {
    const token = getToken();

    if (token) {
      if (to.path === '/login') {
        // If logged in, redirect to the home page
        next({ path: '/' });
      } else {
        // If logged in, proceed to the requested page
        next();
      }
    } else {
      // If not logged in, redirect to the login page
      if (to.path !== '/login') {
        ElMessage({
          message: '请先登录',
          type: 'warning',
        });
        next({ path: '/login' });
      } else {
        // If the requested page is login, proceed
        next();
      }
    }
  });
}
