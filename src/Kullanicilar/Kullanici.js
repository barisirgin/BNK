
import React from "react";
import "../Hesaplar/Hesap.css";

const Kullanici = (props) =>{
  return (
    <div className="kullanici">
      <marquee behavior="scroll" direction="right" >Hoşgeldin {props.text}</marquee>
    </div>
  );
}
export default Kullanici;