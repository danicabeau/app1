import React,{ useState } from "react";

export default function MessageBox(){
    let[text,setText]=useState('Hello World')
    let [size,setSize]=useState(16)

    const onClickSetText=()=>{
        let t = prompt('กำหนดข้อความ')
        if(t)setText(t)
    }

    const onClickZoomIn=()=>{
        let newSize = size + 1
        setSize(newSize)
    }

    let msgboxStyles={
        display:'inline-block',
        width:'250px',
        fontSize:size,
        backgroundColor:'#ccc',
        textAlign:'left'
    }

    return(
        <div style={{textAlign:'center',marginTop:20}}>
            <div style={msgboxStyles}>{text}</div>
            <br/>
            <button onClick={onClickSetText}>ข้อความ</button>
            <button onClick={onClickZoomIn}>เพิ่มขนาด</button>
            <button onClick={() => setSize(size - 1)}>ลดขนาด</button>
        </div>
    )

}