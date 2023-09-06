import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Wrapper from "../../UI/Wrapper/Wrapper";
import classes from "./ThankYou.module.css";
import thankyou from "./icon-thank-you.svg";
const ThankYou = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Navbar FU={true} />
        <div className={classes.container}>
      
            <div>
              <img src={thankyou} className={classes.img} alt={"thank you checkmark"} />
            </div>
            <h1 className={classes.h1}>Thank you!</h1>
            <p className={classes.p1}>
              {" "}
              Thanks for confirming your subscription! We hope you have fun
              using our platform. IF you ever need support, please feel free to
              email us at <b>support@loremgaming.com</b>.
            </p>
         
        </div>
      </Wrapper>
    </React.Fragment>
  );
};
export default ThankYou;
