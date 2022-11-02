import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulComponents';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I am stateful class component" name="Mike" />
     
    </div>
  );
}

export default App;
