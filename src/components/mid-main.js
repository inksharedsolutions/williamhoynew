import React from 'react'
import Logo1 from '../../static/logo/amazon.png'
import Logo2 from '../../static/logo/bam.png'
import Logo3 from '../../static/logo/Barnes-and-noble-booksellers-logo.png'
import Logo4 from '../../static/logo/stratton-logo.png'

const MidMain = ()=>{
    return(
        <>
            <section className="mid-main">
                <div className="container-gt separator-line">
                    <h1>Featured</h1>
                    <p className="middle-params">
                        William Hoy has been featured numerous times on...
                    </p>

                    <div className="grid-template-four-col" id="logos-col">
                        <li>
                          <img src={Logo1} alt="Amazon logo"/>
                        </li>

                        <li>
                            <img src={Logo2} alt="Books A Million logo"/>  
                        </li>

                        <li>
                            <img src={Logo3} alt="Barnes &amp; Noble logo"/>
                        </li>

                        <li>
                            <img src={Logo4} alt="Stratton logo"/>
                        </li>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MidMain;