import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import BundleFormPage from "./pages/BundleFormPage";

const App = () => {
  return (
    <div>
      <Header />
      <Container fluid>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/bundle" component={BundleFormPage} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Container>
    </div>
  );
};

export default App;