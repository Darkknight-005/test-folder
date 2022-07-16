import Landing_page from './pages/landing_page';
import { HashRouter, Routes, Route} from "react-router-dom"
import SignUp from './pages/signUp';
import Feed from './pages/feed.jsx';

function App() {
  return (
    <HashRouter >

      <Routes>
        <Route exact path="/" element={<Landing_page />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/feed" element={<Feed />} />
      </Routes>

    </HashRouter>
    // <SignUp />
  );
}

export default App;
