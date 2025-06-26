import React from "react";
import profilePic from '../../../../assets/images/profile_pic.jpg';

const LeftLayout = () => {
  return (
    <div className="w3-third">
    
      <div className="w3-white w3-text-grey w3-card-4">
        <div className="w3-display-container">
          <img src={profilePic} style={{ width: "100%" }} alt="Avatar" />
          <div className="w3-display-bottomleft w3-container w3-text-black">
            <h2>Divyanshu Garg</h2>
          </div>
        </div>
        <div className="w3-container">
          <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Full Stack Developer</p>
          <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Pune, India</p>
          <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>divyanshu.garg22@gmail.com</p>
          <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+91-98889-33283</p>
          <hr />

          <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
          <p>Javascript</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: "100%" }}>90%</div>
          </div>
          <p>React</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: "100%" }}>
              <div className="w3-center w3-text-white">100%</div>
            </div>
          </div>
          <p>Typescript</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: "100%" }}>
              <div className="w3-center w3-text-white">100%</div>
            </div>
          </div>
          <p>Java</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: "100%" }}>100%</div>
          </div>
          <p>Microservices</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: "100%" }}>100%</div>
          </div>
          <br />

          <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
          <p>English</p>
          <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-round-xlarge w3-teal" style={{height:"24px",width:"100%"}}></div>
          </div>
          
          <br />
        </div>
      </div><br />
    </div>
  );
};
export default LeftLayout;
