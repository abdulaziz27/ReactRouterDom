import React, { Component } from 'react';

class Navigasi extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-light p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-light bg-white shadow-sm fixed-top">
          <div className="container-fluid justify-content-between align-items-center">
            <div className="row">
              <div className="col-3 d-flex align-items-center">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fas fa-bars"></i>
                </button>
                <h1 className="h4 ml-3 mb-0 d-inline">MyKantin</h1>
              </div>
              <div className="col-5">
                <div className="input-group input-group-sm">
                  <span className="input-group-text bg-search"><i className="fas fa-search" aria-hidden="true"></i></span>
                  <input type="text" placeholder="Cari Makan Bang?" className="form-control bg-search" />
                </div>
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center user">
                <i className="fas fa-heart"></i>
                <span className="badge bg-warning rounded-pill mx-4">3</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQijIgFGgv9Sm0xU9Onr5iFJj4ozwanNvu0VQ&usqp=CAU" width="30" height="30" />
              </div>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}

export default Navigasi;