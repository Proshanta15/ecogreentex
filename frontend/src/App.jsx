import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Error from "./pages/Error";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import RegisterForm from "./pages/RegisterForm";
import ServicePage from "./pages/ServicePage";
import LogoutPage from "./pages/LogoutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<LogoutPage />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
