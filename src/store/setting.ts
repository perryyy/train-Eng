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
		updateSettings(settings: SETTING_FORM) {
			this.settings = settings
		},
		isChangeDialogStatus(status: boolean) {
			this.dialogVisible = status
		}
	}
})