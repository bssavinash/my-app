import Api from './store/api.js'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrementCount, incrementCount } from './store/action'
import { decrement, increment } from './store/counterSlice'
import Login from './login/Login.js'
import ReadCred from './login/ReadCred.js'


export default function Counter() {
  const count = useSelector(state => state.counter.value)
  const userDetails = useSelector(state => state.login_data.userDetails)
  console.log('count', count,userDetails)
  // const dispatch = useDispatch()
  // const handleClickDecrement = () => {
  //   dispatch(decrement())
  // }

  // const handleClickIncrement = () => {
  //   dispatch(increment())
  // }
  return (
    <div>
      {/* <div>
        <button
          aria-label="Increment value"
          onClick={handleClickIncrement}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={handleClickDecrement}
        >
          Decrement
        </button>
       
        
      </div> */}
      <ReadCred />
      <Login />
    </div>
  )
}