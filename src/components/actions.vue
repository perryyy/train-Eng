<template>
  <div class="actions">
    <el-button
      type="warning"
      @click="changeDialogStatus(true)"
    >
      Back
    </el-button>
    <el-button 
      type="primary" 
      :disabled="isTestFinished"
      @click="$emit('handleSubmit')"
    >
      Submit
    </el-button>
    <el-button 
      type="success"
      v-if="isTestFinished"
      @click="$emit('handleRestart')"
    >
      Restart
    </el-button>
  </div>
</template>
<script lang="ts" setup>
  import { toRef } from 'vue'
  import { useSettingStore } from '@/store/setting'
  const props = defineProps({
    isTestFinished: {
      type: Boolean,
      default: false,
      required: true
    },
  })
  const isTestFinished = toRef(props, 'isTestFinished')

  const settingStore = useSettingStore()
  function changeDialogStatus(status: boolean) {
    settingStore.updateDialogStatus(status)
  }
  
  const emit = defineEmits(['handleSubmit', 'handleRestart'])
</script>
<style lang="scss" scoped>
  .actions {
    padding-bottom: 1%;
    width: 100%;
    display: flex;
    justify-content: center; 
    align-items: center; 
  }
  @media only screen and (max-width: 767px) {
		.actions {
			padding: 5% 0;
		}
	}
</style>