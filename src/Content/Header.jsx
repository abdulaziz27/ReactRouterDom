import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrapper header mx-5 p-3 rounded d-flex bg-light">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="img/cangcimen.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="img/diskon.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="img/perutkenyang.png" class="d-block w-100" alt="..." />
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    </div>
      // {/* <div className="wrapper header mx-5 p-3 rounded d-flex">
      //   <img src="img/food.png" width="200" className="mr-4" />
      //   <div className="content">
      //     <h3 className="title">Promo Hari Ini</h3>
      //     <p className="subtitle">Perut kenyang, otak kencang</p>
      //   </div>
      // </div> */}
    )
  }
}

export default Header;