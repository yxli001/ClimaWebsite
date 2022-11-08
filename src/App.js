import Home from "./pages/HomePage/Home";
import Benefits from "./pages/BenefitsPage/Benefits";
import Locations from "./pages/LocationPage/Locations";
import "./App.css";
import Footer from "./pages/Footer/Footer";
import React, { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";

function App() {
  useEffect(() => {
    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.clima.mobile.app";
    } else if (isIOS) {
      window.location.href =
        "https://apps.apple.com/us/app/clima-save-the-environment/id6444138849";
    }
  }, []);
  return (
    <div className="App">
      <Home />
      <Benefits />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
