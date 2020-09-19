import React, { Component } from 'react'

import Navigasi from './Navbar/Navbar'
import Header from './Content/Header'
import Category from './Content/Category'
import Populer from './Content/Populer'
import MyOrder from './Orderan/MyOrder'
import Modal from './Content/Modal'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: '0',
            popular: [],
            base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
            item: null,
            order: {},
        }
    }

    popularOnChange = (event) => {
        return fetch(`${this.state.base_url}populer?category_id=${event}`,
          {
            method: 'POST',
          })
          .then(response => response.json())
          .then(responseJson => {
            this.setState({
              popular: responseJson.data
            })
          })
          .catch(error => 'error')
    }

    handlerModal = (item) => {
        this.setState({
          item: item,
        })
    }
    
      onOrderHandler = data => {
        this.setState({
          order: data
        });
        console.log();
    }

    render() {
    return (      
        <div className="">
            <Navigasi />
            <div className="container-fluid p-0">
            <div className="row mt-5">
                <div className="col-9 pt-5">
                <Header />
                <Category popular={this.popularOnChange} />
                <Populer popular={this.state.popular} onShowModal={this.handlerModal} />
                </div>
                <div className="col-3 bg-light sidenav pt-5">
                <MyOrder item={this.state.order} />
                </div>
            </div>
            </div>
            <Modal item={this.state.item} onOrderHandler={this.onOrderHandler} />
        </div>
        )
    }
}
export default App