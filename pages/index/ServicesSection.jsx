import { Row, Container, Col } from "react-grid-system";

function renderService(item) {
    return (
        <div className="service">
            <i className={`fi icon ${item.icon}`}/>
            <p>{item.name}</p>
        </div>
    )
}
let services = [
    {
        name:"Milky",
        icon:"coffee-bag"
    },
    {
        name:"Fresh",
        icon:"coffee-bean"
    },
    {
        name:"Beans",
        icon:"coffee-bean-1"
    },
    {
        name:"Homebrew",
        icon:"coffee-maker"
    },
    {
        name:"Coffee Maker",
        icon:"coffee-machine"
    },
    {
        name:"Gifts",
        icon:"coffee-machine-1"
    },
    {
        name:"Hot tea",
        icon:"coffee-cup"
    },
    {
        name:"Free test",
        icon:"coffee-cup-1"
    },
]
export default function ServicesSection() {
    return (
        <section className="full-section">
        <div className="section-cover b-2 match-content" />
          <div className="large-section darken" />
          <div className="section-content">
            <Container>
                <Row>
                <Col xs={12}>
                        <h4 className="gallery-title">Services</h4>
                        <div className="section-divider" />
                    </Col>
                </Row>

                <Row>
                {
                    services.map((service,key)=> {
                        return (
                            <Col xs={12} sm={6} md={4} lg={3} key={key}>
                                {renderService(service)}
                            </Col>
                        )
                    })
                }
                <Col xs={12} md={6}></Col>
                </Row>
                <div className="gutter small"/>
            </Container>
          </div>
        </section>
    )
}