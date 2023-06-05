import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import { useTopicStore } from '@/store/topic'
import { useSettingStore } from '@/store/setting'
import util from '@/utils/utils'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/train-Eng',
    name: 'Index',
    meta: {
      title: 'Index',
    },
    component: defineAsyncComponent(() => import('@/pages/index.vue'))
  },
  {
    path: '/train-Eng/pageExam',
    name: 'pageExam',
    meta: {
      title: 'pageExam',
    },
    component: defineAsyncComponent(() => import('@/pages/pageExam.vue'))
  },
	{
		path: '/:catchAll(.*)',
		component: defineAsyncComponent(() => import('@/pages/404.vue'))
	}
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.isReady().then(() => {
  const currentPathName = window.location.pathname
  if (currentPathName === '/') {
    router.replace('/train-Eng')
  }
})

router.beforeEach((to, from, next) => {
  util.openFullScreenLoading()
  const userStore = useTopicStore()
  const isExamStart = userStore.isExamStart
  const settingStore = useSettingStore()
  if (from.name === null) {
    if (to.name === null) {
      userStore.updateDataIsReady(false)
      userStore.updateExamStart(false)
      next('/train-Eng')
    } else if (to.name === 'Index') {
      userStore.updateExamStart(false)
    }
  }
  if (to.fullPath === '/train-Eng' && isExamStart) {
    settingStore.updateDialogStatus(true)
  } else {
    next()
  }
})
export default router