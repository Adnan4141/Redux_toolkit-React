import { useDispatch, useSelector } from "react-redux"
import { decrement, increaseByAmount, increment, reset } from "./CounterSlice";


const CounterView = () => {
    const dispatch = useDispatch();
    const count =  useSelector((state)=>(state.counter.count));
    console.log(count)

  return (
   <div>
    <div>CounterView</div>
    <p>Count: {count}</p>
    <button onClick={()=>{dispatch(increment())}} className="border text-red-400">Increment</button>
    <button onClick={()=>{dispatch(decrement())}} className="border text-red-400">Decrement</button>
    <button onClick={()=>{dispatch(reset())}} className="border text-red-400">Reset</button>
    <button onClick={()=>{dispatch(increaseByAmount(5))}} className="border border-green-900 text-red-400">Increase By Ammount 5</button>
   </div>
  )
}

export default CounterView