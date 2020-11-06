import React from 'react';
import Style from './App.module.scss';
// import TestComponent from './test-component';
import Contact from './components/contact';
import Header from './components/header';
import Home from './components/home';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <div className={Style.appWrapper}>
      <BrowserRouter>
        <Header />
        <Container className="px-3">
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
// <TestComponent />; // Hehehhhe;
