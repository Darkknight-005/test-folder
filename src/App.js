import Landing_page from './Components/landing_page';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignUp from './Components/signUp';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>

      <Routes>
      <Route exact path="/linkedin-clone-git" element={<Landing_page />} />
      <Route exact path="/sign-up" element={<SignUp />} />

      </Routes>

    </Router>
    // <SignUp />
  );
}

export default App;
