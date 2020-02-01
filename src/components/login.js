import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {login} from '../Actions/login';
import "bootstrap/dist/css/bootstrap.min.css";


class LoginPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: 'hruday@gmail.com',
          password: 'hruday123',
          submitted: false,
          userFlag : true,
          loginSuccess: false,
          passwordFlag : true
      };

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(e) {
      const { name, value } = e.target;
      let userFlag =  true;
      if(value !== "hruday@gmail.com"){
        userFlag = false;
      }

      this.setState({
        userFlag 
      })
      this.setState({ [name]: value });
  }
  handlePasswordChange(e) {
    const { name, value } = e.target;
    let passwordFlag = true;
    if(value !== "hruday123"){
      passwordFlag = false;
    }

    this.setState({
      passwordFlag
    })
    this.setState({ [name]: value });
}

  handleSubmit(e) {
      e.preventDefault();
      this.setState({ submitted: true });
      const { username, password } = this.state;
      if (username && password) {                
          this.props.login({username: username, password: password});
      }
      if(username === "hruday@gmail.com" && password === "hruday123"){
        this.setState({
          loginSuccess: true
        })
      }
      
      
  }

  render() {
      const { username, password, submitted ,userFlag,passwordFlag} = this.state;
      return (
        <div className="container" style={{marginTop:'20px'}}>
        <h3>Login</h3>
        <form name="form" onSubmit={this.handleSubmit}>
            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" name="username" value={username} onChange={this.handleNameChange} style={{width:'300px'}} />
                {submitted && !username && 
                    <div className="help-block">Username is required</div>
                }
                {
                  !userFlag &&
                  <div className="help-block">Please check the username</div>
                }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" value={password} onChange={this.handlePasswordChange} style={{width:'300px'}} />
                {submitted && !password &&
                    <div className="help-block">Password is required</div>
                }
                 {
                  !passwordFlag &&
                  <div className="help-block">Please check the password</div>
                }
            </div>
            <div className="form-group">
            <Link to="/employeelist"><button className="btn btn-primary" disabled={!userFlag || !passwordFlag}>Login
                </button></Link>               
            </div>
        </form>
        
    </div>
    
      );
  }
}
const mapStateProps = (state) =>{
  return {
    loginValues : state.loginValues
     
  }
}

export default connect(mapStateProps,{login})(LoginPage);