import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/login.css';


export function RegisterForm() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign in</h3>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter Email "
              required
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Repeat Password"
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn submit">
              Submit
            </button>
          </div>
          <small><input type="checkbox" name="terminos" className="link"/> Estoy de acuerdo con los <a href="#">Términos de uso</a></small><br></br>
          <small><input type="checkbox" name="politicas" className="link"/> Estoy de acuerdo con la <a href="#">Política de privacidad</a></small>


        </div>
      </form>
    </div>
  )
}