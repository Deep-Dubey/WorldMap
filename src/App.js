import './App.css';
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import ShowData from "./components/ShowData"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ShowData />
      <Footer/>
    </div>
  );
}

export default App;
