import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import JoinWaitlist from "./pages/JoinWaitlist";
import TryRequestAi from "./pages/TryRequestAi";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/join-waitlist" element={<JoinWaitlist />} />
          <Route path="/try-requestai" element={<TryRequestAi />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
