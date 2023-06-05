import { Topic } from '@/type'
import { QUESTION as QUESTION_20230523 } from '@/assets/topicSrc/20230523'
import { QUESTION as QUESTION_20230524 } from '@/assets/topicSrc/20230524'
import { QUESTION as QUESTION_20230525 } from '@/assets/topicSrc/20230525'
import { QUESTION as QUESTION_20230526 } from '@/assets/topicSrc/20230526'

const TOPIC: Topic = {
  ...QUESTION_20230523,
  ...QUESTION_20230524,
  ...QUESTION_20230525,
  ...QUESTION_20230526
}
export { TOPIC }