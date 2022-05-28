import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Home, List, NotFound, UnderConstruction } from "./pagination";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<UnderConstruction />} />
          <Route path='/tabela' element={<List />} />
          <Route path='/fale-conosco' element={<UnderConstruction />} />
          <Route path='/login' element={<UnderConstruction />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
