import "./App.css";
import AdressForm from "./components/AdressForm";
import AdressList from "./components/AdressList";
import RouteCalculator from "./components/RouteCalculator";
import { useState } from "react";

function App() {
  const [listAdress, setListAdress] = useState([]);

  const addAdressToList = (adress) => {
    setListAdress([...listAdress, adress]);
  };

  return (
    <div>
      <h1>Lesgui Road</h1>
      <AdressForm addAdresses={addAdressToList} />
      <AdressList adresses={listAdress} />
      <RouteCalculator />
    </div>
  );
}

export default App;
