import React from "react";

const Header = ({ image, children }) => (
    <div className="header" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${image})`}}>
        <div className="container">
            {children} 
        </div>
    </div>
);
  
export default Header;