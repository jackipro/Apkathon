import React from "react";
import { Link } from "react-router-dom";
export default function PostItem() {
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
                <small>Điểm đi: Quận 1, Thành Phố HCM</small>
                <br />
                <small>Điểm đến: Quận Bình Thạnh, Thành Phố HCM</small>
                <br />
                <small>25/12/2019</small>
                <br />
                <small>7:00AM</small>
                <br />
              </p>
              <Link to="/postdetail" class="button is-primary is-outlined">
                Xem chi tiết chuyến đi
              </Link>
            </div>
          </div>
        </article>
      </div>
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
                <small>Điểm đi: Quận 1, Thành Phố HCM</small>
                <br />
                <small>Điểm đến: Quận Bình Thạnh, Thành Phố HCM</small>
                <br />
                <small>25/12/2019</small>
                <br />
                <small>7:00AM</small>
                <br />
              </p>
              <button class="button is-primary is-outlined">
                Xem chi tiết chuyến đi
              </button>
            </div>
          </div>
        </article>
      </div>
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
                <small>Điểm đi: Quận 1, Thành Phố HCM</small>
                <br />
                <small>Điểm đến: Quận Bình Thạnh, Thành Phố HCM</small>
                <br />
                <small>25/12/2019</small>
                <br />
                <small>7:00AM</small>
                <br />
              </p>

              <Link to="/about" class="button is-primary is-outlined">
                Xem chi tiết chuyến đi
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
