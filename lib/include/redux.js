function createStore (reducer, predefinedState = {}) {
  let state = predefinedState
  const getState = () => state

  function dispatch (action) {
    state = reducer(state, action)
    return action
  }
  return {getState, dispatch}
}

module.exports = {createStore}
