import logo from './logo.svg';
import './App.css';
import css from "./App.module.css";
import RenderingLists from './components/RenderingLists';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulComponents';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import SideBar from './components/SideBar';
import Content from './components/Content';
import ControlledForm from './components/ControlledForm';
import SearchBar from './components/SearchBar'
import ContentHooks from './components/ContentHooks';
import HTTPPost from './components/HTTPPost';


function App() {
  return (
    <div className={css.App}>
    <HTTPPost />
   
  
    </div>
  );
}

export default App;