import logo from './logo.svg';
import './App.css';
import Example1 from './conponents/Example1';
import Example2 from './conponents/Example2';
import Example3 from './conponents/Example3';
import Example4 from './conponents/Example4';
import Example5 from './conponents/Example5';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Example1></Example1>
        <Example2></Example2>
        <Example3></Example3>
        <Example4></Example4> */}
        <Example5></Example5>
      </header>
    </div>
  );
}

export default App;
