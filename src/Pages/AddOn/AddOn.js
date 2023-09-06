import React ,{useContext} from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import Navbar from "../../Components/Navbar/Navbar";
import classes from "./AddOn.module.css";
import {useNavigate} from 'react-router-dom'
import AuthContext from "../../Store/Auth-Context";
import Checkmark from './icon-checkmark.svg'


const AddOn = () => {
  const navigate= useNavigate();
 const ctx = useContext(AuthContext)
  const submitHandler1=()=>{
    navigate('/select-your-plan',{ status:true, replace:{}})

  }
  const submitHandler2=()=>{
    navigate('/finish-up',{ replace:true, state:{} })
  }
  const checkHandler1 =()=>{    ctx.setData(); ctx.setChecked1();}
  const checkHandler2 =()=>{ctx.setData1(); ctx.setChecked2()}
  const checkHandler3 =()=>{ ctx.setData2(); ctx.setChecked3()}
  const submitHandler9=(e)=>{ e.preventDefault()}
  return (
    <React.Fragment>
      <Wrapper>
        <Navbar AO={true}/>
        <form   onSubmit={submitHandler9} className={classes.container}>
          <h1 className={classes.h1}> Pick add-ons</h1>
          <p className={classes.p}>
            Add-ons help enhance your gaming experience.
          </p>
          <section className={classes.sec}>
            
            <div className={ctx.checked1?`${classes.checked}`:`${classes.unchecked}`} onClick={checkHandler1} >
              <div  className={classes.row}>
        <div className={classes.row1} >
         <img src={Checkmark} alt='checkmark' className={ctx.checked1?`${classes.check2}`:`${classes.uncheck2}`}/>
        </div>                  
              <div>
                <p className={classes.p1}>Online service</p>
                <p className={classes.p2}>Access to multiplayer games</p>
              </div>
              </div>
              {ctx.showYear ? (
                <p className={classes.p3}> +$10/yr</p>
              ) : (
                <p className={classes.p3}> +$1/mo</p>
              )}
            </div>



            <div className={ctx.checked2?`${classes.checked}`:`${classes.unchecked}`}  onClick={checkHandler2}>
              <div className={classes.row}  >

              <div className={classes.row1} >
         <img src={Checkmark} alt='checkmark' className={ctx.checked2?`${classes.check2}`:`${classes.uncheck2}`}/>
        </div> 
              <div>
                <p className={classes.p1}>Larger storage</p>
                <p className={classes.p2}>Extra 1TB of cloud save</p>
              </div>
              </div>

              {ctx.showYear ? (
                <p className={classes.p3}> +$20/yr</p>
              ) : (
                <p className={classes.p3}> +$2/mo</p>
              )}
            </div>




            <div className={!ctx.checked3?`${classes.checked}`:`${classes.unchecked}`}  onClick={checkHandler3}>
              <div className={classes.row} >
              <div className={classes.row1} >
         <img src={Checkmark} alt='checkmark' className={!ctx.checked3?`${classes.check2}`:`${classes.uncheck2}`}/>
        </div> 
              <div>
                <p className={classes.p1}>Customizable profile</p>
                <p className={classes.p2}>Custom theme on your profile</p>
              </div>
              </div>
              {ctx.showYear ? (
                <p className={classes.p3}> +$20/yr</p>
              ) : (
                <p className={classes.p3}> +$2/mo</p>
              )}
            </div>


          </section>
          <div className={classes.div3}>
            <button className={classes.btn1} onClick={submitHandler1} type="submit">
              Go back
            </button>
            <button className={classes.btn}onClick={submitHandler2} type="submit">
              Next Step
            </button>
          </div>
        </form>
      </Wrapper>
    </React.Fragment>
  );
};
export default AddOn;
