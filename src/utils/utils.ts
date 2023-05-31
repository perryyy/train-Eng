import { OBJECT_STANDARD } from '@/type'
import { ElLoading } from 'element-plus'
import { CONST } from '@/utils/const'

// Get random items from an array
const getRandomItemsFromArray = (arr: any, count: number) => {
  const randomItems = []
  const copyArr = [...arr]

  while (randomItems.length < count && copyArr.length > 0) {
    const randomIndex = Math.floor(Math.random() * copyArr.length)
    randomItems.push(copyArr[randomIndex])
    copyArr.splice(randomIndex, 1)
  }

  return randomItems
}
// Shuffle the order of object properties randomly
function shuffleObjectProperties(obj: OBJECT_STANDARD): OBJECT_STANDARD {
  const propertyNames = Object.keys(obj)
  const shuffledPropertyNames = shuffleArray(propertyNames)
  const shuffledObject: OBJECT_STANDARD = {}

  for (let i = 0; i < shuffledPropertyNames.length; i++) {
    const propertyName = shuffledPropertyNames[i]
    shuffledObject[propertyName] = obj[propertyName]
  }

  return shuffledObject
}

// Shuffle the order of array elements randomly
function shuffleArray(array: any[]): any[] {
  const shuffledArray = [...array]

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]]
  }

  return shuffledArray
}
// Check if two objects are equal
function isObjectsEqual(a: string[], b: string[]): boolean {
  if (a.length !== b.length) {
    return false
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false
    }
  }
  return true
}
const openFullScreen = () => {
  const loading = ElLoading.service({
    lock: true,
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
  }, CONST.LOADING_SEC)
}
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
export default {
  getRandomItemsFromArray,
  shuffleObjectProperties,
  isObjectsEqual,
  openFullScreen,
  scrollToTop
}