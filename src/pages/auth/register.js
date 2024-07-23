import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    
    <div className="hold-transition register-page">
      <div className="register-box">
      <div className="login-logo">
        <Link to={"#"}>
        <b>Registrar </b>usuario</Link>
      </div>
        <div className="card">
          <div className="card-body register-card-body">

            <p className="login-box-msg">Registrar un nuevo usuario</p>
            <form>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Nombre completo" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Contraseña" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Repita la contraseña" />
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
            <div className="social-auth-links text-center">
              <Link to="#" className="btn btn-block btn-primary">
                <i className="" />
                Registrarse
              </Link>
            </div>
            <Link to="/" className="text-center">Ya tengo una cuenta</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
