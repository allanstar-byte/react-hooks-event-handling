import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// function ChangeItUp() {
//     function handleChange(event) {
//         console.log(`${event.target.name}: ${event.target.value}`);
//     }

//     return ( <
//         div >
//         <
//         input type = "text"
//         name = "search"
//         onChange = { handleChange }
//         placeholder = "Enter search term..." /
//         >

//         <
//         select name = "filter"
//         onChange = { handleChange } >
//         <
//         option value = "all" > Select a filter... < /option> <
//         option value = "completed" > Completed < /option> <
//         option value = "incomplete" > Incomplete < /option> < /
//         select > <
//         /div>
//     );
// }

function Login() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log("I submit");
    }

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        name = "username"
        placeholder = "Enter username..." / >
        <
        input type = "password"
        name = "password"
        placeholder = "Enter password..." / >
        <
        button > Login < /button> < /
        form >
    );
}

ReactDOM.render( < Login / > , document.getElementById("root"));