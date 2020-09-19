import React, { Component } from 'react';

class MyOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      total: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      console.log(this.props.item.pesan);
      console.log(this.props.item.harga);

      const total = this.props.item.pesan * this.props.item.harga;

      this.setState({
        list: [...this.state.list, this.props.item],
        total: this.state.total + total
      });
      console.log(this.state.total);
    }
  }

  render() {
    return (
      <div className="wrapper order">
        <h2 className="h3 mb-4">Pesanan Saya</h2>
        <div className="card p-3 mb-4">
          <p className="name">Awwala Khalqin N</p>
          <p className="saldo">Rp. 10.000.000,-</p>
          <p className="card-number mb-0">1012*********2002</p>
        </div>

        <div className="calculate p-3">
          {
            this.state.list ? this.state.list.map((item, i) =>
              <div key={i} className="items d-flex justify-content-between align-items-center mb-3">
                <img src={item.image} width="80" />
                <p className="mb-0">{item.pesan}</p>
                <p className="mb-0">x</p>
                <p className="mb-0">Rp. {item.harga * item.pesan}</p>
              </div>
            ) : ''
          }

          <div className="items d-flex justify-content-between align-items-center mb-3">
            <div className="wrapper">
              <img src="https://image.shutterstock.com/image-vector/shipping-fast-delivery-man-riding-260nw-1573225051.jpghttps://image.shutterstock.com/image-vector/shipping-fast-delivery-man-riding-260nw-1573225051.jpg" alt="" height="35" />
            </div>
            <p className="mb-0">jl.Cipondok</p>
            <p className="mb-0">Gratis</p>
          </div>
        </div>

        <div className="total p-3 d-flex justify-content-between align-items-center">
          <p className="mb-0">Total:</p>
          <p className="mb-0 total-rp">Rp. {this.state.total}</p>
        </div>
        <div className="wrapper-btn p-3 w-100">
          <button className="btn w-100">Pesan</button>
        </div>
      </div>
    )
  }
}

export default MyOrder;