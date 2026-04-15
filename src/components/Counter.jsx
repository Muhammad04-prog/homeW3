import React from 'react'

export default function Counter() {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
  return (
    <>
    <div className="flex items-center gap-4">
        <button onClick={decrement} className="w-8 h-8 border flex items-center justify-center">-</button>
        <span className="text-xl">{count}</span>
        <button onClick={increment} className="w-8 h-8 border flex items-center justify-center">+</button>
    </div>
    </>
  )
}