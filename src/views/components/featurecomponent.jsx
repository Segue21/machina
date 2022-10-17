/* eslint-disable */
import React, { useState } from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
// import ReadMore from "react-readmore";
import {useRef} from 'react';
import img1 from "../../assets/images/Logo Files/spacer-bg.jpg";

const FeatureComponent = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  const text_1 = `Nous offrons des solutions instantanées et des outils  technologiques dont votre entreprise a besoin. Nos ressources et notre expertise sont soigneusement orientées vers la réussite grâce à des évaluations de haute qualité. Nous nous attachons à fournir des solutions instantanées, riches en valeur et rentables, tout en garantissant un service client de qualité.
`;

  const text_2 = `Nous adoptons une méthodologie éprouvée, qui permet aux entreprises de rester agiles et de suivre les dernières tendances. Sur le marché concurrentiel d'aujourd'hui, l'automatisation et les méthodologies de gestion associées sont cruciales pour garantir une meilleure efficacité des opérations de votre entreprise.`;

  const text_3 = `Nous formons une équipe expérimentée et talentueuse qui a fait ses preuves en matière de résultats positifs. Les personnes qui partagent nos idées se motivent mutuellement pour apporter des idées novatrices, que nous exploitons pour maximiser l'efficacité des solutions proposées.`;

  return (
    <div>
      <div className="spacer" id="aboutus">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className="text-center">
              <h2 className="title">À Propos du projet MACHINA</h2>
              <h6 className="subtitle">
              MACHINA est un partenariat stratégique qui vise à accroître la pertinence de la formation professionnelle initiale et continue dans le secteur des TIC. Il vise à garantir que la main d'œuvre actuelle et future des métiers des TIC
disposera des compétences spécifiques et aptitudes transversales nécessaires pour répondre aux exigences du
monde du travail et réussir dans un domaine compétitif et en plein essor.
              </h6>
            </Col>
          </Row>
          
        </Container>
      </div>
    </div>
  );
};

export default FeatureComponent;
