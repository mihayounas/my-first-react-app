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
import ControlledForm from './components/ControlledForm';
import SearchBar from './components/SearchBar';
import PostItemAPI from './components/PostItemAPI';
import ContentAPI from './components/ContentAPI';
import ContentAPIHooks from "./components/ContentAPIHooks";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <SideBar />
      {/* <Content /> */}
      {/* <ContentHooks /> */}
      {/* <ContentAPI /> */}
      <ContentAPIHooks />
    </div>
  );
}
export default App;