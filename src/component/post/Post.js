import React, { Component } from "react";
import PostItem from "./PostItem";
import PostClose from "./PostClose";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
export default class Post extends Component {
  render() {
    return (
      <Router>
        <div className="box-post">
          <aside class="menu">
            <p class="menu-label">Trạng Thái</p>
            <ul class="menu-list">
              <li>
                <Link to="/post">Đang mở</Link>
              </li>
              <li>
                <Link to="/postclose">Đã đặt</Link>
              </li>
            </ul>
            <p class="menu-label">Lịch Trình</p>
            <ul class="menu-list">
              <li>
                <a>Đăng Chuyến Đi</a>
              </li>
            </ul>
          </aside>
          <Switch>
            <Route exact path="/post" component={PostItem} />
            <Route exact path="/postclose" component={PostClose} />
          </Switch>
        </div>
      </Router>
    );
  }
}
