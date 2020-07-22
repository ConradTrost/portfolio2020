import React from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap';

class SkillsPage extends React.Component {
    render() {
        return(
            <>
                <Jumbotron className="jumbotron-fluid">
                    <Row>
                        <Col>
                            <div className="j-column">
                                <h2 className="centered-jumbo ml-auto display-3">What We Offer</h2>
                                <h3 className="font-weight-light subTitle" >Design | Development | Production</h3>
                                <div className="font-weight-light lead">Different services to match various needs</div>
                            </div>
                        </Col>
                        <Col>
                            {/* Place carousel here showing different services */}
                        </Col>
                    </Row>

                </Jumbotron>
                <div className="idkyet"></div>
            </>
        );  
    }
};

export default SkillsPage;