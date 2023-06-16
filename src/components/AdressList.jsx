const AdressList = ({ adresses }) => {
  return (
    <div>
      <h3>Adresses Ajoutés :</h3>

      {adresses.map((item, index) => (
        <h4 key={index}>
          {item.street}, {item.postalcode}, {item.city}
        </h4>
      ))}
    </div>
  );
};

export default AdressList;
