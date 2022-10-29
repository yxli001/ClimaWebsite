import Home from "./pages/HomePage/Home";
import Benefits from "./pages/BenefitsPage/Benefits";
import Locations from "./pages/LocationPage/Locations";
import "./App.css";
import Footer from "./pages/Footer/Footer";

function App() {
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
