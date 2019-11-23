import React, { Component } from "react";
import PostListControll from "./PostListControll";
import PostClose from "./PostClose";
import PostDetail from "./PostDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AddPostControll from "./AddPostControll";
export default class Post extends Component {
  render() {
    return (
      <Router>
        <div>
          <div class="tabs is-toggle is-fullwidth is-large tabs-post">
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
                <NavLink to="/addpostcontroll" activeClassName="active hover">
                  <span>Đăng Chuyến Đi Mới</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <Switch>
          <Route exact path="/post" component={PostListControll} />
          <Route exact path="/postclose" component={PostClose} />
          <Route exact path="/addpostcontroll" component={AddPostControll} />
          <Route exact path="/postdetail" component={PostDetail} />
        </Switch>
      </Router>
    );
  }
}
