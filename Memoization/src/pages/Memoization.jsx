import { useState } from "react"
import FibonacciComponent from "../components/FibonacciComponent"

const Memoization = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(4);

    console.log('This is Memoized page')
  return (
    <div className="bg-black text-white min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Memoization</h1>
        <p>Count: {count}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={() => setCount(count + 1)}>Increment</button>

        <FibonacciComponent number={number} />
        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600" onClick={() => setNumber(number + 1)}>Increment Fibonacci Number</button>
        {/* <FibonacciComponent  /> */}

    </div>
  )
}

export default Memoization
