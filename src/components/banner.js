import React from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/banner/banner_img.png'

const Banner = ()=>{
    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="grid-two-columns" id="banner-layout-responsive">
                        
                        <div className="left-col">
                            <div className="banner-content-wrapper">
                                <h1>
                                    <span>My Early Days As</span> 
                                    <span>A Story Teller</span>
                                </h1>
                                <p>
                                    In my early days as a kid living on our farm in Chula Vista, CA.  
                                    I use to tell stories, mostly with action, like war stories,
                                    detectives or cowboys and Indians. 
                                </p>
                                <button>
                                    <Link to="/about-the-author">
                                        Read More
                                    </Link>
                                </button>
                            </div>
                        </div>

                        <div className="right-col banner-img">
                            <img src={ImgBanner}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;