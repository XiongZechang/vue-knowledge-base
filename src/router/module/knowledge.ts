import { RouteRecordRaw } from 'vue-router'

const knowledgeRoutes: Array<RouteRecordRaw> = [
    {
        path: '/knowledge/list',
        component: () => import('../../components/knowledge/list.vue'),
        name: 'knowledgeList',
        meta: { title: 'knowledgeList' }
    },
    {
        path: '/knowledge/detail',
        component: () => import('../../components/knowledge/detail.vue'),
        name: 'knowledgeDetail',
        meta: { title: 'knowledgeDetail' }
    },
    {
        path: '/knowledge/add',
        component: () => import('../../components/knowledge/add.vue'),
        name: 'knowledgeAdd',
        meta: { title: 'knowledgeAdd' }
    },
    {
        path: '/knowledge/update',
        component: () => import('../../components/knowledge/update.vue'),
        name: 'knowledgeUpdate',
        meta: { title: 'knowledgeUpdate' }
    }
]

export default knowledgeRoutes
