import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import ReactPlayer from 'react-player/youtube'
import { Helmet } from 'react-helmet';

const radInt = (props) =>{
	return(
		<>
		 	<Layout>
                <Helmet title="Videos | William D. Hoy" />
			 	<Nav pathExt={props.path}/>

                <Banner 
                    spanFirst={``}
                    contextHeading={`Videos`} 
                />

	 			<div className="radio-interviews-content">
				 	<div className="container-gt">
						<h1 className="video-header">Radio Interviews</h1>
						<div className="grid-two-columns" style={{height: 'auto', marginBottom: '100px'}}>  
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
						<h1 className="video-header">Encarnatus</h1>
                        <div className="video-row">
							<div className="player-wrapper">
								<iframe src="https://drive.google.com/file/d/1g67_4b5xnpfyT7J4drWEpI7QOnPm_UAs/preview" width="100%" height="400" title="encarnatus1"></iframe> 
							</div>
                            <div className="player-wrapper">
								<iframe src="https://drive.google.com/file/d/1JCu-vzRM5W1L4aripNIV6hVq8V78UzrB/preview" width="100%" height="400" title="encarnatus2"></iframe>
							</div>
							<div className="player-wrapper">
								<iframe src="https://drive.google.com/file/d/1LK7gw2KWlNhOFQZMgP-Ou35Qim5pqL_X/preview" width="100%" height="400" title="encarnatus3"></iframe>
							</div>
						</div> 
						<h1 className="video-header">Commercial: Pete's Coffee</h1>
						{/* <div className="grid-two-columns">   */}
							<div className="radint-vid video-2" id="commercial-vid">
								<iframe src="https://www.imdb.com/videoproembed/vi2797055001" width="600" height="400" title="petes-coffee"></iframe>
							</div>
						{/* </div>  */}
					</div>
 				</div>
	 		</Layout>
		</>
	)
}

export default radInt;