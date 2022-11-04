import logo from './logo.svg';
import './App.css';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from "./components/EventsClass";
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulComponents';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import NavBarSimple from './components/NavBarSimple';
// import SideBar from './components/SideBar';

function App() {
  return <div className="App">
      <EventsFunctional />
      <EventsClass />
  </div>;
}

export default App;