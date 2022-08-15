import "./App.css";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Main from "./components/shared/Main";
import Article from "./components/Article"

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      {/* Can be made to take a year as well, format for date is currently MM-DD*/}
      <Article date="08-15"/> 
      
      <Footer />
      
    </div>
  );
}

export default App;
