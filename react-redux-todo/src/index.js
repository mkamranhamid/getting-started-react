import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory,IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import AboutComponent from './components/about/about.component';
import HomeComponent from './components/home/home.component';
import PortfolioComponent from './components/portfolio/portfolio.component';
import ServiceComponent from './components/service/services.component';
import App from './app/App';
import './index.css';

ReactDOM.render((
 <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeComponent}/>
      <Route path="service" component={ServiceComponent} />
      <Route path="portfolio" component={PortfolioComponent} />
      <Route path="about" component={AboutComponent} />
    </Route>
</Router>),
  document.getElementById('root')
);
