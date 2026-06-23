import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AdminLayout } from "./components/layouts/AdminLayout";
import AboutPage from "./pages/AboutPage";
import { AdminContact } from "./pages/AdminContact";
import { AdminUser } from "./pages/AdminUser";
import ContactPage from "./pages/ContactPage";
import Error from "./pages/Error";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import LogoutPage from "./pages/LogoutPage";
import RegisterForm from "./pages/RegisterForm";
import ServicePage from "./pages/ServicePage";

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

              <Route path="/admin" element={<AdminLayout />}>
                {/* Nested routes for admin functionalities can be added here */}
                <Route path="users" element={<AdminUser />} />
                <Route path="contacts" element={<AdminContact />} />
              </Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
