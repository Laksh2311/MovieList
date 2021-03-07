import React from 'react';
import Header from './Header';
import './App.css';
import SimpleBottomNavigation from './Mainnav';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { Container} from '@material-ui/core';
import Trending from './pages/Trending/Trending';
import Favorites from './pages/Favorites/Favorites';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Search from './pages/Search/Search';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="app">
     <Container>

        <Switch>
          <Route path = '/' component={Trending} exact/>
           <Route path = '/favorites' component={Favorites} />
            <Route path = '/movies' component={Movies} />
             <Route path = '/series' component={Series} />
              <Route path = '/search' component={Search} />
        </Switch>

    </Container>
    </div>

   
    <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
