import React, { Component } from "react";
import AddPost from "./AddPost";
import axios from "axios";

export default class AddPostControll extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeQuangDuongDi = this.onChangeQuangDuongDi.bind(this);
    this.onChangeQuangDuongDen = this.onChangeQuangDuongDen.bind(this);
    this.onChangeNgayThang = this.onChangeNgayThang.bind(this);
    this.onChangeThoiGian = this.onChangeThoiGian.bind(this);
    this.onChangeThongTinKhac = this.onChangeThongTinKhac.bind(this);
  }
  state = {
    quangduongdi: "",
    quangduongden: "",
    ngaythang: "",
    thoigian: "",
    thongtinkhac: "",
    post: []
  };

  onChangeQuangDuongDi = e => {
    this.setState({
      quangduongdi: e.target.value
    });
  };
  onChangeQuangDuongDen = e => {
    this.setState({
      quangduongden: e.target.value
    });
  };
  onChangeThoiGian = e => {
    this.setState({
      thoigian: e.target.value
    });
  };
  onChangeNgayThang = e => {
    this.setState({
      ngaythang: e.target.value
    });
  };
  onChangeThongTinKhac = e => {
    this.setState({
      thongtinkhac: e.target.value
    });
  };
  onSubmit(e) {
    e.preventDefault();
    const post = {
      quangduongdi: this.state.quangduongdi,
      quangduongden: this.state.quangduongden,
      ngaythang: this.state.ngaythang,
      thoigian: this.state.thoigian,
      thongtinkhac: this.state.thongtinkhac
    };
    console.log(post);
    axios
      .post("http://localhost:2019/post/add", post)
      .then(res => console.log(res.data));
    window.location = "/post";
  }

  render() {
    return (
      <div>
        <AddPost
          onSubmit={this.onSubmit}
          onChangeQuangDuongDen={this.onChangeQuangDuongDen}
          onChangeQuangDuongDi={this.onChangeQuangDuongDi}
          onChangeNgayThang={this.onChangeNgayThang}
          onChangeThoiGian={this.onChangeThoiGian}
          onChangeThongTinKhac={this.onChangeThongTinKhac}
          quangduongden={this.state.quangduongden}
          quangduongdi={this.state.quangduongdi}
          ngaythang={this.state.ngaythang}
          thoigian={this.state.thoigian}
          thongtinkhac={this.state.thongtinkhac}
        />
      </div>
    );
  }
}
