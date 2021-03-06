import logo from './media/logo.svg';
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import {BrowserRouter as Router} from 'react-router-dom';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App" id="app">
        <Header />
        <Home />
        <About />
        <div className='separate'></div>
        <Skills />
        <Projects />
        <Experience />
        <Hobbies />
        <Footer />
        {/* <div className="sample"></div>
        <div className="footer">
          <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icon created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/css" title="css icons">Css icon created by Pixel perfect - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icon created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/process" title="process icons">Process icon created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/coding" title="coding icons">Coding icon created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/photography" title="photography icons">Photography icon created by Eucalyp - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/travel" title="travel icons">Travel icon created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/movie" title="movie icons">Movie icon created by iconixar - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/music" title="music icons">Music icon created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/basketball" title="basketball icons">Basketball icon created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-animated-icons/food-and-restaurant" title="food and restaurant animated icons">Food and restaurant animated icon created by Freepik - Flaticon</a>
        </div>
        <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
    </Router>
  );
}

export default App;
