import "./Transfer.css";

const Transfer = (props) => {
  const dogrulama = () => {
    let to = props.Kullanicilar.find(
      (eleman) => toKullaniciRef.value === eleman.kullaniciAdi
    );
    if (to === undefined) return;

    if (props.kul.vadesiz_bakiye < parseInt(tutarRef.value)) return;

    if (props.transferler.length == 0)
      props.setTransferler([
        {
          from: props.kul,
          to: to,
          value: parseInt(tutarRef.value),
        },
      ]);
    else
      props.setTransferler([
        ...props.transferler,
        {
          from: props.kul,
          to: to,
          value: parseInt(tutarRef.value),
        },
      ]);
    props.kul.vadesiz_bakiye -= parseInt(tutarRef.value);
    to.vadesiz_bakiye += parseInt(tutarRef.value);

    console.log(props.transferler);
  };

  let toKullaniciRef = null;
  let tutarRef = null;

  return (
    <div className="transfer-item">
      <div>
        <label>Gönderilecek Hesap :</label>
        <input
          type="text"
          placeholder="Kullanıcı"
          ref={(ref) => (toKullaniciRef = ref)}
        ></input>
      </div>
      <div>
        <label>Tutar :</label>
        <input
          type="number"
          placeholder="Tutar Girin"
          ref={(ref) => (tutarRef = ref)}
        ></input>
      </div>
      <div>
        <button onClick={dogrulama}>Para Gönder</button>
      </div>
    </div>
  );
};
export default Transfer;

