import {BrowserRouter,Routes,Route} from "react-router-dom"
import Shop from "./pages/Shop/Shop";
import Navbar from "./components/Navbar/Navbar"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
