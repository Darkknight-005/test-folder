import Landing_page from './Components/landing_page';
import { HashRouter, Routes, Route} from "react-router-dom"
// import SignUp from './Components/signUp';
import Feed from './Components/feed';

function App() {
  return (
    <HashRouter >

      <Routes>
      <Route exact path="/" element={<Landing_page />} />
      <Route exact path="/sign-up" element={<Feed />} />

      </Routes>

    </HashRouter>
    // <SignUp />
  );
}

export default App;
