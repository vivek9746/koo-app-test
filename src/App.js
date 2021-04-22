import React, {useState} from 'react';
import './App.css';
import ModalComp from './components/Modal';
import Modal from 'react-modal';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [otpmodalIsOpen, setOtpModalIsOpen] = useState(false);
  return (
    <div className="App">

      <img src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/2/2021_2$largeimg_1599305544.png"/>
     <button className="mainButton" onClick={()=>{setModalIsOpen(true)}}>Open</button>{
       modalIsOpen?
     <ModalComp isOtpOpen= {otpmodalIsOpen} setOtpModal={setOtpModalIsOpen} isOpen={modalIsOpen} onRequestClose={() => { setModalIsOpen(false)}} />
     :''
}{    otpmodalIsOpen?
          <Modal
          isOpen={otpmodalIsOpen}
          >
                  <div >
                  <h1>Enter the OTP received</h1>
                  <input className="otpInput" style={{marginTop:'5vh', width:'100%',padding:'0',boxSizing:'border-box',fontSize:'5vw'}} type="tel"></input>
                  <button className="loginButton" onClick={()=>{setOtpModalIsOpen(false)}}>Login</button>
                  </div>
          </Modal>
          :""
}
    </div>
  );
}

export default App;
