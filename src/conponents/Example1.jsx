import React from 'react'

export default class Example1 extends React.Component {
  state = {count: 0};
  render() {
    const {count} = this.state;
    return (
      <div>
        <p>당신이 클릭한 획수는 {count}입니다.</p>
        <button onClick={this.click}>Click me</button>
      </div>
    );
  }
  click = () => {
    this.setState({count : this.state.count + 1});
  };
}
