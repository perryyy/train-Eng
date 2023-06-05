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
							:label="util.replaceUnderscoreWithSpace(choiceItem)"
							:disabled="isTestFinished"
							:border="isTestFinished && isAnswerCorrect(userAnswers[Object.keys(item)[0]], Object.keys(item)[0], choiceItem)"
							name="type" 
						/>
					</el-radio-group>
				</div>
			</el-card>
		</div>
    <actions 
      :isTestFinished="isTestFinished"
      @handleSubmit="handleSubmit"
      @handleRestart="handleRestart"
    />
	</div>
</template>
<script lang="ts" setup>
	import { ref, onMounted, toRef } from 'vue'
	import { useTopicStore } from '@/store/topic'
	import { TOPIC_ARRAY, OBJECT_STANDARD } from '@/type'
	import { CONST } from '@/utils/const'
	import util from '@/utils/utils'
	import actions from '@/components/actions.vue'

	const props = defineProps({
		topicArr: {
			type: Array as () => TOPIC_ARRAY[],
			required: true,
		},
	})
	const choiceTopicArr: Ref<Array<{ [key: string]: { [key: string]: string } }>> = ref([])
  const topicArr = toRef(props, 'topicArr').value

	const genChoiceTopic = () => {
		const flattenedValues = topicArr.map(item => item.key)
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

	const isTestFinished = ref(false)
	const emit = defineEmits(['emitResult', 'restart'])
	const userStore = useTopicStore()

	const handleSubmit = () => {
  	const questionCount = choiceTopicArr.value.length
		let correctAnswerCount = 0
		for (const key in transformedObject) {
			if (
				transformedObject.hasOwnProperty(key) &&
				userAnswers.value.hasOwnProperty(key) 
			) {
				const userAnswerValue = userAnswers.value[key]
				if (userAnswerValue.toString() === util.replaceUnderscoreWithSpace(transformedObject[key])) {
					correctAnswerCount ++
				}
			}
		}
		const resultObj = util.calculateExamResults(questionCount, correctAnswerCount)
		isTestFinished.value = true
		emit('emitResult', resultObj)
	}

	const transformedObject: OBJECT_STANDARD = {}

	topicArr.forEach((item) => {
		transformedObject[item.value] = item.key
	})
	const isAnswerCorrect = (answers: string[], topic: string, choiceItem: string) => {
		return (
			((answers && !answers.includes(util.replaceUnderscoreWithSpace(choiceItem)))|| !answers) && 
			transformedObject[topic] === choiceItem
		)
	}
	const handleRestart = () => {
		util.openFullScreenLoading()
		emit('restart')
		userStore.updateExamStart(true)
		isTestFinished.value = false
		userAnswers.value = {}
		util.scrollToTop()
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
}

</style>