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
import Content from './components/Content'


function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <SideBar />
      <Content />
   
  
    </div>
  );
}

export default App;