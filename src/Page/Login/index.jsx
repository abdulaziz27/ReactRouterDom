import React from "react";
import {Input, Button} from '../../Property/Form';
import { Link } from "react-router-dom"


const Login = () => {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-8"></div>
          <div className="col-4 p-4">
            <h4>Silahkan Login</h4>
            <form>
              <Input label={"Email Address"} className="form-control" />
              <Input label={"Password"} className="form-control" />
              <Button className="form-control btn btn-success" label={"Login"} />
            </form>
            <Link to="/register" className="ml-5 mr-5">register</Link>
            <Link to="/about" className="ml-5">About</Link>
          </div>
        </div>
      </React.Fragment>
    );
  };
  export default Login;