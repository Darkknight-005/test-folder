import Landing_page from './Components/landing_page';
import { HashRouter, Routes, Route} from "react-router-dom"
import SignUp from './Components/signUp';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <HashRouter >

      <Routes>
      <Route exact path="/" element={<Landing_page />} />
      <Route exact path="/sign-up" element={<SignUp />} />

      </Routes>

    </HashRouter>
    // <SignUp />
  );
}

export default App;
