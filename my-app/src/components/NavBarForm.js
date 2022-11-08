import React from "react";
import css from "./css/NavBarSimple.module.css";
import NavBarChild from "./NavBarChild";


class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            message: "Hello, guest!",
            buttonText: "Log in"
        }
    }

  handleclick = () => {
    this.setState((prevState) => ({
        message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
        buttonText: prevState.buttonText === "Log out" ? "Log in" : "Log out",
    }), ()=> console.log(this.state.message))
    
}

render() {
  return (
    <div className={css.NavBar}>
    <h1>My Gallery</h1>
    {
    this.state.isLoggedIn ? 
        <button onClick={() => this.handleButtonClick()}>Login</button>: 
            <form>
                <label htmlFor = "username">Username:</label>
                <input placeholder="username" id="username"/>
                            
                <label htmlFor = "password">Password:</label>
                <input placeholder="password" id="password"/>
                <button onClick={() => this.handleButtonClick()}>Submit</button>
            </form>
    } 
   
   
</div>
  )
}
}
export default NavBarSimple;