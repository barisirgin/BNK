import "./GelenPara.css";

const GelenPara = (props) => {
  //const date = new Date();

  console.log(props);
  return (
    <div className="gelen">
      <div>
        <label>Gönderen Hesap : {props.transfer.from.musteriAdi}</label>
      </div>
      <div>
        <label>GelenTutar : {props.transfer.value}</label>
      </div>
    </div>
  );
};
export default GelenPara;

