import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Owlcaro extends Component {
  render() {

    return (

      <div>
            <div class='container' >            
                <OwlCarousel items={10}  
                className="owl-theme"  
                loop  
                nav  
                margin={60} >  
                <div className="text-center">
                    <a className="text-decoration-none" href=""><img src= {'img/owl1.webp'}/>Sen de Al!</a>
                </div>
                <div className="text-center">
                    <a className="text-decoration-none" href=""><img src= {'img/owl2.webp'}/>Sana Özel</a>
                </div>
                <div className="text-center">
                    <a className="text-decoration-none" href=""><img src= {'img/owl3.png'}/>Kurumsal</a>
                </div>
                <div className="text-center">
                    <a className="text-decoration-none" href=""><img src= {'img/owl4.webp'}/>Philips</a>
                </div>
                <div className="text-center">
                    <a className="text-decoration-none" href=""><img src= {'img/owl5.webp'}/>Vestel</a>
                </div>  
                  
                </OwlCarousel>  
            </div>

      </div>
    )
  }
}
