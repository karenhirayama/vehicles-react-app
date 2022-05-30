import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { BuildPage, Home, List, NotFound,  } from "./pagination";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<BuildPage />} />
          <Route path='/tabela' element={<List />} />
          <Route path='/fale-conosco' element={<BuildPage />} />
          <Route path='/login' element={<BuildPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
