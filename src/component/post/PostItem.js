import React from "react";
import { Link } from "react-router-dom";
const PostItem = ({
  post: { quangduongdi, quangduongden, ngaythang, thoigian, thongtinkhac }
}) => {
  return (
    <div>
      <br />
      <div class="box post">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="Image"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Trần Tiến</strong>
                <br />
                <small>Địa Điểm Đi: {quangduongdi}</small>
                <br />
                <small>Địa Điểm Đến: {quangduongden}</small>
                <br />
                <small>Ngày bắt đầu: {ngaythang}</small>
                <br />
                <small>Thời Gian: {thoigian}</small>
                <br />
                <small>Ghi chú {thongtinkhac}</small>
              </p>
              <Link to="/postdetail" class="button is-primary is-outlined">
                Xem chi tiết chuyến đi
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
export default PostItem;
