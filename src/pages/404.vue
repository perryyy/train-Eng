<template>
  <el-empty>
    <el-button type="primary" @click="jumpToHome">Button</el-button>
  </el-empty>
	<el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
		show-close
  >
    <span>Redirect to the homepage later.</span>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { CONST } from '@/utils/const'

  const dialogVisible = ref(true)
	const router = useRouter()
  
	const jumpToHome = () => {
    dialogVisible.value = false
    router.push('/train-Eng')
	}
  let jumpTimer: NodeJS.Timeout | null 

  onMounted(() => {
    jumpTimer = setTimeout(() => {
      jumpToHome()
    }, CONST.JUMP_TO_HOME_SEC)
  })

  onUnmounted(() => {
    if (jumpTimer) {
      clearTimeout(jumpTimer)
      jumpTimer = null
    }
  })
</script>
<style scoped>
</style>