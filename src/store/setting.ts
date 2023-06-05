import { defineStore } from 'pinia'
import { SETTING_FORM } from '@/type'

export const useSettingStore = defineStore({
	id: 'setting', 
	state: () => {
		return {
			settings: {
				isOpenDotForNewTopic: false
			},
			dialogVisible: false
		}
	},
	actions: {
		updateSettings(Settings: SETTING_FORM) {
			this.settings = Settings
		},
		updateDialogStatus(Status: boolean) {
			this.dialogVisible = Status
		}
	},
	persist: [
		{
			paths: ['settings'],
			storage: localStorage,
		}
	]
})