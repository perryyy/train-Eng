<template>
  <div class="pageExam">
    <div v-if="dataIsReady">
      <div class="score" v-if="!isExamStart">
        <el-row :gutter="4">
          <el-col
            v-for="(item, index) in result"
            :key="index"
            :md="4"
            :lg="4"
            :xl="4"
            :xs="8"
            :sm="8"
          >
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <el-text tag="b">{{ item.title }}</el-text>
                </div>
              </template>
              <el-text size="large">{{ item.count }}</el-text>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div v-if="type === CONST.QUESTION_TYPE.CHOICE_QUESTION">
        <choice 
          :topicArr.sync="topicArr" 
          @restart="onRestart"
          @emitResult="onEmitResult"
        />
      </div>
      <div v-else>
        <fillInTheBlank
          :topicArr.sync="topicArr"
          @restart="onRestart"
          @emitResult="onEmitResult"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, reactive, ref, computed } from 'vue'
  import { useTopicStore } from '@/store/topic'
  import { useRouter } from 'vue-router'
  import { TOPIC } from '@/assets/topic'
  import { CONST } from '@/utils/const'
  import { RESULT, OBJECT_STANDARD } from '@/type'
  import { ElNotification } from 'element-plus'
  import util from '@/utils/utils'
  import fillInTheBlank from '@/components/fillInTheBlank.vue'
  import choice from '@/components/choice.vue'
  
  interface topicArr { key: string, value: string }

	const userStore = useTopicStore()
  const selectedTopic: string = userStore.selectedTopic
  const type = userStore.selectedQuestionType
  const count = userStore.selectedQuestionCount
  const fetchTopic: OBJECT_STANDARD | undefined = TOPIC[selectedTopic]
  const router = useRouter()

  let topicArr: topicArr[]= reactive([])

  onMounted(() => {
    if (fetchTopic === undefined) {
      userStore.updateExamStart(false)
      router.push('/train-Eng')
    } else {
      genTopic()
    }
  })

  const genTopic = () => {
    topicArr = Object.keys(fetchTopic).map(key => ({ key, value: fetchTopic[key] }))
    topicArr = util.getRandomItemsFromArray(topicArr, count)
    userStore.updateDataIsReady(true)
  }
  
  const isExamStart = computed(() => userStore.isExamStart)
  const dataIsReady = computed(() => userStore.dataIsReady)
  const result = ref<{ title: string; count: number }[]>([])
  const onEmitResult = (data : RESULT) => {
  userStore.updateExamStart(false)
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        result.value.push({
          title: key,
          count: data[key]
        })
      }
    }
    util.scrollToTop()
    ElNotification({
      title: 'Success',
      message: 'Exam is over',
      type: 'success',
      showClose: false,
    })
  }
  const onRestart = () => {
    result.value = []
  }
</script>
<style lang="scss" scoped>
  .pageExam {
    .el-row {
			margin: 0 !important;
		}
    .score {
      padding: 1%;
    }
  }
</style>
