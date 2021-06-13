import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Join from './pages/Join';
import FirstStep from './pages/FirstStep';
import SecondStep from './pages/SecondStep';
import ThirdStep from './pages/ThirdStep';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Join} />
        <Route path="/step1" component={FirstStep} />
        <Route path="/step2" component={SecondStep} />
        <Route path="/step3" component={ThirdStep} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
