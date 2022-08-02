import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import js from "../assets/img/js.svg";
import php from "../assets/img/php.svg";
import mysql from "../assets/img/mysql.svg";
import maria from "../assets/img/maria.svg";
import mongo from "../assets/img/mongo.svg";
import react from "../assets/img/react.svg";
import express from "../assets/img/express.svg";
import laravel from "../assets/img/laravel.svg";
import flutter from "../assets/img/flutter.svg";
import docker from "../assets/img/docker.svg";
import git from "../assets/img/git.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>That is all my skill<br></br>Below are the stacks I've used</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                            </div>
                            <div className="item" >
                                <img src={php} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={maria} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={mongo} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={express} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={laravel} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={flutter} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={docker} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
