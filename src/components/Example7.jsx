import {useState, useMemo} from "react";

function sum(persons) {
  console.log("sum...");
  return persons.map((person) => person.age).reduce((l,r) => l + r, 0);
}
export default function Example7() {
  const [value, setValue] = useState("");
  const [persons] = useState([
    {name: "Mark", age: 39},
    {name: "Jane", age: 28},
  ]);

  //const count = sum(persons);
  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

  return (
    <div>
      <input value={value} onChange={change}></input>
      <p>{count}</p>
    </div>
  );

  function change(e) {
    setValue(e.target.value)
  }
}