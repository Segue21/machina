/* eslint-disable */
import React, { useState } from "react";

import { Row, Col, Container } from "reactstrap";

import img3 from "../../assets/images/card-images/cyber.jpg";
import img4 from "../../assets/images/card-images/devs.jpg";
import img5 from "../../assets/images/card-images/maint.jpg";
import img6 from "../../assets/images/card-images/nets.jpg";
import img7 from "../../assets/images/card-images/camera.jpg";
import img9 from "../../assets/images/card-images/ip.jpg";

const Cards = () => {
  const [showMore, setShowMore] = useState(false);
  const text = `Nous sommes une équipe de spécialistes en IT qui sont à jour par rapport aux évolutions en matière de sécurité et des dispositions relatives aux menaces nécessaires pour protéger le réseau de votre entreprise contre les cyberattaques. Nos solutions en la matière aident les entreprises à fonctionner plus harmonieusement et plus efficacement, quels que soient le volume et la complexité croissants des menaces. Elles protègent non seulement vos données confidentielles, mais atténuent également le risque de ruiner vos relations avec vos clients.`;

  const [showMore1, setShowMore1] = useState(false);
  const text_1 = `Nos services de développement de logiciels comprennent le développement de sites web, qui est essentiel pour atteindre un large public et attirer plus de clients. Nous aidons nos partenaires à créer des applications personnalisées qui répondent à des besoins commerciaux spécifiques. Nos développeurs de logiciels ont l'expérience, les compétences techniques et les outils nécessaires pour déployer efficacement votre activité. Ces logiciels permettront à votre entreprise d'atteindre de nouveaux sommets et à votre marque d'être plus visible.`;

  const [showMore2, setShowMore2] = useState(false);
  const text_2 = `Les services réseaux sont essentiels pour mettre en place un réseau d'entreprise performant. Nous proposons l'étude, l'installation et le déploiement de la fibre optique, du Wifi et d'autres équipements de réseau. Nos services comprennent également l'adressage IP, le DNS, le filtrage de contenu web et des vérifications régulières du réseau afin de protéger votre réseau d'entreprise contre les accès non autorisés.`;

  const [showMore3, setShowMore3] = useState(false);
  const text_3 = `Nous proposons des systèmes de vidéosurveillance pour les structures privées ou publiques qui veulent une surveillance 24/24. Disposer d'un système de vidéosurveillance fiable dans votre entreprise permet, non seulement de fournir des preuves en cas de crime, mais encore de démontrer votre engagement pour la sécurité de vos clients et d'améliorer la perception de votre entreprise par ces derniers. `;

  const [showMore4, setShowMore4] = useState(false);
  const text_4 = `Nous proposons des services de maintenance curative et préventive pour le bon fonctionnement de vos systèmes et réseaux informatiques afin que vous puissiez vous concentrer sur vos activités commerciales. Nous assurons la maintenance de vos systèmes informatiques pour qu'ils restent disponibles, stables et performant. Notre objectif et de vous soulager de la charge que représente le suivi et la surveillance de tous les serveurs, les systèmes de communication, de sécurité incendie et de tout ce dont une entreprise a besoin en matière de maintenance.`;

  const [showMore5, setShowMore5] = useState(false);
  const text_5 = `Nous proposons des solutions IPTV flexibles qui garantissent une disponibilité et une vitesse optimales. Les chaînes de télévision sont rendues accessibles, par exemple, dans les hôtels et les hôpitaux, permettant ainsi aux membres de votre équipe de communiquer via un simple écran de télévision avec une accessibilité accrue et des coûts réduits.`;

  return (
    <div id="service">
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Programme</h2>

              <h6>
                <br />
                <strong>
                  <u>Organisateurs : </u> Parisa Ghodous
                  (parisa.ghodous@liris.cnrs.fr),{" "}
                </strong>
                <br />
                Frédérique Biennier, Khalid Benabdeslem, Pierre Valiorgue,
                El-hacen Diallo
              </h6>
            </Col>
          </Row>
        </Container>

        <Container className="mini-spacer ">
          <Row className="justify-content-center">
            <Col md="6" className="text-center">
              <div className="card justify-content-center">
                <div className="card-body">
                  <div id="content-content">
                    <ul class="timeline">
                      <li class="event" data-date="10:00 - 10:30pm">
                        <h3>Présentation du projet européen MACHINA</h3>
                      </li>
                      <li class="event" data-date="10:30 - 11:00pm">
                        <h3>
                          Introduction sur Machine Learning et ses techniques
                        </h3>
                      </li>
                      <li class="event" data-date="11:00 - 12:00pm">
                        <h3>
                          Démos et survol du cours professionnel en Ligne
                          MACHINA
                          <br/> 
                          (
                          <a
                            href="https://www.openlearning.com/courses/machine-learning-skills-for-ict-professionals"
                            target="_blank"
                            className="link" 
                            id="link_blue"
                          >
                            
                            lien vers le MOOC 
                          </a>
                          )
                        </h3>
                      </li>
                      <li class="event" data-date="12:00pm">
                        <h3>Questions & Réponses</h3>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Cards;
