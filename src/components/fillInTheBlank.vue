<template>
  <div class="fillInTheBlank">
    <div v-for="(item, index) in topicArr" :key="item.key" class="question">
      <el-card class="box-card" width="99.9%" shadow="hover">
        <template #header>
          <div class="card-header" @click="focusInput(item.key)">
            <div class="card-header--text">
              <el-text tag="b">{{ index + 1 }} . {{ item.value }}</el-text>
            </div>
            <div class="card-header--icon">
              <el-icon @click="pronounceWord(item.key)"><VideoPlay /></el-icon>
            </div>
          </div>
        </template>
        <el-input
          :id="`input-${item.key}`"
          v-model.trim="userAnswers[item.key]"
          placeholder="Please input"
          class="input-with-select"
          clearable
          autofocus
          :disabled="isTestFinished"
          :maxlength="inputMaxLength"
        >
        </el-input>
        <div class="errMsg" v-if="userAnswers[item.key] && userAnswers[item.key].length >= inputMaxLength">
          <el-text type="danger">The input text length cannot exceed {{ inputMaxLength }} characters.</el-text>
        </div>
        <div class="answer" v-if="!isEqualStrings(userAnswers[item.key], item.key) && isTestFinished">
          Answer : <span class="correctAnswer">{{ util.replaceUnderscoreWithSpace(item.key) }}</span>
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
  import { ref, toRef } from 'vue'
  import { useTopicStore } from '@/store/topic'
  import { CONST } from '@/utils/const'
  import { TOPIC_ARRAY } from '@/type'
  import util from '@/utils/utils'
  import actions from '@/components/actions.vue'

  const props = defineProps({
    topicArr: {
      type: Array as () => TOPIC_ARRAY[],
      required: true,
    },
  })
  const topicArr = toRef(props, 'topicArr')
  const inputMaxLength = CONST.INPUT_MAX_LENGTH
  const isTestFinished = ref(false)
  const utterance = new SpeechSynthesisUtterance()
  const userAnswers = ref<Record<string, any>>({})

  const pronounceWord = (string: string) => {
    utterance.text = util.replaceUnderscoreWithSpace(string)
    speechSynthesis.speak(utterance)
  }
	const emit = defineEmits(['emitResult', 'restart'])

  const userStore = useTopicStore()
  const handleSubmit = () => {
    const questionCount = topicArr.value.length
    let correctAnswerCount = 0

    for (let prop in userAnswers.value) {
      if (userAnswers.value.hasOwnProperty(prop)) {
        const value: Record<string, any> = userAnswers.value[prop]
        if (typeof value === 'string' && isEqualStrings(value, prop)) {
          correctAnswerCount++
        }
      }
    }
    const resultObj = util.calculateExamResults(questionCount, correctAnswerCount)
    isTestFinished.value = true
    emit('emitResult', resultObj)
  }

  const focusInput = (key: string) => {
    const idName = `input-${key}`
    const currentInput = document.getElementById(idName)
    if (currentInput) {
      currentInput.focus()
    }
  }
  const handleRestart = () => {
    util.openFullScreenLoading()
    emit('restart')
    userStore.updateExamStart(true)
    isTestFinished.value = false
    userAnswers.value = {}
    util.scrollToTop()
  }
  const isEqualStrings = (userAnswer: string, topic: string) => {
    const formatUserAnswer = util.removeAllSpaces(userAnswer)
    const formatTopic = util.removeUnderscoreAndNormalize(topic)
    return formatUserAnswer === formatTopic
  }
</script>
<style lang="scss" scoped>
  .fillInTheBlank{
    .question {
      padding: 1%;
      .box-card {
        .card-header {
          width: 100%;
          display: flex;
          &--text {
            width: fit-content !important;
          }
          &--icon {
            margin-left: 1%;
            display: flex;
            .el-icon {
              margin: auto;
              cursor: pointer;
            }
          }
        }
        .errMsg {
          margin-top: 1%;
        }
        .answer {
          margin-top: 1%;
          .correctAnswer {
            color: red;
          }
        }
      }
    }
  }
</style>