import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMePage";
import Resume from "./pages/ResumePage";
import Portfolio from "./pages/PortfolioPage";
import Contact from "./pages/ContactPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Martin Lapihuska",
      headersLings: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Resume", path: "/resume" },
        { title: "Portfolio", path: "/portfolio" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "#StayStrong \n#BeWarrior",
        subtitle: "homeSubtitle",
        text: "homeText",
      },
      about: {
        title: "aboutTitle",
        subtitle: "aboutSubtitle",
      },
      resume: {
        title: "resumeTitle",
        subtitle: "resumeSubtitle",
      },
      portfolio: {
        title: "portfolioTitle",
        subtitle: "portfolioSubtitle",
      },
      contact: {
        title: "contactTitle",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className='p-2' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Martin Lapihuska</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
                <Link className='nav-link' to='/resume'>
                  Resume
                </Link>
                <Link className='nav-link' to='/portfolio'>
                  Portfolio
                </Link>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path='/'
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subtitle={this.state.home.subtitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path='/about'
            render={() => (
              <AboutMe
                title={this.state.about.title}
                subtitle={this.state.about.subtitle}
              />
            )}
          />
          <Route
            path='/resume'
            render={() => (
              <Resume
                title={this.state.resume.title}
                subtitle={this.state.resume.subtitle}
              />
            )}
          />
          <Route
            path='/portfolio'
            render={() => (
              <Portfolio
                title={this.state.portfolio.title}
                subtitle={this.state.portfolio.subtitle}
              />
            )}
          />
          <Route
            path='/contact'
            render={() => (
              <Contact
                title={this.state.contact.title}
                subtitle={this.state.contact.subtitle}
              />
            )}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
