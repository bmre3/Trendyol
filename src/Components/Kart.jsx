import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class Kart extends Component {
  render() {

    return (

      <div>
        <div className="container">
            <div className="cards d-flex justify-content-between mt-5">
            <Card style={{ width: '26rem' }}>
                <Card.Img variant="top" src="img/4.webp" />
                <Card.Body className="bot">
                    <Button className="cardbtn text-white text-start" variant="">Gıda ve İçecek - Fenomenl...</Button>
                </Card.Body>
            </Card>
            
            <Card style={{ width: '26rem' }}>
                <Card.Img variant="top" src="img/5.webp" />
                <Card.Body className="bot d-flex">
                    <Button className="cardbtn text-white text-start" variant="">350 TL Altı Elbise Trendleri...</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '26rem' }}>
                <Card.Img variant="top" src="img/6.webp" />
                <Card.Body className="bot">
                    <Button className="cardbtn text-white text-start" variant="">TRENDYOLMILLA - Aradığı...</Button>
                </Card.Body>
            </Card>
            </div>

            <div className="cards d-flex justify-content-between mt-5">
            <Card style={{ width: '26rem' }}>
                <Card.Img variant="top" src="img/4.webp" />
                <Card.Body className="bot">
                    <Button className="cardbtn text-white text-start" variant="">Gıda ve İçecek - Fenomenl...</Button>
                </Card.Body>
            </Card>
            
            <Card style={{ width: '26rem' }}>
                <Card.Img variant="top" src="img/5.webp" />
                <Card.Body className="bot">
                    <Button className="cardbtn text-white text-start" variant="">350 TL Altı Elbise Trendleri...</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '26rem' }}>
                <Card.Img variant="top" src="img/6.webp" />
                <Card.Body className="bot">
                    <Button className="cardbtn text-white text-start" variant="">TRENDYOLMILLA - Aradığı...</Button>
                </Card.Body>
            </Card>
            </div>
            <hr />
        </div>


      </div>
    )
  }
}
