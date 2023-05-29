import { defineStore } from 'pinia'

export const useTopicStore = defineStore({
	id: 'topic', 
	state: () => {
		return {
			selectedTopic: '',
			selectedQuestionType: '',
			selectedQuestionCount: 0,
			isExamStart: false
		}
	},
	actions: {
		updateTopic(Topic: string) {
			this.selectedTopic = Topic
		},
		updateQuestionCount(Count: number) {
			this.selectedQuestionCount = Count
		},
		updateQuestionType(Type: string) {
			this.selectedQuestionType = Type
		},
		updateExamStart(Status: boolean) {
			this.isExamStart = Status
		}
	}
})