import React, { useMemo, useState } from "react";

const CounterUseMemo = () => {
    const [count, setCount] = useState(0);
    // const arr = [1, 2, 3, 5, 7];
    const [arr, setArr] = useState([1, 2, 3, 5, 8]);
    function showMax() {
        // it should not rerender until the any changes came in
        console.log("Changing max");
        return Math.max(...arr);
    }

    const memVal = useMemo(() => showMax(), [arr]);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Add Count</button>
            <button
                onClick={() =>
                    setArr([...arr, Math.round(count * Math.random())])
                }
            >
                Add to Array
            </button>
            <p>{JSON.stringify(arr)}</p>
            <p>{memVal}</p>
            <p>{count}</p>
        </div>
    );
};

export default CounterUseMemo;

/*
The React useMemo Hook returns a memoized value.

Can use for Pure function.
     function sqrt(n){
        return n * n;
    }

Side effects should not be there.
    let x = 2;
    function sqrt(n){
        return x * n;
    }
        Not valid

Rerender everytime unnecessarily.

Use when dealing with extensive calculations like dealing with millions of numbers.

Ex:
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

*/
