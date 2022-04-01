import { useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export const incrementCount = () => {
    // const dispatch = useDispatch()
    // dispatch(increment())
    increment()

}
export const decrementCount = () => {
    // dispatch(decrement())
    decrement()
}
