import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Ecommerce from "../../assets/images/images.jpg"
import PortfolioImage from "../../assets/images/portfolio_image.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'


const Portfolio = () => { 
  const [letterClass, setLetterClass] = useState('text-animate');
  const [portfolio, setPortfolio] = useState([
    {
      name: 'Ecommerce',
      image: Ecommerce,
      description: 'Implemented and deployed a full stack Ecommerce website with basic products, cart and payment functionality using NextJS',
      url: 'https://ecommerce-sanity-stripe-lac-phi.vercel.app/',
    },
    {
      name: 'Portfolio',
      image: PortfolioImage,
      description: 'Simple portfolio website using ReactJs, HTML, CSS, and Bootstrap',
      url: 'https://my-portfolio-sweetysuchi.vercel.app/',
    },
    // Add more projects as needed
  ]);

  useEffect(() => {
      const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
      }, 3000);

      return () => {
          clearTimeout(timer);
      }
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://example.com/portfolio');
      const data = await response.json();
      setPortfolio(data);
    };

    fetchData();
  }, []);

//   useEffect(() => {
//     getPortfolio();
// }, []);

// const getPortfolio = async () => {
// }

  const renderPortfolio = (portfolio) => {
    return (
        <div className="images-container">
            {
                portfolio.map((port, idx) => {
                    return (
                        <div className="image-box" key={idx}>
                            <img 
                            src={port.image}
                            className="portfolio-image"
                            alt="portfolio" />
                            <div className="content">
                                <p className="title">{port.name}</p>
                                <h4 className="description">{port.description}</h4>
                                <button
                                    className="btn"
                                    onClick={() => window.open(port.url)}
                                >View</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}


return (
    <>
        <div className="container portfolio-page">
            <h1 className="page-title">
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Portfolio".split("")}
                    idx={15}
                />
            </h1>
            <div>{renderPortfolio(portfolio)}</div>
        </div>
        <div className="stage-cube-cont">
    <div className="cubespinner">
      <div className="face1">
        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
      </div>
      <div className="face2">
        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
      </div>
      <div className="face3">
        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
      </div>
      <div className="face4">
        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
      </div>
      <div className="face5">
        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
      </div>
      <div className="face6">
        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
      </div>
    </div>
  </div>

        <Loader type="pacman" />
    </>
);
}

export default Portfolio;