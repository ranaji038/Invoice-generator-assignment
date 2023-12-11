import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InvoiceForm from "./components/InvoiceForm";



const App = () => {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<InvoiceForm />} />
          <Route path="/create/:id" element={<InvoiceForm />} />
          <Route path="/edit/:id" element={<InvoiceForm />} />
        </Routes>

      </Container>

    </div>
  );
};

export default App;
