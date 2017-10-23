function createStore (reducer, predefinedState = {}) {
  let state = predefinedState
  const getState = () => state

  function dispatch (action) {
    state = reducer(state, action)
    return action
  }

  function subscribe (listener) {

  }

  return {getState, dispatch, subscribe}
}

function combineReducers (reducers) {

}

function applyMiddleware (...middleWares) {

}

module.exports = {createStore, combineReducers, applyMiddleware}
