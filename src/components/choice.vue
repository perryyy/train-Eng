<template>
	<div class="choice">
		<div v-for="(item, index) in choiceTopicArr" :key="index" class="question">
			<el-card class="box-card" width="99.9%" shadow="hover">
				<template #header>
					<div class="card-header">
						<div class="card-header--text">
							<el-text tag="b">{{ index + 1 }} . {{ Object.keys(item)[0] }}</el-text>
						</div>
					</div>
				</template>
				<div class="choiceItems">
					<el-radio-group 
						v-model="userAnswers[Object.keys(item)[0]]"
					>
						<el-radio
							v-for="(choiceItem, i) in item[Object.keys(item)[0]]"
							:key="i"
							:label="choiceItem"
							:disabled="isTestFinished"
							:border="isTestFinished && isAnswerCorrect(userAnswers[Object.keys(item)[0]], Object.keys(item)[0], choiceItem)"
							name="type" 
						/>
					</el-radio-group>
				</div>
			</el-card>
		</div>
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
				@click="submit()"
			>
				Submit
			</el-button>
		</div>
		<backToExamListDialog/>
	</div>
</template>
<script lang="ts" setup>
	import { ref, onMounted } from 'vue'
	import { useTopicStore } from '@/store/topic'
	import { useSettingStore } from '@/store/setting'
	import { ElNotification } from 'element-plus'
	import { TOPIC_ARRAY, OBJECT_STANDARD } from '@/type'
	import { CONST } from '@/utils/const'
	import util from '@/utils/utils'
	import backToExamListDialog from './backToExamListDialog.vue'

	const props = defineProps({
		topicArr: {
			type: Array as () => TOPIC_ARRAY[],
			required: true,
		},
	})
	const choiceTopicArr: Ref<Array<{ [key: string]: { [key: string]: string } }>> = ref([])
	const topicArr = props.topicArr
	const flattenedValues = topicArr.map(item => item.key)

	const genChoiceTopic = () => {
		for (let i = 0; i < topicArr.length; i++) {
			let choiceTopicItems = []
			choiceTopicItems.push(topicArr[i].key)
			while (choiceTopicItems.length < CONST.CHOICE_OPTIONS_LENGTH) {
				const randomIndex = Math.floor(Math.random() * flattenedValues.length)
				const randomItem = flattenedValues[randomIndex]
				if (!choiceTopicItems.includes(randomItem)) {
					choiceTopicItems.push(randomItem)
				}
			}
			const selectedObject: OBJECT_STANDARD = {}
			choiceTopicItems.forEach((item, index) => {
				selectedObject[`item${index + 1}`] = item
			})
			const obj: { [key: string]: { [key: string]: string } } = {
				[topicArr[i].value]: util.shuffleObjectProperties(selectedObject)
			}
			choiceTopicArr.value.push(obj)
		}
	}

	const userAnswers: Ref<Record<string, string[]>> = ref({})

	const settingStore = useSettingStore()
	const changeDialogStatus = (status: boolean) => {
		settingStore.isChangeDialogStatus(status)
	}

	const isTestFinished = ref(false)
	const emit = defineEmits(['emitResult'])
	const userStore = useTopicStore()

	const submit = () => {
  	const questionCount = choiceTopicArr.value.length
		let correctAnswerCount = 0
		let incorrectAnswerCount = 10
		for (const key in transformedObject) {
			if (
				transformedObject.hasOwnProperty(key) &&
				userAnswers.value.hasOwnProperty(key) 
			) {
				const userAnswerValue = userAnswers.value[key]
				if (userAnswerValue.toString() === transformedObject[key]) {
					correctAnswerCount ++
				}
			}
		}
  	incorrectAnswerCount = questionCount - correctAnswerCount
		isTestFinished.value = true
  	userStore.updateExamStart(false)
		const resultObj = {
			'Total Count': questionCount,
			'Correct': correctAnswerCount,
			'Incorrect': incorrectAnswerCount
		}
		emit('emitResult', resultObj)
		ElNotification({
			title: 'Success',
			message: 'Exam is over',
      type: 'success',
			showClose: false
		})
	}

	const transformedObject: OBJECT_STANDARD = {}

	topicArr.forEach((item) => {
		transformedObject[item.value] = item.key
	})
	const isAnswerCorrect = (answers: string[], topic: string, choiceItem: string) => {
		return (
			((answers && !answers.includes(choiceItem))|| !answers) && 
			transformedObject[topic] === choiceItem
		)
	}
	onMounted(() => {
    genChoiceTopic()
  })
</script>
<style lang="scss" scoped>
.choice{
	.question {
		height: 100%;
		padding: 1%;
		.choiceItems {
			.is-bordered {
				border-color: red;
			}
		}
	}
	.actions {
		padding-bottom: 1%;
		width: 100%;
		display: flex;
		justify-content: center; 
		align-items: center; 
	}
}

</style>