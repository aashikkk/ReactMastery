import React, { Component } from "react";

class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true,
        };
    }
    render() {
        return this.state.isLoggedIn && <div>Welcome Aashik</div>;
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Aashik</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // );
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = "Welcome Aashik";
        // } else {
        //     message = "Welcome Guest";
        // }
        // return <div>{message}</div>;
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Aashik</div>;
        // } else {
        //     return <div>Welcome Guest</div>;
        // }
        // return <div>UserGreeting</div>;
    }
}

export default UserGreeting;
