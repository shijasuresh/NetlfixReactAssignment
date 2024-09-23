import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import MostPopular from "./pages/MostPopular";

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mostpopular" element={<MostPopular />}/>
        <Route path="/details/:slug" element={<Details />}/>
      </Routes>
    </>
  )
}

export default App;