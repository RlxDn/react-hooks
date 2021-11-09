// import React from 'react';

// export default function Example4() {
//   const [state, setState] = React.useState({count : 0});

//   return (
//     <div>
//       <p>당신이 클릭한 획수는 {state.count}입니다.</p>
//       <button onClick={click}>Click me</button>
//     </div>
//   );

//   function click() {
//     setState((state) => {
//       return {
//         count : state.count + 1,
//       };
//     });
//   }
// }
import React from 'react'

export default class Example4 extends React.Component {
  state = {count: 0};
  render() {
    console.log("render(0)", this.state.count)
    const {count} = this.state;
    return (
      <div>
        <p>당신이 클릭한 획수는 {count}입니다.</p>
        <button onClick={this.click}>Click me</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount(1)", this.state.count)
  }
  componentDidUpdate() {
    console.log("componentDidUpdate(2)", this.state.count)
  }
  click = () => {
    this.setState({count : this.state.count + 1});
  };
}
