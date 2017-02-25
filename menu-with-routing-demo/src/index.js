import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory,withRouter} from 'react-router';
import AboutComponent from './Components/routes/about.component';
import HomeComponent from './Components/routes/home.component';
import PortfolioComponent from './Components/routes/portfolio.component';
import ServiceComponent from './Components/routes/services.component';
import App from './Components/app/App';
import './index.css';

ReactDOM.render((
 <Router history={browserHistory}>
    <Route path="/" component={App}>
      
    </Route>
    <Route path="/service" component={ServiceComponent} />
    <Route path="/portfolio" component={PortfolioComponent} />
    <Route path="/about" component={AboutComponent} />
    <Route path="/home" component={HomeComponent} />
</Router>),
  document.getElementById('root')
);
