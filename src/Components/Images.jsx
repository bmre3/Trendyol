import React, { Component } from 'react'

export default class Images extends Component {
  render() {

    return (

      <div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <a href=""><img src="img/1.jpg" alt="" /></a>
            </div>
            <div className="col-4">
              <a href=""><img src="img/2.jpg" alt="" /></a>
            </div>
            <div className="col-4">
              <a href=""><img src="img/3.png" alt="" /></a>
            </div>            
          </div>
        </div>

      </div>
    )
  }
}
