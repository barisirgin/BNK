
import React from "react";
import "./Hesap.css";

const Hesap = (props) => {
  
  return (
    <div className="hesap-item">
      <div className="hesapTuru">
        <h1>Hesap Türü</h1>
        <p>{props.tur}</p>
      </div>

      <div className="hesap__price" >
        <h1>Bakiye</h1>
        <p>{props.bakiye} {props.birim}</p>
      </div>
    </div>
        
  );
}
export default Hesap;

