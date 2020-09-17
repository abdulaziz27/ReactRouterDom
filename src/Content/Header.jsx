import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <div className="wrapper header mx-5 p-3 rounded d-flex bg-light">
      <div id="carouselExampleIndicators" className="carousel slide mx-5" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="img/cangcimen.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="img/diskon.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="img/perutkenyang.png" className="d-block w-100" alt="..." />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    // </div>
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