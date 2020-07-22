import React from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap';

class ProjectPage extends React.Component {
    render() {
        return(
            <>
                <Jumbotron className="jumbotron-fluid">
                    <Row>
                        <Col>
                            <div className="j-column">
                                <h2 className="centered-jumbo ml-auto display-3">Check Out My Projects</h2>
                                <h3 className="font-weight-light subTitle" >Design | Development | Production</h3>
                                <div className="font-weight-light lead"></div>
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

export default ProjectPage;