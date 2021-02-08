import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/img/author_img.png'
import ReactPlayer from 'react-player/youtube'

const LowerMain = ()=>{
    return(
        <>
            <section className="author-section">
                <div className="container-gt">
                    <div className="grid-two-columns" id="author-container">
                        <div className="wrapper-auth-content auth-img-container">
                            <img src={AuthorImg} alt="William Hoy"/>
                        </div>

                        <div className="wrapper-auth-content">
                            <p>
                                I, William D. Hoy was born in San Diego, California and raised in Chula Vista a suburb of San Diego, 
                                living on a farm until I entered high school. Graduated from Chula Vista Senior High School,
                                years later I got my Bachelor’s Degree from Columbia College.
                            </p>

                            <h1>William Hoy</h1>

                            <span className="span-tagline">Author & Writer</span>

                            <button>
                                <Link to="/about-the-author">
                                    Read More
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="radio-interview">
                <div className="container-gt">
                    <div className="grid-two-columns">                   
                        <div className="grid-child-content">
                            <h1>
                                Radio <span>Interviews</span>
                            </h1>
                            <button>
                                <Link to="/radio-interviews">
                                    See More
                                </Link>
                            </button>
                        </div>
                        <div className="grid-child-video">
                            <div className="player-wrapper">
                                <ReactPlayer
                                    className="react-player"
                                    url={"http://www.youtube.com/watch?v=Qitg8fyB1F0"}
                                    width="100%"
                                    height="400px"
                                    controls={true}
                                    playIcon
                                />
                            </div>
                        </div>                
                    </div>
                </div>
            </section>
        </>
    )
}

export default LowerMain 