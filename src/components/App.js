import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import LoginPage from './login';
import Dashboard from './dashboard';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component{
    render(){
        return(
              <BrowserRouter>
                    <div>
                        <Route path="/dashboard" exact component={LoginPage} /> 
                        <Route path="/employeelist" exact component={Dashboard} /> 
                    </div>
                </BrowserRouter>
        )
    }
}
export default App;