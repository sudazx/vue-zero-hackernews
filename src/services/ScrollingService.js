const el = document.body

const reachBottom = () => {
  let scrollTop = document.documentElement.scrollTop
  return scrollTop + el.offsetHeight + 50 >= el.scrollHeight
}

const isFunction = (obj) => {
  return typeof obj === 'function'
}

const blankFunction = () => void 0

export const proxyTimerListen = (target) => {
  if (target && isFunction(target)) {
    let timer = null
    return function () {
      if (timer) {
        return void 0
      }
      timer = setTimeout(function () {
        Function.prototype.call.call(target)
        clearTimeout(timer)
        timer = null
      }, 200)
    }
  }
  return blankFunction
}

/**
 * add a hook to window scroll listener,
 * @param hook
 * @returns {Function} a callback can release this hook
 */
export const addHook = (hook) => {
  let previousHook = window.onscroll
  window.onscroll = function () {
    if (previousHook && isFunction(previousHook)) {
      previousHook()
    }
    if (isFunction(hook)) {
      hook()
    }
  }
  return function () {
    window.onscroll = previousHook
  }
}

export const reachBottomListening = (cb) => {
  return addHook(proxyTimerListen(function () {
    if (reachBottom()) {
      cb()
    }
  }))
}
