import React, { useReducer } from 'react';

type StateType = {
  count: number
}

type Actions = {
  type: 'increment' | 'decrement' | 'plus'
  payload?: number
}

function App() {
  // reducerを定義
  const countReducer = (state: StateType, action: Actions): StateType => {
    if (action.type === 'increment') {
      return { count: state.count + 1 }
    }
    if (action.type === 'decrement') {
      return { count: state.count - 1 }
    }
    if (action.type === 'plus') {
      if (action.payload === undefined) return state;
      return { count: state.count + action.payload }
    }
    return state;
  }

  // useReducerの第一引数でreducerを、第二引数で初期値を設定
  const [state, dispatch] = useReducer(countReducer, { count: 0 })

  // dispatchでactionをcallする
  return (
    <div>
      <h2>use reducer sample</h2>
      <div>count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'increment'}) }>plus</button>
      <button onClick={() => dispatch({ type: 'decrement' }) }>minus</button>
      <button onClick={() => dispatch({ type: 'plus', payload: 3 }) }>plus 3</button>
    </div>
  );
}

export default App;
