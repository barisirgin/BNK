import React, { useState } from "react";
import Login from "./Login/Login.js";
import Hesap from "./Hesaplar/Hesap.js";
import Baslik from "./Hesaplar/Baslik.js";
import Kullanici from "./Kullanicilar/Kullanici.js";
import Transfer from "./ParaTransfer/Transfer.js";
import GelenPara from "./ParaTransfer/GelenPara.js";

const Kullanicilar = [
  {
    musteriAdi : "Barış İrgin",
    kullaniciAdi : "barisirgin@gmail.com",
    sifre : "12345",
    vadesiz_bakiye : 8000,
    dolar_bakiye : 1800,
    euro_bakiye : 1500,
    gram_altin : 20
  },
  { 
    musteriAdi :"Kerem Tosun",
    kullaniciAdi : "keremtosun@gmail.com",
    sifre : "56789",
    vadesiz_bakiye : 10000,
    dolar_bakiye : 2500,
    euro_bakiye : 2000,
    gram_altin : 4
  },
];

const hesapTurleri = [
  {
    vadesiz:"Vadesiz TL Hesabı",
    dolar : "Dolar",
    euro : "Euro",
    gram : "GRAM ALTIN"
  }
];

const birimler = [
  {
    tl:"₺",
    do : "$",
    eu : "€",
    gr : "Gram"
  }
];


const App = () => {
  const [kul, setKul] = useState({
    musteriAdi:"",
    kullaniciAdi: "",
    sifre: "",
    vadesiz_bakiye: 0,
    dolar_bakiye: 0,
    euro_bakiye: 0,
    gram_altin: 0
  })

  const [transferler, setTransferler] = useState([]);

  console.log(transferler.filter((eleman)=>eleman.to.musteriAdi === kul.musteriAdi))
  return (
    <div>
      <Baslik text = "ABC BANK"></Baslik>
      <Login Kullanicilar ={Kullanicilar} giris={setKul}></Login>
      <Kullanici text = {kul.musteriAdi}></Kullanici>
      <Baslik text = "HESAPLAR"></Baslik>
      <Hesap bakiye = {kul.vadesiz_bakiye} birim ={birimler[0].tl} tur = {hesapTurleri[0].vadesiz}></Hesap>
      <Hesap bakiye = {kul.dolar_bakiye} birim ={birimler[0].do} tur = {hesapTurleri[0].dolar}></Hesap>
      <Hesap bakiye = {kul.euro_bakiye} birim ={birimler[0].eu} tur = {hesapTurleri[0].euro}></Hesap>
      <Hesap bakiye = {kul.gram_altin} birim ={birimler[0].gr} tur = {hesapTurleri[0].gram}></Hesap>
      <Transfer kul={kul} Kullanicilar={Kullanicilar} transferler={transferler} setTransferler={setTransferler}></Transfer>
      <Baslik text = "Gelen Para"></Baslik>
      {
        transferler.filter((eleman)=>eleman.to.musteriAdi === kul.musteriAdi).map((eleman)=>
        <GelenPara transfer={eleman}></GelenPara>)
      }
  </div>
  );
}
export default App;

