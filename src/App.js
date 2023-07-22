import "./styles/main.css"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop"

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Main from "./pages/Main";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Taon from "./pages/Taon";
import Kvark from "./pages/Kvark";
import Formula from "./pages/Formula";
import Neitrino from "./pages/Neitrino";
import Bozon from "./pages/Bozon";
import Foton from "./pages/Foton";
import Timetable from "./pages/Timetable";
import TimetableK from "./pages/TimetableK";
import TimetableF from "./pages/TimetableF";



function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/taon" element={<Taon/>}/>
          <Route path="/kvark" element={<Kvark/>}/>
          <Route path="/formula" element={<Formula/>}/>
          <Route path="/neitrino" element={<Neitrino/>}/>
          <Route path="/bozon" element={<Bozon/>}/>
          <Route path="/foton" element={<Foton/>}/>
          <Route path="/taon_timetable" element={<Timetable/>}/>
          <Route path="/kvark_timetable" element={<TimetableK/>}/>
          <Route path="/formula_timetable" element={<TimetableF/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/event/:id" element={<Event/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
