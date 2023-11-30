
import { HeaderTop } from "./HeaderTop"
import { HeaderBottom } from "./HeaderBottom"
import React, { useState } from "react"


type TheaderShow = {
  headerShow: boolean
}

const  Header: React.FC<TheaderShow> = ({headerShow})=> { 
  

  const [openBurger, setOpenBurger] = useState(false)
   return (
    <div className="header">

        <HeaderTop headerShow= {headerShow}/>
        <HeaderBottom headerShow= {headerShow} openBurger={openBurger} setOpenBurger={setOpenBurger}/>


     
    
 
  </div>
  )
}

export default Header