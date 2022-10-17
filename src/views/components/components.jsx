import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import Cards from "../components/cards.jsx";
import CallToAction from "../../components/call-to-action/CallToAction";
import FeatureComponent from "../components/featurecomponent.jsx";
import ContactComponent from "../components/contactcomponent.jsx";

const Components = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner />
          <FeatureComponent />
          <Cards />
          {/* <ContactComponent /> */}
          {/* <CallToAction /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

Components.propTypes = {
  classes: PropTypes.object,
};

export default Components;
