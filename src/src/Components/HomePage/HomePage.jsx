import React from 'react';
import cls from './HomePage.module.css';
import carouselImgOne from './../../Assets/Images/slide1.jpg';
import carouselImgTwo from './../../Assets/Images/slide2.jpg';
import wellcome from './../../Assets/Images/wellcome.jpg';
import intro from './../../Assets/Images/intro.png';

const HomePage = () => {


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <h1 className={cls.intro}>Добро пожаловать!</h1>
                    <img src={wellcome} className={cls.wellcome}/>
                    <br/>
                    <h2>Fresh Pizza </h2>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className={cls.carousel}>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className={cls.carouselImage} src={carouselImgOne} alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img className={cls.carouselImage} src={carouselImgTwo} alt="..."/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleFade" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleFade" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;