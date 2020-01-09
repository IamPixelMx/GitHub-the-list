import React, { Component } from "react";
import { connect } from "react-redux";
import { node, func } from "prop-types";
import Router from "next/router";

import { cleanUsersMatch } from "../store/actions/users-actions";
import { cleanReposMatch } from "../store/actions/repositories-actions";
import Loader from "./Loader";

class Layout extends Component {
  static propTypes = {
    children: node.isRequired,
    dispatch: func.isRequired
  };

  state = {
    loading: false
  };

  componentDidMount() {
    Router.onRouteChangeStart = () => {
      const { dispatch } = this.props;
      dispatch(cleanUsersMatch());
      dispatch(cleanReposMatch());
      this.setState({ loading: true });
    };
    Router.onRouteChangeComplete = () => {
      this.setState({ loading: false });
    };
    Router.onRouteChangeError = () => {
      this.setState({ loading: false });
    };
  }

  render() {
    // console.log("layoutProps: ", this.props);
    const { loading } = this.state;
    const { children } = this.props;
    return (
      <main id="main" className="has-padding-top section view">
        <Loader loading={loading === undefined ? false : loading} />
        {children}
        <style jsx global>
          {`
            body {
              font-family: "Varela Round", sans-serif;
            }
            .view {
              min-height: 100vh;
            }
            .hide {
              display: none;
            }
            .content-container {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .has-padding-top {
              padding-top: 7.2rem;
            }
            .has-margin-top {
              margin-top: 2.5rem;
            }
            .has-lg-margin-top {
              margin-top: 4.5rem;
            }
            .has-margin-bottom {
              margin-bottom: 2.5rem;
              margin-top: -4rem;
            }
            .is-vertical-align {
              vertical-align: middle;
            }
            .buttons {
              margin-top: 2rem;
            }
            .button {
              border-width: 0.12rem;
            }
            .footer {
              padding: 1.95rem 1rem 2.65em;
            }
            .image img {
              margin-top: 0.55rem;
              margin-left: 0.9rem;
            }
            img.is-rounded {
              margin: 0;
            }
            .is-nice-blue {
              color: #8378f4;
              font-weight: 600;
            }
            a.navbar-item:hover,
            a.navbar-item.is-active:hover,
            a.navbar-item.is-active,
            .navbar-dropdown a.navbar-item:hover {
              background: transparent !important;
              color: #f5a623 !important;
            }
            .is-purple {
              color: #8378f4;
            }
            a.is-purple:hover {
              background-color: transparent !important;
              color: #7a6ff0;
            }
            .is-bg-purple {
              background-color: #8378f4;
            }
            .is-aqua.input {
              border-color: #7a6ff0;
              border-width: 0.1rem;
            }
            .control.has-icons-left .icon.is-left {
              left: 3px;
              height: 1.6rem;
              margin-top: 0.47rem;
            }
            .card {
              border-radius: 10px;
              margin-bottom: 1rem;
              border: solid 1px #7a6ff0;
            }
            figure.media-left {
              margin: 1rem;
            }
            p.title.is-not-spaced {
              margin-bottom: 0.25rem;
            }
            .button.is-orange {
              background: #f5a623;
              color: #fff;
              border: solid 1px #f5a623;
            }
            .button.is-orange:hover {
              background: transparent;
              color: #7a6ff0;
              border: solid 1px #7a6ff0;
            }
            .button.is-success {
              background: #00d9e1;
              color: #fff;
              border: solid 1px #00d9e1;
            }
            .button.is-success:hover {
              background: transparent;
              color: #7a6ff0;
              border: solid 1px #7a6ff0;
            }
            .icon.hvr-icon-pulse-shrink {
              margin-top: 1.2rem;
              min-width: 17.5rem;
            }
            .hvr-icon-pulse-shrink .hvr-icon {
              width: 1.1rem;
            }

            @media (max-width: 1023px) {
              .section {
                padding-left: 0.4rem;
                padding-right: 0.4rem;
              }
              a.navbar-link,
              a.navbar-item {
                border-bottom: 1px dashed #7a6ff0;
                padding: 1.2rem;
                margin-left: 1rem;
                margin-right: 1rem;
                color: #352c60 !important;
                font-size: 14px;
              }
            }
          `}
        </style>
      </main>
    );
  }
}

export default connect()(Layout);
