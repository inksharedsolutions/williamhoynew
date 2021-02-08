import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import ReactPlayer from 'react-player/youtube'

const radInt = (props) =>{
	return(
		<>
		 	<Layout>

			 	<Nav pathExt={props.path}/>

                <Banner 
                    spanFirst={`Radio`}
                    contextHeading={`Interviews`} 
                />

	 			<div className="radio-interviews-content">
				 	<div className="container-gt">
						<div className="grid-two-columns">  
							<div className="radint-vid video-1">
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
							<div className="radint-vid video-2">
								<div className="player-wrapper">
									<ReactPlayer
										className="react-player"
										url={"http://www.youtube.com/watch?v=Y5LNEc43Tko"}
										width="100%"
										height="400px"
										controls={true}
										playIcon
									/>
								</div>
							</div>  
						</div>   
					</div>
 				</div>
	 		</Layout>
		</>
	)
}

export default radInt;