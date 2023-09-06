import React, {  useContext} from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import Navbar from "../../Components/Navbar/Navbar";
import classes from "./Plan.module.css";
import Adv from "./icon-advanced.svg";
import Pro from "./icon-pro.svg";
import Arc from "./icon-arcade.svg";
import {useNavigate} from 'react-router-dom'
import AuthContext from "../../Store/Auth-Context";
const Plan = (props) => {
  

  const navigate= useNavigate();
  const ctx= useContext(AuthContext);
   
  const submitHandler1=()=>{
    navigate('/personal-info',{ replace:true, state:{} })

  }
  const submitHandler2=()=>{
    navigate('/add-on',{ replace:true, state:{} })

  }
  const clickHandler = () => {
 console.log(ctx.showYear);
 ctx.seShowYear()
   return ctx.seShowYear

  };
  const proHandler = () => {
    ctx.dispatch('pro')
    ctx.setType('Pro')
  };
  const advHandler = () => {
    ctx.dispatch('adv')
    ctx.setType('Advanced')
  };
  const arcHandler = () => {
    ctx.dispatch('arc')
    ctx.setType('Arcade')
 
  };
  const submitHandler9=(e)=>{ e.preventDefault()}

  return (
    <Wrapper>
      <Navbar  SP={true}/>
      <div className={classes.container}>
        <h1 className={classes.h1}> Select Your Plan</h1>
        <p className={classes.p1}>
          {" "}
          You have the option of monthly or yearly billing
        </p>
        <section className={classes.sec}>
          <div
            onClick={arcHandler}
            className={ctx.state.arc ? `${classes.di}` : `${classes.div}`}
          >
            <img src={Arc} alt="arcade" className={classes.img} />
            <br />
            <div className={classes.new}>
            <p className={classes.one}>Arcade</p>
            {!ctx.showYear?  
            <p className={classes.p2}>$9/mo</p>:
            <p className={classes.p2}>$90/yr</p>
             
            }
            {!ctx.showYear
 ? "" : <p className={classes.p5}>2 months free</p>}
</div>
          </div>
          <div
            onClick={advHandler}
            className={ ctx.state.adv ? `${classes.di}` : `${classes.div}`}
          >
            <img src={Adv} alt="advamced" className={classes.img} />
            <br />
            <div className={classes.new}>

            <p className={classes.one}>Advanced</p>
            {!ctx.showYear
?  
            <p className={classes.p2}>$12/mo</p>:
            <p className={classes.p2}>$120/yr</p>
             
            }
            {!ctx.showYear
 ? "" : <p className={classes.p5}>2 months free</p>}
 </div>
          </div>
          <div
            onClick={proHandler}
            className={ctx.state.pro ? `${classes.di}` : `${classes.div}`}
          >
            <img src={Pro} alt="pro" className={classes.img} />
            <br />
            <div className={classes.new}>

            <p className={classes.one}>Pro</p>
             {!ctx.showYear
?  
            <p className={classes.p2}>$15/mo</p>:
            <p className={classes.p2}>$150/yr</p>
             
            }
            {!ctx.showYear
 ? "" : <p className={classes.p5}>2 months free</p>}
 </div>
          </div>
        </section>
        <div className={classes.div1}>
          <p className={ctx.showYear
 ? `${classes.p1}` : `${classes.p4}`}>Monthly</p>
          <button onClick={clickHandler} className={classes.kkk}>
  <div className={ctx.showYear ? `${classes.kk2}` : `${classes.kk1}`}>
           .</div>
          </button>
          <p className={ctx.showYear
 ? `${classes.p4}` : `${classes.p1}`}>Yearly</p>
        </div>
        <form onSubmit={submitHandler9} className={classes.div3}>
          <button className={classes.btn1} onClick={submitHandler1} type="button">
            Go back
          </button>
          <button className={classes.btn} onClick={submitHandler2}  type="button">
            Next Step
          </button>
        </form>
      </div>
    </Wrapper>
  );
};
export default Plan;
