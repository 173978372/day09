import { data } from 'autoprefixer'
import { ref, onBeforeUnmount } from 'vue'

export function fullScreen(ele) {
  const qw = ref(false)
  let enter = () => {
    console.log(12)
    console.log(ele.value)
    ele.value.requestFullscreen().then(() => {
      qw.value = true
    })
  }
  let exit = () => {
    document.exitFullscreen().then(() => {
      qw.value = false
    })
  }
  let togger = () => {
    if (qw.value) {
      exit()
    } else {
      enter()
    }
  }
  return {
    qw,
    enter,
    exit,
    togger
  }
}
export function wang() {
  let as = ref(window.navigator.onLine)
  window.addEventListener('online', () => {
    as.value = true
  })
  window.addEventListener('offline', () => {
    as.value = false
  })
  return as
}

export const useHttp = (promiseGenerator, config = {}) => {
  if (!typeof promiseGenerator === 'function') {
    return
  }

  const loading = ref(true)
  const error = ref(undefined)
  const data = ref(undefined)
  const defaultConfig = { manual: false }
  const option = Object.assign(defaultConfig, config)
  const run = () => {
    const promise = promiseGenerator()
    if (!(promise instanceof Promise)) {
      return
    }
    promise
      .then((res) => {
        if (typeof option.transData === 'function') {
          res = option.transData(res)
        }
        data.value = res
      })
      .catch((err) => {
        error.value = err
      })
      .finally(() => {
        loading.value = false
      })
  }
  if (!option.manual) {
    run()
  }
  const result = {
    loading,
    data,
    error
  }
  if (option.manual) {
    result.run = run
  } else {
    run()
  }
  return result
}
