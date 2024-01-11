import React, { useEffect, useState } from "react";
import MainContent from "./Components/Compiled/MainContent";
// import Loader from "./Components/Fixed Components/Loader";
import Error from "./Components/Fixed Components/Error";











  
  function App() {
    
  const [error , setHideError] =useState(true)

  const hideError =()=>{
            setTimeout(()=>{
              setHideError(false)
            } , 11000)
  }


  useEffect(()=>{
    hideError()
  }, []
  )


  return(
            <>
            
            
          
            { error ?  <Error/> : <MainContent/>}
            
            
            
            
            
            </>
        )





















}
export default App;

