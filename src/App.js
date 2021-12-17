import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import Home from "./Components/Home/Home"
import { loadAccountAddress } from '../src/Components/Api/Api';
function App() {
  let [myAcountAddress, setMyaccountAddress] = useState("Connect");
  let [btnTxt, setBtntxt] = useState("Unlock Wallet")
  const getAdd = async () => {
    console.log("Getting up from App.js");
    let myAddress = await loadAccountAddress();
    let myAcc = myAddress.substring(0, 6) + "..." + myAddress.substring(myAddress.length - 6);
    console.log(myAcc);
    setMyaccountAddress(myAcc);
    setBtntxt("Approve");
  }
  return (
    <div className="App">
      <NavBar myAcountAddress={myAcountAddress} getAccount={getAdd} />
      <Home btnTxt={btnTxt} getAccount={getAdd} />
    </div>
  );
}
export default App;
