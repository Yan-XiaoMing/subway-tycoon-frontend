import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';


function App() {
  return (
   <BrowserRouter>
     <Switch>
       <Route path='/' />
     </Switch>
   </BrowserRouter>
  );
}

export default App;
