import React, { Component } from 'react'


export default class Header extends Component {
  render() {

    return (

      <div>
        
        <div className="container">
            <div className="row align-items-center">
                
                <div className="col-2">
                    <h1>trendyol</h1>
                </div>

                <div className="col-5 search">
                    <input type="text" placeholder="Aradığınız ürün, kategori veya markayı yazınız"/>
                </div>
                
                <div className="col-5">
                  <div className="main">
                    <ul className="d-flex justify-content-end">
                      <li><a href="#"><i class="p-2 bi bi-person"></i>Giriş Yap</a>
                          <ul className="subnav text-center p-2">
                            <button className="topbtn d-block m-auto mb-2"><li><a className="text-white" href="">Giriş Yap</a></li></button>
                            <button className="botbtn d-block m-auto"><li><a href="">Üye Ol</a></li></button>
                          </ul>
                      </li>
                      <li><a href="#"><i class="p-2 bi bi-heart"></i>Favorilerim</a></li>
                      <li><a href="#"><i class="p-2 bi bi-cart"></i>Sepetim</a></li>
                    </ul>
                  </div>
                </div>
                
            </div>
        </div>
        
      </div>
    )
  }
}


