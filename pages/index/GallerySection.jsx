import HeaderGutter from "../../components/Header/HeaderGutter";
import { Row, Container, Col } from "react-grid-system";
let list = [
    {
        image:"./static/img/service1.jpg",
        title:"Cold brewed coffee",
        description:"Cold brewed coffee is one of our top fresh brewed drinks, if you havent tried it yet then go ahead and give it a try!"
    },
    {
        image:"./static/img/service2.jpg",
        title:"Italian Latte",
        description:"We spacialize in brewing the best latte of this area! our italian staff take care of making sure that our latte is the best "
    },
    {
        image:"./static/img/service3.jpg",
        title:"Lounge",
        description:"Enjoy your drinks with your friends at our calm lounge"
    },
    {
        image:"./static/img/service4.jpg",
        title:"Take out",
        description:"Take out your favorite coffee, For you convince you can preorder or signup for daily subscription"
    },
    {
        image:"./static/img/service5.jpg",
        title:"Fresh",
        description:"Everyday we have fresh supplies of coffee beans, We care about our customers health and happiness"
    },
    {
        image:"./static/img/service6.jpg",
        title:"Espresso",
        description:"We collect the best beans for our espressos, the best drink to start your day"
    }
]
export default function GallerySection() {
    return (
        <section className="full-section">
        <div className="section-cover b-3 match-content" />
          <div className="large-section green" />
          <div className="section-content">
            <Container>
                <Row>
                <Col xs={12}>
                        <h4 className="gallery-title">Gallery</h4>
                        <div className="section-divider" />
                    </Col>
                </Row>
                <Row>
                    {
                        list.map((item,key)=> {
                            return (
                                <Col xs={12} md={6} lg={4} key={key}>
                                    <div className="gallery-image-container">
                                        <div>
                                            <img src={item.image} alt={item.title}/>
                                            <p className="title">{item.title}</p>
                                            <div className="divider" />
                                            <p className="description">{item.description}</p>
                                            </div>
                                        
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <div className="gutter small"/>
            </Container>
          </div>
        </section>
    )
}