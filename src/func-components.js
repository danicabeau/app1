import React from "react";
export function Header(){
    const aStyle={
        display:'inline-block',
        color:'blue',
        margin:'7px',
        TextDecoration:'none',
    }
    return (
        <div style={{backgroundColor:'#ccc'}}>
            <a style={aStyle} href="#">Home</a> |&nbsp;
            <a style={aStyle} href="#">React</a> |&nbsp;
            <a style={aStyle} href="#">React Native</a>
        </div>
    )
}   

export function Content(){
    return (
        <div style={{textAlign:'center'}}>
            <h2>Hello <br/> React & React Native</h2>
            <br/><br/><br/>
        </div>
  )
}

export const Footer=()=>{
    return (
        <div style={{textAlign:'center'}}>
            &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>
    )   
}