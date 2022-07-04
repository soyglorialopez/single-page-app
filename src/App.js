import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Postulants from './pages/Postulants';
import Cities from './pages/Cities';
import Neighborhoods from './pages/Neighborhoods';


function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/postulants" element={<Postulants />} />
        {/* <Route path="/cities" element={<Cities />} />
        <Route path="/neighborhoods" element={<Neighborhoods />} /> */}
      </Routes>
    </div>
  );
}

export default App;
