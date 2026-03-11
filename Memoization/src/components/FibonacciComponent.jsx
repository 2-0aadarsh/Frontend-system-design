import React, { useMemo } from 'react'

const FibonacciComponent = React.memo(({ number }) => {

  console.log('FibonacciComponent renders')
    const fibonacci = useMemo(() => {
        const fib = (number) => {
            if (number <= 1) return number;
            return fib(number - 1) + fib(number - 2);
        }
        return fib(number);
    }, [number])

  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Fibonacci Component</h1>
        <p>Fibonacci of {number} is : <span className="font-mono text-pink-500 font-bold text-2xl">{fibonacci}</span></p>


    </div>
  )
})

export default FibonacciComponent