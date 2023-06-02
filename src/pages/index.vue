<template>
	<div class="mainPage">
		<el-row :gutter="12">
			<el-col :span="24">
			<el-form :inline="true">
				<el-form-item label="Question Count : ">
					<el-select v-model="selectedQuestionCount" @change="setQuestionCount()">
						<el-option :label="item" :value="item" v-for="(item, index) in allQuestionCount" :key="index"/>
					</el-select>
				</el-form-item>
				<el-form-item label="Question Type : ">
					<el-radio-group v-model="selectedQuestionType" @change="setQuestionType()">
						<el-radio
							:label="item"
							v-for="(item, index) in allQuestionType"
							:key="index"
						/>
					</el-radio-group>
				</el-form-item>
			</el-form>
			</el-col>
		</el-row>
		<el-row :gutter="12">
			<el-col 
				:span="6"
				:xs=12
				:sm=12
				:md=6
				:lg=6
				:xl=6
				v-for="(item, index) in allTopicSortByDate" 
				:key="index" 
				style="margin-top:5px"
			>
				<el-badge 
					value="new" 
					class="item" 
					is-dot
					:hidden="(isOldItem(item) || !isOpenDotForNewTopic)"
				>
					<el-card shadow="hover" @click="setTopic(item)">
						<div class="date" v-if="isRendered">
							{{ item }}
						</div>
						<div class="skeleton" v-else>
							<el-skeleton animated>
								<template #template>
									<el-skeleton-item variant="h3" style="width: 50%"/>
								</template>
							</el-skeleton>
						</div>
					</el-card>
				</el-badge>
			</el-col>
  	</el-row>
	</div>
</template>

<script lang="ts" setup>
	import { ref, onMounted, computed } from 'vue'
	import { useTopicStore } from '@/store/topic'
	import { useSettingStore } from '@/store/setting'
	import { useRouter } from 'vue-router'
	import { CONST } from '@/utils/const'
	import { RECORDS } from '@/assets/records'
	import { TOPIC } from '@/assets/topic'
	import { RECORDS_OBJECT } from '@/type'

	const allTopic = Object.keys(TOPIC)
	const allTopicSortByDate = [...allTopic].sort()

	const allQuestionCount = CONST.QUESTION_COUNT
	const allQuestionType = CONST.QUESTION_TYPE
	const userStore = useTopicStore()
	const settingStore = useSettingStore()
	const router = useRouter()

	const isOpenDotForNewTopic = computed(() => settingStore.settings.isOpenDotForNewTopic)

	const isRendered = ref(false)

	// Simulate API to receive data
	setTimeout(() => {
		isRendered.value = true
	}, CONST.RENDER_SEC)

	const selectedQuestionCount = ref(allQuestionCount.TEN)
	const selectedQuestionType = ref(allQuestionType.BLANK_FILLING_QUESTION)

	const setTopic = (item: string) => {
		userStore.updateExamStart(true)
		userStore.updateTopic(item)
		router.push('/train-Eng/pageExam')
	} 
	const setQuestionCount = () => {
		userStore.updateQuestionCount(selectedQuestionCount.value)
	} 
	const setQuestionType = () => {
		userStore.updateQuestionType(selectedQuestionType.value)
	} 
	const recordsObject: RECORDS_OBJECT = RECORDS.reduce((obj: RECORDS_OBJECT, record, index) => {
		obj[record] = index + 1
		return obj
	}, {})
	const isOldItem = (item: string) => {
		if (recordsObject[item]) {
			return true
		} else {
			return false
		}
	}
	onMounted(() => {
    setQuestionCount()
    setQuestionType()
  })
</script>
<style lang="scss" scoped>
	.mainPage {
		padding: 0.5%;
		.el-row {
			margin: 0 !important;
		}
		.el-badge {
			width: auto;
			display: block;
		}
		.date {
			cursor: pointer;
		}
	}
	@media only screen and (max-width: 767px) {
		.mainPage {
			padding: 2.5%;
		}
	}
</style>
