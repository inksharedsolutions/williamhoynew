import React, {useState, useEffect} from 'react'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { Worker } from '@phuocng/react-pdf-viewer';

//PDF viewer
import Viewer from '@phuocng/react-pdf-viewer';
import ScreenPlay from '../../../static/pdf/screen_play.pdf'
// Import the CSS
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import { FundViewOutlined  } from '@ant-design/icons';

const BookInfo = (props)=>{
 
    // const [clickState, stateFunc] = useState(false);
    const [visible, visibFunc] = useState(false);

    // useEffect(()=>{


    // },[state])

    const showModal = () => {
        visibFunc(!visible)
    };
    
    const handleOk = e => {
        visibFunc(false)
    };
    
    const handleCancel = e => {
        visibFunc(false)
    };



    return(
        <>
            <div className="columns book-container-ft">
                <div className="column"> 
                    <div className="bookImgContainer">
                        <img alt="main-book" src={props.data.imgSrc} />
                    </div>
                </div>

                <div className="column" id={props.data.id}>
                    <section className="contentBook">

                        <h1>{props.data.title}</h1>
                        <span>{props.data.spanTitle}</span>
                        <p>
                            {props.data.content}
                        </p>
                    </section>

                    <section className="fullSection">
                        <nav className="booklinkBlocks">
                            <span>Ebooks :</span>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.amazon}>Amazon</a></li>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.stratton}>Stratton Press</a></li>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.barnes}>Barnes & Noble</a></li>
                        </nav>

                        <nav className="booklinkBlocks">
                            <span>Purchase Paperback :</span>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.amazon}>Amazon</a></li>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.barnes}>Barnes & Noble </a></li>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.booksamillion}>Books A Million</a></li>
                        </nav>
                        
                        {       
                            props.data.screenPlay && (
                                <nav className="booklinkBlocks screenPlay-viewer">
                                    <span>ScreenPlay :</span>

                                    <Button  onClick={()=>showModal()}>
                                        <span>Screenplay Viewer</span>
                                        <FundViewOutlined />
                                    </Button>

                                    <Modal
                                        title="See the Screenplay adaptation of  Gotch'em here!"
                                        visible={visible}
                                        onOk={()=>handleOk()}
                                        onCancel={()=>handleCancel()}
                                        >

                                        <Worker 
                                            workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
                                            <div
                                                style={{
                                                    height: '750px',
                                                }}
                                            >
                                                <Viewer 
                                                    fileUrl={ScreenPlay} 
                                                />
                                            </div>
                                        </Worker>
                                    </Modal>
                                </nav>
                            )
                        }
        

                    </section>
                </div>	
            </div>
        </>
    )
} 

export default BookInfo;