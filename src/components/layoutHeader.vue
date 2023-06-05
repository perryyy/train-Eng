<template>
  <div class="header">
    <div class="title">
      <span class="text-large font-600 mr-3"> Title </span>
    </div>
    <div class="setting">
      <el-button 
        icon="Setting"
        circle
        @click="changeSettingDialog(true)"
      />
    </div>
    <el-dialog
      v-model="IsSettingDialogOpen"
      title="Setting"
      width="fit-content"
      center
      close-on-click-modal
      close-on-press-escape
      align-center
      destroy-on-close
      :show-close="false"
    >
      <el-form :model="form" label-width="fit-content">
        <el-form-item label="Is Open Dot For New Topic : ">
          <el-switch v-model="form.isOpenDotForNewTopic" />
        </el-form-item>
      </el-form> 
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="changeSettingDialog(false)">Cancel</el-button>
          <el-button type="primary" @click="updateSetting()">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
  import { ref, reactive, computed, onMounted } from 'vue'
  import { useSettingStore } from '@/store/setting'

  const IsSettingDialogOpen = ref(false)

  const changeSettingDialog = (status: boolean) => {
    IsSettingDialogOpen.value = status
  }

  const form = reactive({
    isOpenDotForNewTopic: false
  })

  const settingStore = useSettingStore()

  const updateSetting = () => {
    settingStore.updateSettings(form)
    changeSettingDialog(false)
  }
  const getUserSetting = () => {
    const userSettings = computed(() => settingStore.settings)
    form.isOpenDotForNewTopic = userSettings.value.isOpenDotForNewTopic
  }
  onMounted(() => {
    getUserSetting()
  })
</script>
<style lang="scss" scoped>
  .header {
    background-color: #CFD3DC;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 0 1%;
  }
</style>