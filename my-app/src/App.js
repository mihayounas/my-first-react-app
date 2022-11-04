import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulComponents';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import NavBarSimple from './components/NavBarSimple';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <NavBarSimple  />
     <SideBar />
    </div>
  );
}

export default App;
