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
        name:"Fresh milk",
        icon:"coffee-bag"
    },
    {
        name:"Test",
        icon:"coffee-bean"
    },
    {
        name:"Test",
        icon:"coffee-bean-1"
    },
    {
        name:"Test",
        icon:"coffee-maker"
    },
    {
        name:"Test",
        icon:"coffee-machine"
    },
    {
        name:"Test",
        icon:"coffee-machine-1"
    },
    {
        name:"Test",
        icon:"coffee-cup"
    },
    {
        name:"Test",
        icon:"coffee-cup-1"
    },
    {
        name:"Test",
        icon:"coffee-cup-2"
    },
    {
        name:"Test",
        icon:"coffee-cup-3"
    },
    {
        name:"Test",
        icon:"coffee-cup-4"
    },
    {
        name:"French press",
        icon:"french-press"
    },
    {
        name:"Test",
        icon:"coffee-cup-6"
    },
    {
        name:"Test",
        icon:"coffee-cup-7"
    },
    {
        name:"Test",
        icon:"coffee-cup-8"
    },
    {
        name:"Test",
        icon:"tea-cup"
    },
]
export default function ServicesSection() {
    return (
        <section className="full-section">
        <div className="section-cover b-2 match-content" />
          <div className="large-section light-green" />
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
                            <Col xs={12} md={4} lg={3} key={key}>
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