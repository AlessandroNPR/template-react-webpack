import React, {Fragment} from "react";
const Sidebar = ({isOpen}) => {
    return <div className="sidebar" style={{marginTop: '60px'}} 
    className={isOpen ? "moveToRight" : "moveToLeft"}>
  
      <div className="menu">
       
      </div>
   
    </div>
    
}
export default Sidebar