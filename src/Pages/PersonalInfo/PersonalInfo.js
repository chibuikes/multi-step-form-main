import React, { useState, useContext } from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import Navbar from "../../Components/Navbar/Navbar";
import classes from "./PersonalInfo.module.css";
import {useNavigate} from 'react-router-dom'
import AuthContext from "../../Store/Auth-Context";
const PersonalInfo = (props) => {

  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [numValid, setNumValid] = useState(true);
   const navigate= useNavigate();
   const ctx= useContext(AuthContext)
   const submitHandler=(e)=>{
    e.preventDefault()
       navigate('/select-your-plan',{ replace:true, state:{} })
   }

 
  const emailBlur = () => {
    if (ctx.email === "") {
      setEmailValid(false);
    }
  };
  const numBlur = () => {
    if (ctx.number === "") {
      setNumValid(false);
    }
  };
  const nameBlur = () => {
    if (ctx.namee === "") {
      setNameValid(false);
    }
  };
  const nameHandler = (e) => {
    ctx.setName(e.target.value);

    if(ctx.namee.length > 0) {
      setNameValid(true);
   
   
  }
  if(nameValid && !ctx.valid.includes('1')){
    ctx.setValid((val)=>{
      return val+'1'
    })
    return
}
    

  };
  const emailHandler = (e) => {
    ctx.setEmail(e.target.value);
    if (ctx.email.length > 0 && ctx.email.includes("@")) {
      setEmailValid(true);
    }
    if(emailValid &&  !ctx.valid.includes('2')  ){

        ctx.setValid((val)=>{
          return val+'2'
        })
      return
}

  };
  const paste=(e)=>{
    e.preventDefault()
  }
  const numberHandler = (e) => {
    ctx.setNumber(e.target.value);
 
    if (ctx.number.length > 8) {
      setNumValid(true);
  
    if(numValid && !ctx.valid.includes('3')){
      ctx.setValid((val)=>{
        return val+'3'
      })
 // console.log(ctx.valid)

     
}
else{

}
  
}
  };
  return (
    <Wrapper>
      <Navbar PI={true}/>
      <div className={classes.container}>
        <h1 className={classes.h1}>Personal Info</h1>
        <p className={classes.p1}>
          Please provide your name , email address and phone number
        </p>
        <form onSubmit={submitHandler} className={classes.form}>
          <label>
            <div className={classes.flex}>
              <p className={classes.p}>Name</p>{" "}
              {nameValid ? (
                ""
              ) : (
                <p className={classes.red}>This field is required</p>
              )}
            </div>
            <input
              className={
                nameValid ? `${classes.input}` : `${classes.inputError}`
              }
              type="text"
              onBlur={nameBlur}
              value={ctx.namee}
              onPaste={paste}
              onChange={nameHandler}
              placeholder="e.g. Stephen King"
            />
          </label>
          <label>
            <div className={classes.flex}>
              <p className={classes.p}>Email address</p>{" "}
              {emailValid ? (
                ""
              ) : (
        <p className={classes.red}>This field is required</p>
              )}
            </div>
            <input
              type="email"
              className={
                emailValid ? `${classes.input}` : `${classes.inputError}`
              }
              value={ctx.email}
              onBlur={emailBlur}
              onChange={emailHandler}
              onPaste={paste}
              placeholder="e.g. stephenking@lorem.com"
            />
          </label>
          <label>
            <div className={classes.flex}>
              <p className={classes.p}>Phone number</p>{" "}
              {numValid ? (
                ""
              ) : (
                <p className={classes.red}>This field is required</p>
              )}
            </div>
            <input
              type="number"
              className={
                numValid ? `${classes.input}` : `${classes.inputError}`
              }
              value={ctx.number}
              onBlur={numBlur}
              onChange={numberHandler}
              onPaste={paste}
              placeholder="e.g. +1 234 567 890"
              max='10000000000'
              min='0'

            />
          </label>
          <div className={classes.div}>
            <div></div>
            <button
              className={ctx.valid.length!==3 ? `${classes.btnDis}` : `${classes.btn}`}
              disabled={ctx.valid.length!==3}
              type="submit"
            >
              {" "}
              Next Step
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
export default PersonalInfo;
