import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';

export default class Baslik extends Component {
  render() {
    
    
    return (
      
      <>
        <div className="container">
            <Nav className="baslik-1 justify-content-end">
                <Nav.Item>
                    <Nav.Link eventKey="link-1">İndirim Kuponlarım</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Trendyol'da Satış Yap</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Hakkımızda</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">Yardım & Destek</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
      </>
    )
  }
}
