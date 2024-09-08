import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <h1 className='bg-green-400 p-4'>React Router</h1> */}
    </>
  );
}

export default App;
