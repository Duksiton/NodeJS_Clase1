import React from "react";
import { Link } from "react-router-dom";
const Login= () =>{
    return(
        <div>
  <div className="hold-transition login-page">
    <div className="login-box">
      <div className="login-logo">
        <Link to={"#"}>
        <b>Ingresar </b>al sistema</Link>
      </div>
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Bienvenido</p>
          <form action="../../index3.html" method="post">
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                
                </div>
              </div>
            </div>
          </form>
          <div className="social-auth-links text-center mb-3">
            <Link to={"#"} className="btn btn-block btn-primary">
              <i className/> Ingresar
            </Link>
            <Link to="/register" className="btn btn-block btn-danger">
              <i className/> Registrarse
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Login;