import React, { useState } from 'react'
import {Link} from 'gatsby'
import Book1 from "../images/gotch'em-book-1-min.png"
import Book2 from '../images/the-gifted-one-book-min.png'

/* ScreenPlay Viewer */
import 'antd/dist/antd.css';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import { Modal, Button } from 'antd';
import { Worker } from '@phuocng/react-pdf-viewer';
import Viewer from '@phuocng/react-pdf-viewer';
import ScreenPlay from '../../static/pdf/screen_play.pdf'
import { FundViewOutlined  } from '@ant-design/icons';

const UpperMain =()=>{

    const [visible, visibFunc] = useState(false);

    const showModal = () => {
        visibFunc(!visible)
    };
    
    const handleOk = e => {
        visibFunc(false)
    };
    
    const handleCancel = e => {
        visibFunc(false)
    };

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

                    <br /><br />

                    <Button  onClick={()=>showModal()} id="screenplay">
                        <span>See the ScreenPlay adaptation of Gotch'em here.</span>
                        <FundViewOutlined />
                    </Button>

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
        </>
    )
}

export default UpperMain