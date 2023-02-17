import React from "react";

import '../styles/Portfolio.css'


function Portfolio() {
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <div className="links">
                <div>
                    <a href="https://github.com/VegaMiguel9/CodeQuiz">Coding Quiz</a>
                </div>
                <div>
                    <a href="https://gist.github.com/VegaMiguel9/4159f1eb9f777eda24e28f7796cb7ff5">Gist Regex Tutorial</a>
                </div>
                <div>
                    <a href="https://cmizelle10.github.io/Project_1/">Coding Project 1 Website</a>
                </div>
                <div>
                    <a href="https://github.com/cmizelle10/Project_1">Coding Project 1 GitHub</a>
                </div>
                <div>
                    <a href="https://mysterious-tor-72602.herokuapp.com/">Coding Project 2 Website</a>
                </div>
                <div>
                    <a href="https://github.com/Lwalsh2022/Pet-Project">Coding Project 2 GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;