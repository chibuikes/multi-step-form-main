import React from 'react'
import classes from './Navbar.module.css'
const Navbar=(props)=>{
  return  <React.Fragment>
      <ul   className={classes.ul}>
      <li className={classes.li}>
            <div>
            <i className={ props.PI?`${classes.active}`:`${classes.a}`
            } > 1</i>
            </div>
            <div className={classes.div}>
              <span className={classes.p1}>Step 1</span>
              <span className={classes.p2}>your info</span>
            </div>
             </li>


        <li className={classes.li}>
            <div>
            <i className={ props.SP?`${classes.active}`:`${classes.a}`
            } > 2</i>
            </div>
            <div className={classes.div}>
              <span className={classes.p1}>Step 2</span>
              <span className={classes.p2}>select plan</span>
            </div>
        </li>




        <li className={classes.li}>
            <div>
            <i  className={ props.AO?`${classes.active}`:`${classes.a}`
            } > 3</i>
            </div>
            <div className={classes.div}>
              <span className={classes.p1}>Step 3</span>
              <span className={classes.p2}>add-ons</span>
            </div>
       
            
        </li>
        <li className={classes.li}>
            <div>
            <i  className={ props.FU?`${classes.active}`:`${classes.a}`
            } > 4</i>
            </div>
            <div className={classes.div}>
              <span className={classes.p1}>Step 4</span>
              <span className={classes.p2}>summary</span>
            </div>
       
            
        </li>

      </ul>
    </React.Fragment>
}
export default Navbar