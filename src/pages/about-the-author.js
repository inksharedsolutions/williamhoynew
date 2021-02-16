import React, {useState, useEffect} from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/img/author_img.png'
import { Helmet } from 'react-helmet';


/*Slick*/
/* import Slider from "react-slick"; */
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* 
    Author Images
*/

import Img1 from '../../static/author/1.jpeg'
import Img2 from '../../static/author/2.jpeg'
import Img3 from '../../static/author/3.jpeg'
import Img4 from '../../static/author/4.jpeg'
import Img5 from '../../static/author/5.jpeg'
// import Img6 from '../../static/author/6.jpeg'

const ATB = (props)=>{

    const [mobState, __functState] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", ()=>{ 
            __functState(window.innerWidth <= 990);
        });

    }, [mobState]); 


    /* var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: (mobState) ? 1 : 3,
        slidesToScroll: 1,
     }; */
	
	return (
		<>
		 	<Layout>
                <Helmet title="About the Author | William D. Hoy" />
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>

		 		<div className="container">
				    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="William D. Hoy"/>
                            </div>

                            <div className="heading-quote">
                                <h4>
                                   Just like always, the only way out is through
                                </h4>
                                
                                <span className="ata-span-fx">author quote</span>
                            </div>
                        </div>


                        <article className="article-section column" id="author">
                            <p>
                                I, William D. Hoy was born in San Diego, California and raised in Chula Vista a 
                                suburb of San Diego, living on a farm until I entered high school.
                                Graduated from Chula Vista Senior High School, years later I got
                                my Bachelor’s Degree from Columbia College. I retired from the United
                                States Army as a Chief Warrant Officer Four with 26 years of active duty.
                            </p>

                            <p>
                                I made my entry into the movie business as an actor while living
                                in San Francisco, appearing in some famous movies such as, In pursuit 
                                of Happiness; Money Ball; Milk; Four Christmases; and some not so famous 
                                ones such as; Mail Order Bride; Her Best Move; Ellen Bond Secret Agent;
                                Subprime Children; Control Tower; Violent Jake; and a half a dozen non-fiction 
                                shorts with, The World Astonishing News a Duo-Communications Production. 
                                I'm part of the cast for the up-coming movie Octoroon still in Pre Post Production.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    William D. Hoy
                                </span>
                            </p>

                        </article>
                    </section>


                    <div className="photo-grid">
                        <div className="row-photo">

                            <div className="photo-row">
                                <div className="photo-column">
                                    {/* <img src={Img6} alt="book signing"/> */}
                                    <img src={Img4} alt="seven men smiling"/>
                                </div>
                                <div className="photo-column">
                                    <img src={Img2} alt="3 men looking sideways"/>
                                </div>
                                <div className="photo-column">
                                    <img src={Img3} alt="3 men smiling"/>
                                </div>
                                <div className="photo-column">
                                    <img src={Img5} alt="author"/>
                                </div>
                                <div className="photo-column">
                                    <img src={Img1} alt="man and woman"/>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* 
                    <div id="slider-container">
                        <Slider {...settings} className="ata-slider">

                                <div className="author-img">
                                    <img src={Img1} 
                                        alt="author image" />
                                </div>

                                <div className="author-img">
                                    <img src={Img2} 
                                        alt="author image"/>
                                </div>

                                <div className="author-img">
                                    <img src={Img3} 
                                        alt="author image" />
                                </div>
                
                                <div className="author-img">
                                    <img src={Img4} 
                                        alt="author image" />
                                </div>

                                <div className="author-img">
                                    <img src={Img5} 
                                        alt="author image" />
                                </div>

                                <div className="author-img">
                                    <img src={Img6} 
                                        alt="author image" />
                                </div>
                        </Slider>
                    </div>
                     */}

                </div>

		 	</Layout>
		</>
	)
}


export default ATB;