import React from 'react';
import firebase from '../firebase';

export default class Signup extends React.Component {

  render() {
    return (
      <>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </>
    )
  }
}