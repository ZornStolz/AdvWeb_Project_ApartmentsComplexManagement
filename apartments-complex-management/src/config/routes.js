import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';

import Home from '../components/Home/Home';
import NotFound from '../components/NotFound/NotFound';

import Apartment_Index from '../components/Apartment/Apartment_Index/Apartment_Index';

const routing = (
    <Router>
        <div>
        <p> <Link to="/"> Home </Link> </p>
        <p> <Link to="/ApartmentsIndex"> Apartments Index </Link> </p>
      </div>
        <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/ApartmentsIndex" component={Apartment_Index} />

            <Route path="**" component={NotFound} />
        </Switch>
    </Router>
)
export default routing
