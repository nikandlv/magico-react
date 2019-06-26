import HeaderGutter from "../../components/Header/HeaderGutter";
import { Row, Container, Col } from "react-grid-system";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
export default function GallerySection() {
    return (
        <section className="full-section">
        <div className="section-cover b-4 match-content" />
          <div className="large-section green" />
          <div className="section-content">
            <Container>
                <Row>
                <Col xs={12}>
                        <h4 className="gallery-title">About us</h4>
                        <div className="section-divider" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4} lg={3} className="about-us-card-wrapper">
                        <div className="about-us-card aqua">
                            <img className="avatar" src="./static/img/avatar3.jpg" />
                            <h2>Jake William</h2>
                            <p>Owner</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3} className="about-us-card-wrapper">
                        <div className="about-us-card yellow">
                            <img className="avatar" src="./static/img/avatar2.jpg" />
                            <h2>Laylah Goodman</h2>
                            <p>Cashier</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3} className="about-us-card-wrapper">
                        <div className="about-us-card coral">
                            <img className="avatar" src="./static/img/avatar1.jpg" />
                            <h2>Darrel Fuller</h2>
                            <p>Head Barista</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3} className="about-us-card-wrapper">
                        <div className="about-us-card pink">
                            <img className="avatar" src="./static/img/avatar4.jpg" />
                            <h2>Karla Armstrong</h2>
                            <p>Barista</p>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <h4 className="gallery-title">Get in touch</h4>
                        <div className="section-divider" />
                    </Col>
                    <Col xs={12} md={3}>
                        
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="bring-to-front contact-holder">
                            <p className="inline">Hello my name is</p><Input placeholder="Your name"/>
                            <br/><br/>
                            <p className="inline">And you can contact me here</p><Input placeholder="Your Email address" type="email"/>
                            <br/><br/>
                            <hr/><br/>
                            <p className="inline">I Wanted to contact you about</p><Textarea rows={4}/>
                            <br/><br/>
                            <button role="button" className="send-button">Send!</button>
                        </div>
                    </Col>
                </Row>
                <div className="gutter small"/>
            </Container>
          </div>
        </section>
    )
}