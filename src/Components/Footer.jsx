import React, { Component } from 'react'

export default class Footer extends Component {
  render() {

    return (

      <div>
        <footer>
            <div className="container">
                <div className="row text-white ms-5">
                    <div className="col-3 mt-4">
                        <h4>Trendyol</h4>
                        <ul className="list-unstyled mt-4">
                            <li><a className="text-decoration-none text-white" href="">Biz Kimiz</a></li>
                            <li><a className="text-decoration-none text-white" href="">Kariyer</a></li>
                            <li><a className="text-decoration-none text-white" href="">İletişim</a></li>
                            <li><a className="text-decoration-none text-white" href="">Trendyol'da Satış Yap</a></li>
                            <h6>Güvenli Alışveriş</h6>
                        </ul>
                        <div className="footerleft">
                            <a href=""><img src="img/7.webp" alt="" /></a>                        
                            <a href=""><img src="img/8.png" alt="" /></a>                        
                            <a href=""><img src="img/9.webp" alt="" /></a>                        
                            <a href=""><img src="img/10.webp" alt="" /></a>    
                        </div>                    
                    </div>
                    <div className="col-3 mt-4">
                        <h4>About us</h4>
                        <ul className="list-unstyled mt-4">
                            <li><a className="text-decoration-none text-white" href="">Who we are</a></li>
                            <li><a className="text-decoration-none text-white" href="">Careers</a></li>
                            <li><a className="text-decoration-none text-white" href="">Contact us</a></li>
                            <li><a className="text-decoration-none text-white" href="">Sustainability</a></li>
                            <h6>Mobil Uygulamalar</h6>                            
                        </ul>
                        <div className="footercenter">
                            <img src="img/11.svg" alt="" />
                            <img src="img/12.svg" alt="" />
                            <img src="img/13.svg" alt="" />
                        </div>
                    </div>
                    <div className="col-3 mt-4">
                    <h4>Kampanyalar</h4>
                        <ul className="list-unstyled mt-4">
                            <li><a className="text-decoration-none text-white" href="">Aktif Kampanyalar</a></li>
                            <li><a className="text-decoration-none text-white" href="">Elite Üyelik</a></li>
                            <li><a className="text-decoration-none text-white" href="">Hediye Fikirleri</a></li>
                            <li><a className="text-decoration-none text-white" href="">Trendyol Fırsatları</a></li>
                            <h6>Sosyal Medya</h6>                            
                        </ul>
                        <div className="footercenter2">
                            <a href=""><img src="img/facebook.svg" alt="" /></a>                        
                            <a href=""><img src="img/instagram.svg" alt="" /></a>                        
                            <a href=""><img src="img/twitter.svg" alt="" /></a>                        
                            <a href=""><img src="img/youtube.svg" alt="" /></a>    
                        </div>
                    </div>
                    <div className="col-3 mt-4">
                    <h4>Yardım</h4>
                        <ul className="list-unstyled mt-4">
                            <li><a className="text-decoration-none text-white" href="">Sıkça Sorulan Sorular</a></li>
                            <li><a className="text-decoration-none text-white" href="">Canlı Yardım</a></li>
                            <li><a className="text-decoration-none text-white" href="">Nasıl İade Edebilirim</a></li>
                            <li><a className="text-decoration-none text-white" href="">İşlem Rehberi</a></li>
                            <button className="footerbtn text-white">Ülke Değiştir</button>                           
                        </ul>
                        <div className="footerright">
                            <a href=""><img src="img/qr.webp" alt="" /></a>                        
                            <a href=""><img src="img/trgo.png" alt="" /></a>                           
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    )
  }
}
