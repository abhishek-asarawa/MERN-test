import React from "react";
import { client_ID } from "../../config/google.json";
import { connect } from "react-redux";


class GoogleAuth extends React.Component{

    state = {
        loggedIn: false
    };

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId: client_ID,
                    scope: 'email profile openid'
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = isSignedIn => {
        this.props.googleAuth(isSignedIn);
        if (isSignedIn) {
          console.log(this.auth.currentUser.get().getId());
          console.dir(this.auth.currentUser.get());
          console.log("getBasicProfile ===> ", this.auth.currentUser.get().getBasicProfile().getEmail());
          console.log("getAuthResponse===>", this.auth.currentUser.get().getAuthResponse())
          // this.props.history.push("/dashboard");
        } else {
          this.onSignOutClick();
        }
      };

    onSignInClick = () => this.auth.signIn();

    onSignOutClick = () => this.auth.signOut();


    renderAuthButton() {
        if (this.props.isAuth === null) {
          return null;
        } else if (this.props.isAuth) {
          return (
            <button onClick={this.onSignOutClick} className="ui red google button">
              <i className="google icon" />
              Sign Out
            </button>
          );
        } else {
          return (
            <button onClick={this.onSignInClick} className="ui red google button">
              <i className="google icon" />
              Sign In with Google
            </button>
          );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
      }

};


const mapStateToProps = (state) => {
  return {
    isAuth: state.googleAuths
  };
};

const mapActionToProps = (dispatch) => {
  return {
    googleAuth: (auth) => dispatch({
      type: "google auth",
      payload: auth
    })
  }
}

export default connect(mapStateToProps, mapActionToProps)(GoogleAuth);