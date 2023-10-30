import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfoliosPage from "./pages/PortfoliosPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfoliosPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
