import React, { useState, useReducer } from "react";

const AuthContext = React.createContext({
  showYear: "", seShowYear: () => {}, type: "", setType: () => {},state: {}, dispatch: (a) => {},data: "",setData: () => {},data1: "",setData1: () => {},data2: "",setData2: () => {},
  number:'', email:'',namee:'',valid:''


});
export const AuthConextProvider = (props) => {
  const [showYear, setShowYear] = useState(false);
  const [type, setType] = useState("Arcade");
  const reducerFun = (state, action) => {
    if (action === "arc") {
      return { arc: true, priceMo: "$9/mo", priceYr: "$90/yr",pm:9, py:90 };
    }
    if (action === "adv") {
      return { adv: true, priceMo: "$12/mo", priceYr: "$120/yr" ,pm:12,py:120};
    }
    if (action === "pro") {
      return { pro: true, priceMo: "$15/mo", priceYr: "$150/yr",pm:15,py:150 };
    }
  };
  const fun3 = () => {
    return setData((val) => {
      return !val;
    });
  };
  const fun4 = () => {
    return setData1((val) => {
      return !val;
    });
  };
  const fun5 = () => {
    return setData2((val) => {
      return !val;
    });
  };
  const fun6 = () => {
    return setChecked1((val) => {
      return !val;
    });
  };
  const fun7 = () => {
    return setChecked2((val) => {
      return !val;
    });
  };
  const fun8 = () => {
    return setChecked3((val) => {
      return !val;
    });
  };
  const  fun9=(a)=>{
    return setName(a)
  } 
  const  fun10=(a)=>{
    return setEmail(a)
  } 
   const  fun11=(a)=>{
    return setNumber(a)
  }
  const fun12=(a)=>{
    return setValid(a)
  }

  const [state, dispatch] = useReducer(reducerFun, {
    arc: true,
    priceMo: "$9/mo",
    priceYr: "$90/yr"
    ,pm:9, py:90

  });
  const fun = () => {
    setShowYear((val) => {
      return !val;
    });
  };
  const [data, setData] = useState(true);
  const [data1, setData1] = useState(true);
  const [data2, setData2] = useState(false);
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const [namee, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [valid, setValid] = useState('');
  const fun1 = (a) => {
    setType(a);
  };

  return (
    <AuthContext.Provider
      value={{
        showYear: showYear,
        seShowYear: () => {
          fun();
        },
        type: type,
        setType: (a) => {
          fun1(a);
        },
        state: state,
        dispatch: (a) => {
          dispatch(a);
        },
        data: data,
        setData: () => {
          fun3();
        },
        data1: data1,
        setData1: () => {
          fun4();
        },
        data2: data2,
        setData2: () => {
          fun5();
        },
        checked1: checked1,
        setChecked1: () => {
          fun6();
        },
        checked2: checked2,
        setChecked2: () => {
          fun7();
        },
        checked3,
        setChecked3: () => {
          fun8();
        },
        number, email,namee,valid,
        setValid:(a)=>{ fun12(a)},
        setName:(a)=>{
          fun9(a)
        },
        setEmail:(a)=>{
          fun10(a)
        }, 
           setNumber:(a)=>{
          fun11(a)
        },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
