import React, { useState } from "react";
import "./Login.css";

const Login = (props) => {
  const kullaniciDogrulama = () => {
    let kullanici = props.Kullanicilar.find(
      (eleman) =>
        eleman.kullaniciAdi === emailRef.value && eleman.sifre === passRef.value
    );
    props.giris(kullanici);
  };

  let emailRef = null;
  let passRef = null;
  return (
    <div className="login">
      <div className="login__controls">
        <div className="login__controls">
          <label>Kullanıcı Adı</label>
          <input
            type="text"
            placeholder="username@example.com "
            ref={(ref) => (emailRef = ref)}
          ></input>
        </div>
        <div className="login__controls">
          <label>Sifre</label>
          <input
            type="text"
            placeholder="pass"
            ref={(ref) => (passRef = ref)}
          ></input>
        </div>
        <div>
          <button onClick={kullaniciDogrulama}>Giriş</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

