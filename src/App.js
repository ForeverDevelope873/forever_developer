import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import NB from './Components/NB';
import Home from './Components/Home';
import About from './Components/About';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Services from './Components/Services';
import UIUXDesign from './Components/UIUXDesign';
import MobileAppDevelopment from './Components/MobileAppDevelopment';
import WebDesignWebDevelopment from './Components/WebDesignWebDevelopment';
import UiUx from './Components/UiUx';
import Gamedevelopment from './Components/Gamedevelopment';
import Cybersecurity from './Components/Cybersecurity';
import Digitalmarketing from './Components/Digitalmarketing';
import Technologylanguage from './Components/Technologylanguage';
import Careers from './Components/Careers';
import Contect from './Components/Contect';
import Footer from './Components/Footer';
import Backtotopbtn from './Components/Backtotopbtn';
import Loader from './Components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    // Simulating fake data load (4 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  // ✅ Show Loader first, then load the full app
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <NB />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Services">
            <Services />
          </Route>
          <Route exact path="/UIUXDesign">
            <UIUXDesign />
          </Route>
          <Route exact path="/MobileAppDevelopment">
            <MobileAppDevelopment />
          </Route>
          <Route exact path="/WebDesignWebDevelopment">
            <WebDesignWebDevelopment />
          </Route>
          <Route exact path="/UiUx">
            <UiUx />
          </Route>
          <Route exact path="/Gamedevelopment">
            <Gamedevelopment />
          </Route>
          <Route exact path="/Cybersecurity">
            <Cybersecurity />
          </Route>
          <Route exact path="/Digitalmarketing">
            <Digitalmarketing />
          </Route>
          <Route exact path="/Technologylanguage">
            <Technologylanguage />
          </Route>
          <Route exact path="/Careers">
            <Careers />
          </Route>
          <Route exact path="/Contect">
            <Contect />
          </Route>
        </Switch>
        <Footer />
        <Backtotopbtn />
      </Router>
    </div>
  );
}

export default App;