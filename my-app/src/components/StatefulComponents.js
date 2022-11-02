import React from "react";

class StatefulGreeting extends React.Component{
    render(){
        return <h1>Hi {this.props.greeting}</h1>
    }
}

export default StatefulGreeting;