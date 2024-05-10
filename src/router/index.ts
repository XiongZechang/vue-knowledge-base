import type { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';


export const publicRoutes: Array<RouteRecordRaw> = [

	{
		path: '/home',
		name: 'home',
		component: () => import('../components/HelloWorld.vue'),
        meta: {
            default: true
        }
	},
    {
        path: '/',
        name: 'knowledge',
        component: () => import('../components/knowledge/index.vue'),
		meta: {
			title:'knowledge'
		},
		children:[
			{
				path: '/knowledge/detail',
				name: 'knowledge-detail',
				component: () => import('../components/knowledge/detail.vue')
			},
			{
				path: '/knowledge/list',
				name: 'knowledge-list',
				component: () => import('../components/knowledge/list.vue')
			},
			{
				path: '/knowledge/add',
				name: 'knowledge-add',
				component: () => import('../components/knowledge/add.vue')
			},
			{
				path: '/knowledge/update',
				name: 'knowledge-update',
				component: () => import('../components/knowledge/update.vue')
			},
		]
    },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: publicRoutes
});

/* 初始化路由表 */
export function resetRouter() {
	router.getRoutes().forEach((route) => {
		const { name } = route;
		if (name) {
			router.hasRoute(name) && router.removeRoute(name);
		}
	});
}
/* 导出 setupRouter */
export const setupRouter = (app: App<Element>) => {
	app.use(router);
};

