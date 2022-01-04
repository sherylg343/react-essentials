import React from "react";


const  FunctionalGreetingwithProps = (props) => {
     console.log(props);
     return <h1>Hello, {props.greeting}</h1>
 }


 export default FunctionalGreetingwithProps