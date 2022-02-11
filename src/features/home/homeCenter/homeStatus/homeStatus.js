import React from "react";
import { Link } from "react-router-dom";
import { FcGallery, FcCustomerSupport, FcReddit } from "react-icons/fc";
import {ImgUser} from "../../../../assets/genaral/elementGenaral";
import imgUser from '../imghomeCenter/imguser.jpg'
import WindowCreateStatus from "./windowCreateStatus";

const HomeCreateStatus = () => {
    return(
        <section className="home-your-status">
                <div className='home-your-status-search m-3 d-flex stop-select'>
                    <ImgUser data={{imgUser, circleimg: true}} width={44}/>
                    <div className='home-your-status-search-input rounded-pill flex-grow-1 ms-2 ps-3 stop-select'>
                        Thịnh ơi bạn đang nghĩ gì thế?
                        <WindowCreateStatus />
                    </div>
                </div>
                <div className='line-seperate'></div>
                <div className='home-your-status-list mx-3 my-2 text-color-read row stop-select'>
                    <Link to='#' className='status-item d-flex justify-content-center align-items-center col py-1 element-hover'>
                        <FcGallery className='status-icon'/>
                        <p className='fw-bold m-0 text-color-pr'>Ảnh/Video</p>
                    </Link>
                    <Link to='#' className='status-item d-flex justify-content-center align-items-center col py-1 element-hover'>
                        <FcCustomerSupport className='status-icon'/>
                        <p className='fw-bold m-0 text-color-pr'>Gắn thẻ bạn bè</p>
                    </Link>
                    <Link to='#' className='status-item d-flex justify-content-center align-items-center col py-1 element-hover'>
                        <FcReddit className='status-icon'/>
                        <p className='fw-bold m-0 text-color-pr'>Cảm xúc/Hoạt động</p>
                    </Link>
                </div>
            </section>
    )
}

export default HomeCreateStatus