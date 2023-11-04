import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Details from "./Pages/Details";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/details" element={<Details></Details>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}
export default App;
