import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Landing from '../landing';
import Welcome from '../Welcome';
import Login from '../Login';
import Signup from '../Signup';
import ErrorPage from '../ErrorPage';
import Options from '../Options';
import Reclamation from '../Reclamation';
import ForgetPassword from '../ForgetPassword';


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path='/' exact component={Landing}/>
    <Route path='/welcome' exact component={Welcome} />
    <Route path='/login' exact component={Login} />
    <Route path='/signup' exact component={Signup} />
    <Route path='/options' exact component={Options}/>
    <Route path='/reclamation' exact component={Reclamation} />
    <Route path='/forgetpassword' exact component={ForgetPassword} />
    <Route component={ErrorPage} />
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
