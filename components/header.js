import React from "react";

const Header = ({ media, children, isVideo }) => (
    <div>
        {isVideo ? 
            <div className="header">
                <video autoPlay loop muted style={{position: "absolute", right: 0, left: 0, bottom: 0, top: 0, width: "100%", height: "100%", objectFit: "cover"}}>
                    <source src={media} type="video/mp4" />
                    Your browser does not support HTML5 video
                </video>
        
                <div style={{position: "absolute", height: "100%", background: "rgba(0, 0, 0, 0.5)", color: "#f1f1f1", width: "100%"}}>
                    <div className="container">
                        {children} 
                    </div>
                </div>
            </div> :
            <div className="header" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${media})`}}>
                <div className="container">
                    {children} 
                </div>
            </div>
        } 
    </div>
);
  
export default Header;