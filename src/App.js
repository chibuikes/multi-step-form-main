import "./App.css";
import React from "react";
import  {Routes , Route} from 'react-router-dom'

import PersonalInfo from "./Pages/PersonalInfo/PersonalInfo";
import Plan from "./Pages/Plan/Plan";
import AddOn from "./Pages/AddOn/AddOn";
import FinishUp from './Pages/FinishUp/FinishUp'
import ThankYou from "./Pages/ThankYou/THankYou";
function App() {

  return (
    <React.Fragment>
    <Routes>
   <Route path='/' element={<PersonalInfo/>}/>
   <Route path='/personal-info' element={<PersonalInfo/>}/>
   <Route path='/select-your-plan' element={<Plan/>}/>
   <Route path='/add-on' element={<AddOn />}/>
   <Route path='/finish-up' element={<FinishUp/>}/>
   <Route path='/thank-you' element={<ThankYou/>}/>
   <Route path='*' element={<PersonalInfo/>}/>
  
  
 
    </Routes>
    </React.Fragment>
  );
}

export default App;
