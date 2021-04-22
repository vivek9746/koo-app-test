import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";
import Dropdown from "./Dropdown";
import Modal from "react-modal";
import Input from './Input'
import './Modal.css';

function ModalComp(props) {
  return (
    <div>
        <Modal isOpen={props.isOpen}
         style={{
            overlay:{
                backgroundColor:'rgba(0,0,0,0.7)'
            },
            
            content:{
                color:'black',
                padding:'10px',
                backgroundColor:'#fcfcfc'
            }

        }}>
        <div className="modalDiv">
        <h1>Enter your Phone Number</h1>
        <div className="inputDivBox">
        

        <Input isOpen={props.isOpen} otpOpen={props.isOtpOpen} setOtpModal={props.setOtpModal}/>
       
        
        </div>
       
        <button className="close loginButton" style={{width:'100%'}}onClick={()=>{props.onRequestClose()}}>Close</button>
        </div>
        </Modal>
        {/* <Modal
        isOpen={props.isOtpOpen}
        >
                <div style={{background:'pink'}}>
                <h1>Login</h1>
                <input style={{marginTop:'5vh', width:'100%',padding:'0',boxSizing:'border-box',fontSize:'5vw'}} type="tel"></input>
                <button style={{width:'100%'}}onClick={()=>{props.setOtpModal(false)}}>Login</button>
                </div>
        </Modal> */}
      {/* <Dropdown/> */}
      {/* <List/> */}
    </div>
  );
}

export default ModalComp;
