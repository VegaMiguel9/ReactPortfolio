import React from "react";

import '../styles/Footer.css';
import linkedinlogo from "../Imgs/linkedin.png";
import githublogo from "../Imgs/github.png";

function Footer() {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/miguel-rivera-vega-27a105266/"><img src={linkedinlogo} alt="W3Schools.com"/></a>
            <a href="https://github.com/VegaMiguel9"><img src={githublogo} alt="W3Schools.com"/></a>
        </div>
    );
}

export default Footer;