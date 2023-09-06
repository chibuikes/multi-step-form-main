import React , {useContext} from 'react'
import Wrapper from "../../UI/Wrapper/Wrapper";
import Navbar from "../../Components/Navbar/Navbar";
import classes from './FinishUp.module.css'
import {useNavigate, Link} from 'react-router-dom'
import AuthContext from '../../Store/Auth-Context';

const FinishUp =()=>{
  const navigate= useNavigate();
 const ctx= useContext(AuthContext)
  const clickHandler=()=>{
    navigate('/add-on',{ replace:true, state:{} })

  }
  const clickHandler1=()=>{
    navigate('/thank-you',{ replace:true, state:{} })

  };
  const submitHandler9=(e)=>{ e.preventDefault()};
  const os=!ctx.data?0:ctx.showYear?10:1;
  const ls=!ctx.data1?0:ctx.showYear?20:2;
  const cp=!ctx.data2?0:ctx.showYear?20:2;
  const totalM = ctx.state.pm +os+ls+cp
  const totalY = ctx.state.py +os+ls+cp

  return <React.Fragment>
  <Wrapper>
    <Navbar FU={true}/>
    <div className={classes.container} >
    <h1 className={classes.h1}>Finishing up</h1>
        <p className={classes.p1}>
        Double-check everything looks OK before confirming.
        </p>
<section  className={classes.sec}>
        <div className={classes.divl}>
         <div>
         <p className={classes.p2}>{`${ctx.type}`} {ctx.showYear?'(yearly)':`(monthly)`}</p>
        <Link to='/select-your-plan' className={classes.p1}> change</Link>
         </div>
          <p className={classes.p2}>{ctx.showYear?`${ctx.state.priceYr}`:`${ctx.state.priceMo}`}</p>
        </div>

       {ctx.data &&    <div className={classes.div}>
          <p className={classes.p1}>Online service</p>
          <p className={classes.p3}>{ctx.showYear?'+$10/yr':'+$1/mo'}</p>
        </div> }

           {ctx.data1 &&   <div className={classes.div}>
          <p className={classes.p1}>Larger storage</p>
          <p className={classes.p3}>{ctx.showYear?'+$20/yr':'+$2/mo'}</p>
        </div>  }

        {ctx.data2 &&   <div className={classes.div}>
          <p className={classes.p1}>Customizable profile</p>
          <p className={classes.p3}>{ctx.showYear?'+$20/yr':'+$2/mo'}</p>
        </div> }
        </section>
        <div className={classes.div}>
          <p className={classes.p1}>Total (per {ctx.showYear?'year':'month'})</p>
          <p className={classes.p4}> {ctx.showYear?'':'+'}${ctx.showYear?`${totalY}`:`${totalM}`}/{ctx.showYear?'yr':'mo'}</p>
        </div>
        <form onSubmit={submitHandler9} className={classes.div3}>
          <button  className={classes.btn1} onClick={clickHandler} type="submit">
            Go back
          </button>
          <button className={classes.btn} onClick={clickHandler1} type="submit">
            Confirm
          </button>
        </form>
    </div>
   
  </Wrapper>
  </React.Fragment>
}
export default FinishUp