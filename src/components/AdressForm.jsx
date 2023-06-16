import { useState } from "react";
import "./AdressForm.css";

const AdressForm = ({ addAdresses }) => {
  const [street, setStreet] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [adresses, setAdresses] = useState([]);

  const handleSubmit = (e) => {
    console.log(e.target.value + " handle submit");

    e.preventDefault();

    const adress = {
      street,
      postalcode,
      city,
    };
    // Appelez la fonction de rappel avec les données du formulaire
    addAdresses(adress);

    setAdresses([...adresses, adress]);
    setStreet("");
    setPostalCode("");
    setCity("");
  };

  const changeStreet = (e) => {
    console.log(e.target.value + " Adress change");

    const capitalizeStreet = e.target.value
      .toLowerCase()
      .replace(/(^|\s|-)\S/g, (char) => char.toUpperCase());

    setStreet(capitalizeStreet);
  };

  const changePostalCode = (e) => {
    if (/^\d{0,5}$/.test(e.target.value)) {
      setPostalCode(e.target.value);
    }
  };
  const changeCity = (e) => {
    const capitalizeCity = e.target.value
      .toLowerCase()
      .replace(/(^|\s|-)\S/g, (char) => char.toUpperCase());

    setCity(capitalizeCity);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Inscrire une adresse</h2>

        <div className="box-input">
          <label htmlFor="adress">Rue</label>
          <input
            type="text"
            placeholder="Rue"
            value={street}
            onChange={changeStreet}
            required
          />

          <label htmlFor="adress">Code Postal</label>
          <input
            type="number"
            min="0"
            max="99999"
            placeholder="Code Postal"
            value={postalcode}
            onChange={changePostalCode}
            required
          />

          <label htmlFor="adress">Ville</label>
          <input
            type="text"
            placeholder="Ville"
            value={city}
            onChange={changeCity}
            required
          />

          <button type="submit">Ajouter</button>
        </div>
      </form>
    </div>
  );
};

export default AdressForm;
