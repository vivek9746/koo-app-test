import React,{useState} from 'react';
import Dropdown from './Dropdown'
import './Input.css';

function Input(props) {
    const [inputValue,setInputValue] =useState('');
    function changeVal(e){
        setInputValue(e.target.value)
        e.preventDefault();
    }
    function validate(){
        var phoneno = /^\d{10}$/;
        if(inputValue.match(phoneno)){
            props.setOtpModal(true)
        }
        else{
            alert('Please enter valid no');
        }
    }
    return (
        // <div style={{width:'50%',position:'static',right:'0'}}>
        <div style={{display:'flex',flexDirection:'column',padding:'20px',width:'100%'}}>
        <div style={{display:'flex'}} >
            <Dropdown/>
            <input className="inputNumber" type="tel" value={inputValue} onChange={changeVal}/>
        </div>
        <button className="loginButton" style={{width:'100%'}} onClick={()=>{

           validate()
        }}>SEND OTP</button>
        </div>
    )
}

export default Input
