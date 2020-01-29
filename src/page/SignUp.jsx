import React from "react";

function SignUp() {
  return (
    <div>
      <form>
        <div className="window">
          <div className="form-group">
            <label className="sgn-label">Email</label>
            <br />
            <input type="email" className="sgn-input" />
            <div className="form-group">
              <label className="sgn-label">User name</label>
              <br />
              <input type="username" className="sgn-input" />
            </div>
            <div className="form-group">
              <label className="sgn-label">Password</label>
              <br />
              <input type="password" className="sgn-input" />
            </div>
          </div>
          <button className="sgn-btn">Sign up</button>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
