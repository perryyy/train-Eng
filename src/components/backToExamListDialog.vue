<template>
	<el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="fit-content"
    center
    close-on-click-modal
    close-on-press-escape
    :show-close="false"
    align-center
    destroy-on-close
  >
    <span>Are you sure you want to leave this page ?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="changeDialogStatus(false)">Cancel</el-button>
        <el-button type="primary" @click="back()">
          Back
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useSettingStore } from '@/store/setting'
  import { useTopicStore } from '@/store/topic'

  const router = useRouter()
  const userStore = useTopicStore()
  const settingStore = useSettingStore()
  const dialogVisible = computed(() => settingStore.dialogVisible)

  const changeDialogStatus = (status: boolean) => {
    settingStore.isChangeDialogStatus(status)
  }
  const back = () => {
    changeDialogStatus(false)
    userStore.updateExamStart(false)
    router.push('/')
  }
</script>
<style lang="scss" scoped>
</style>