import logo from './logo.svg';
import './App.css';
import Header from "./components//header/index"
import Figure from "./components/figure/index"
import AboutMe from "./components/aboutMe/index"
import Work from "./components/work/index"

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <Figure/>
      <AboutMe/>
      <Work/>
      </main>
    </div>
  );
}

export default App;
