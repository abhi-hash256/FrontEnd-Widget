import React from "react";

export interface ButtonProps{
    text:string;
}


const Button = (props:ButtonProps)=>{
    return(
        <button>Hello Abhi!!</button>
    );
};

export default Button;