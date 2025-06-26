import React from "react";

const RightLayout = () => {
  return (
    <div className="w3-twothird">
    
      <div className="w3-container w3-card w3-white w3-margin-bottom">
        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Full Stack Software Engineer / Northern Trust</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>May 2022 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
          <p>Developed custom AEM components using HTL, Sling Models, and integrated React JS based SPA with AEM via AEM SPA Editor</p>
          <p>Integrated analytics and visualizations using plotly.js</p>
          <hr />
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Senior Software Engineer / Wells Fargo</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Feb 2021 - May 2022</h6>
          <p>Refactored and optimized key application modules, resulting in 60% faster page load times and significant improvements in Lighthouse performance scores (90+)</p>
          <hr />
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Lead Engineer / PepsiCo</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Oct 2019 - Feb 2021</h6>
          <p>Developed and maintained reusable React JS components and UI templates for product microsites, regional landing pages, and digital brand campaigns across Pepsi, Lay’s, Gatorade, and Quaker.</p><br />
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Consultant / Capgemini</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Aug 2018 - Oct 2019</h6>
          <p>implemented advanced UI features like drag-and-drop, virtualized lists, and charts using third-party libraries and custom hooks.</p><br />
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Senior Software Developer / Hextechnologies</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Dec 2014 - Jul 2018</h6>
          <p>Built a React-based UI for a portfolio management application.</p><br />
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Web Developer / Netfrux Technologies</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>June 2013 - Dec 2014</h6>
          <p>Used Static Site Generation (SSG) for blog and documentation pages to boost performance.</p><br />
        </div>
      </div>

      <div className="w3-container w3-card w3-white">
        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
        
        
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Punjabi University</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2008 - 2012</h6>
          <p>Bachelor of Technology</p><br />
        </div>
      </div>

 
    </div>
  );
};
export default RightLayout;
