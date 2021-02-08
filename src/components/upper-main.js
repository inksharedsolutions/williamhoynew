import React from 'react'
import {Link} from 'gatsby'
import Book1 from '../images/book_front_1.png'
import Book2 from '../images/book_front_2.png'

const UpperMain =()=>{
    return  (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">
                    <h1>Books</h1>
                    
                    <p className="middle-params">
                       I wrote and published Gotch'em: Johnny Taggett,
                       a tuff guy detective mystery, and The Gifted One,
                       an adventure Sci-Fi novel.
                    </p>

                    <div className="grid-two-columns" id="wrapper-two-books">
                        <div className="book-wraps">
                            <img src={Book1}/>
                            <h5>GOTCH'EN</h5>
                            <span>Johnny Taggett</span>
                            <button>
                                <Link 
                                    to={'/about-the-book/#johnny_taggett'}>
                                        Read More
                                </Link>
                            </button>
                        </div>

                        <div className="book-wraps">
                            <img src={Book2}/>
                            <h5>THE</h5>
                            <span>Gifted One</span>
                            <button>
                                <Link 
                                    to={'/about-the-book/#the_gifted_one'}>
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