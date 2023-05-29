import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import { useTopicStore } from '@/store/topic'
import { useSettingStore } from '@/store/setting'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: 'Index',
    },
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/pageExam',
    name: 'pageExam',
    meta: {
      title: 'pageExam',
    },
    component: () => import('@/pages/pageExam.vue')
  },
	{
		path: '/:catchAll(.*)',
		component: defineAsyncComponent(() => import('@/pages/404.vue'))
	}
]
const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to, from) => {
  const userStore = useTopicStore()
  const isExamStart = userStore.isExamStart
  const settingStore = useSettingStore()
  if (to.fullPath === '/' && isExamStart) {
    settingStore.isChangeDialogStatus(true)
    return false
  } else {
    return true
  }
})
export default router