import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="content">
          <HomePage />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
