import React from 'react'
import {Link} from 'gatsby'
import Book1 from "../images/gotch'em-book-1-min.png"
import Book2 from '../images/the-gifted-one-book-min.png'

const UpperMain =()=>{
    return  (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">
                    <h1>Books</h1>
                    
                    <p className="middle-params">
                       I wrote and published The Gifted One,
                       an adventure Sci-Fi novel, and Gotch'em: Johnny Taggett,
                       a tuff guy detective mystery.
                    </p>

                    <div className="grid-two-columns" id="wrapper-two-books">
                        <div className="book-wraps">
                            <img src={Book1} alt="book cover"/>
                            <h5>GOTCH'EM</h5>
                            <span>Johnny Taggett</span>
                            
                            <button>
                                <Link 
                                    to={'/books/#johnny_taggett'}>
                                        Read More
                                </Link>
                            </button>
                        </div>

                        <div className="book-wraps">
                            <img src={Book2} alt="book cover"/>
                            <h5>THE GIFTED ONE</h5>
                            <button>
                                <Link 
                                    to={'/books/#the_gifted_one'}>
                                    Read More
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain