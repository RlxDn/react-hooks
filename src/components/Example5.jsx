import React from 'react';

export default function Example5() {
  const [count, setCount] = React.useState(0);
  React.useEffect (() => {
    console.log("componentDidMount", count)
    
    return () =>  {
      console.log("componentWillUnmount")
    }
  }, []);
  React.useEffect (() => {
    console.log("componentDidUpdate", count)

    return () =>  {
      console.log("componentWillUnmount")
    }
  }, [count]);
  return (
    <div>
      <p>당신이 클릭한 획수는 {count}입니다.</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  };
}