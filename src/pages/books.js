import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from "../images/gotch'em-book-1-min.png"
import Book2 from '../images/the-gifted-one-book-min.png'
import Book3 from '../images/usurper.png'
import Book4 from '../images/killing-sound1.png'
import { Helmet } from 'react-helmet';

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'william-hoy',
	  config: { identifier:  12, slug}
    }
    

	
	return (
		<>
		 	<Layout>
                <Helmet title="Books | William D. Hoy" />
		 		<Nav pathExt={props.path}/>
		 		<Banner
                    // spanFirst={`About The`}
                    contextHeading={`Books`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`The Gifted One`,
                                    spanTitle: '',
                                    imgSrc: Book2,
                                    id:'the_gifted_one',
                                    content:
                                    `Two wooden pulleys are attached to a large wooden beam stretched across the temple ceiling. 
                                     The assistants pull the rope and raise the litter into a standing position on its end. Andre,
                                     strapped with leather restraints crossing his forehead, chest, waist, legs, arms, and hands, 
                                     facing the giant candles as he seeks the celestial spirt, he meditates.

                                     As Andre's body starts shaking violently, he lets out a terrifying shriek,
                                     and then, as if on cue, his body does limp and he is deathly silent.`,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/the-gifted-one/',
                                        barnes: 'https://www.barnesandnoble.com/w/the-gifted-one-william-d-hoy/1135498639?ean=9781643458120',
                                        amazon :'https://www.amazon.com/Gifted-One-William-D-Hoy-ebook/dp/B082MT8XMB/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Gifted-One-William-D-Hoy/dp/1643453769/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
                                        barnes:'https://www.barnesandnoble.com/w/the-gifted-one-william-d-hoy/1135498639?ean=9781643453767',
                                        booksamillion:'https://www.booksamillion.com/p/Gifted-One/William-D-Hoy/9781643453767?id=7714171848832',
                                    },
                                    screenPlay: false
                                }}
                            />

                            <BookInfo  
                                data={{
                                    title:`Gotch'em`,
                                    spanTitle: "Johnny Taggett",
                                    imgSrc: Book1,
                                    id:'johnny_taggett',
                                    content:
                                    `Former New York cop, Johnny Taggett, our hero in this mystery novel 
                                     takes many turns and keeps you thinking, it holds your attention.
                                     In this self-indulged style of Dashiell Hammett’s Sam Spade or Raymond Chandler’s 
                                     Phillip Marlowe, writer William Hoy takes you thru the gumshoe’s story of intrigue,
                                     dirty back alleys, dirty ashtrays, dirty offices and lets us remember and reflect 
                                     on a time when pulp fiction was at its heyday.

                                     Taggett the perfect pulp tuff guy, told in a story of sweat and dirt,
                                     a man’s world where women are dames and anything else is eye candy. 
                                     This story also has some great characters in Chew - his partners,
                                     Chen and Jie, and Mrs Foulsworth who’s heavily veiled cover makes
                                     her as mysterious as this novel.

                                     Gangsters and mobs couldn’t clean up all this dirt but that’s 
                                     the way pulp fictions is supposed to be. Back to the dark nights
                                     and street lamp alleys where no one is safe but Taggett’s determined
                                     to bring his partner Murphy’s killer to justice.`,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/gotchem-johnny-taggett/',
                                        barnes: 'https://www.barnesandnoble.com/w/gotchem-william-d-hoy/1131520640?ean=9781643454818',
                                        amazon :'https://www.amazon.com/Gotchem-Taggett-William-D-Hoy-ebook/dp/B07RGS8LC4/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Gotchem-Taggett-William-D-Hoy/dp/1643452851/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
                                        barnes:'https://www.barnesandnoble.com/w/beliefs-gardiner-noble/1134052027?ean=9781643455334',
                                        booksamillion:'https://www.booksamillion.com/p/Gotchem/William-D-Hoy/9781643452852?id=7714171848832',
                                    },
                                    screenPlay: true
                                }}
                            />

                            <BookInfo  
                                data={{
                                    title:`Usurper`,
                                    spanTitle: "",
                                    imgSrc: Book3,
                                    id:'Usurper',
                                    content:
                                    `Usurper was inspired from a true story of a young man named Antonio Ferretti in 1890s in Trenton, New Jersey, who used a priest name of Father Mariano Luca as his own in getting a job as an Italian priest in Denver, Colorado. The young man with no experience struggled but he endured and won over the towns people, including the local Bishop. He worked hard, getting a new church, built, but with controversy. Having a lonely life he secretly had a child. The railroad worked its way past their town bringing wealth, misery, happiness and unexpected tragedy. Father Luca expected his challenge and secretly learned to be a priest never reveling his true identity. Performing funerals at the far away cemetery proved to be a challenge. Sometime later Father Luca's secret catches up with him and tragedy happens. The city remembers him by naming their new church after him.`,

                                    ebooks:{
                                        stratton : '',
                                        barnes: 'https://www.barnesandnoble.com/w/usurper-william-d-hoy/1140505770?ean=9781648956249',
                                        amazon :'https://www.amazon.com/dp/B09LCSL8VK/ref=sr_1_1?keywords=9781648956249&qid=1636471901&qsid=145-4607600-8403252&sr=8-1&sres=B09LCSL8VK&srpt=ABIS_BOOK', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Usurper-William-D-Hoy/dp/1648956238/ref=sr_1_1?keywords=9781648956232&qid=1637657083&qsid=139-8239893-7628754&sr=8-1&sres=1648956238',
                                        barnes:'https://www.barnesandnoble.com/w/usurper-william-d-hoy/1140505770?ean=9781648956232',
                                        booksamillion:'https://www.booksamillion.com/p/Usurper/William-D-Hoy/9781648956232?id=8376572031688',
                                    },
                                    screenPlay: true
                                }}
                            />

                            <div className="columns book-container-ft">
                                <div className="column"> 
                                    <div className="bookImgContainer">
                                        <img alt="main-book" src={Book4} />
                                    </div>
                                </div>

                                <div className="column" id="killing-sound">
                                    <section className="contentBook">

                                        <h1>The Killing Sound</h1>
                                        <span></span>
                                        <p>
                                        Taggett drops his knife as he franticly grabs the little lip of surface between the brick wall and the edge of the death pit he’s falling into. Feet dangling a he’s digging his finger tips into the cement. Slowly he begins to pull himself up over the edge of the rim of the pit with his aching fingers. His body’s shaking like a prisoner getting electrocuted as he hauls his big body up over the edge laying flat on his belly in the blind alley gasping for a breath of air. Some time later, Jie’s eyes open into the darkness. The thick air in his crappy little room is clinging to every inch of his skin as he unfolds his legs from their lotus position and sniffs almost silently. Nothing’s on fire. He places his feet in their black socks carefully onto the floor and raises from the chair and stands absolutely still for one entire minute. The tinny blare of jazz a few miles away creeps through the cracks in the flophouse’s walls just beyond the range of most ears. How in the hell am I suppose to know anything says the old guy? I just drink here. That gets him another smack, this one hard enough to bend him over the table. He straightens up and glares into Taggett’s face and says,” Listen, I don’t mind answering questions like a gentleman, but you need to curb your dog here. This Chink’s.......” 
                                        </p>
                                    </section>
                                </div>	
                            </div>

                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;