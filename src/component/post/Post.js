import React, { Component } from "react";
import PostItem from "./PostItem";
import PostClose from "./PostClose";
import AddPost from "./AddPost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default class Post extends Component {
  render() {
    return (
      <Router>
        <div>
          <div class="tabs is-toggle is-fullwidth is-large">
            <ul>
              <li activeClassName="active hover">
                <NavLink to="/post" activeClassName="active hover">
                  <span>Cộng Đồng</span>
                </NavLink>
              </li>
              <li activeClassName="active hover">
                <NavLink to="/postclose" activeClassName="active hover">
                  <span>Đã Đặt</span>
                </NavLink>
              </li>
              <li activeClassName="active hover">
                <NavLink to="/addpost" activeClassName="active hover">
                  <span>Đăng Chuyến Đi Mới</span>
                </NavLink>
              </li>
              <li>
                <a>
                  <span class="icon">
                    <i class="far fa-file-alt" aria-hidden="true"></i>
                  </span>
                  <span>Documents</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Switch>
          <Route exact path="/post" component={PostItem} />
          <Route exact path="/postclose" component={PostClose} />
          <Route exact path="/addpost" component={AddPost} />
        </Switch>
      </Router>
    );
  }
}
