import React, { useState } from 'react'
import './Entry.style.css'
import { Login } from '../../components/login/Login'
import { PasswordReset } from '../../components/Password reset/PasswordReset';

export const Entry= () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [frmLoad,setfrmLoad]=useState("login");
  const handleOnChange=e=>{
    const{name,value}=e.target
    switch(name){
      case 'email':
      setEmail(value);
      break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
    console.log(name,value)
  };
  const handleonSubmit= (e)=>{
    e.preventDefault();
    if(!email || !password){
      return alert("Fill up all the form!");
    }
    //TODO call api to submit form
    console.log(email,password);
  };
  const formSwitcher=(frmtype)=>{
    setfrmLoad(frmtype);
  }
  const handleonResetSubmit= (e)=>{
    e.preventDefault();
    if(!email){
      return alert("Please Enter Your Email!");
    }
    //TODO call api to submit form
    console.log(email);
  };
  return (
    <div className='entry-page bg-info'><div className="form-box p-5 bg-light rounded">
      {frmLoad === "login" &&(
        <Login handleOnChange={handleOnChange}
        handleonSubmit={handleonSubmit}
        formSwitcher={formSwitcher}
        email={email}
        pass={password}
        />
      )}
      {frmLoad === "reset" &&(
        <PasswordReset
        handleOnChange={handleOnChange}
        handleonResetSubmit={handleonResetSubmit}
        formSwitcher={formSwitcher}
        email={email}
        />
      )}
  </div></div>
  )
}
