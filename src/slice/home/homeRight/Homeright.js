import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { IoVideocam, IoEllipsisHorizontal, IoAdd } from "react-icons/io5";
import {FaSistrix} from 'react-icons/fa'
import './HomeRight.scss'
import img1 from './imghomeRight/1.jpg'
import img2 from './imghomeRight/2.jpg'
import img3 from './imghomeRight/3.jpg'
import img4 from './imghomeRight/4.jpg'
import img5 from './imghomeRight/5.jpg'
import img6 from './imghomeRight/6.jpg'
import img7 from './imghomeRight/7.jpg'
import img8 from './imghomeRight/8.jpg'
import {disOrAppearScroll, elementScroll, Element, ElementUser} from '../../../functionGenaral'

// data từ redux trả về
const dataUser = [
    {
        imgUser: img1,
        circleimg: true,
        activeOrNot: true,
        haveStory: 0,
        note: 'Hương Linh',
    },
    {
        imgUser: img2,
        circleimg: true,
        activeOrNot: true,
        note: 'Thùy Dương',
    },
    {
        imgUser: img3,
        circleimg: true,
        activeOrNot: true,
        haveStory: 1,
        note: 'Trần Thị Thủy',
    },
    {
        imgUser: img4,
        circleimg: true,
        activeOrNot: true,
        haveStory: 1,
        note: 'Trần Minh Phương',
    },
    {
        imgUser: img5,
        circleimg: true,
        activeOrNot: true,
        note: 'Thanh Hoa',
    },
    {
        imgUser: img1,
        circleimg: true,
        activeOrNot: true,
        haveStory: 0,
        note: 'Hương Linh',
    },
    {
        imgUser: img2,
        circleimg: true,
        activeOrNot: true,
        haveStory: 0,
        note: 'Thùy Dương',
    },
    {
        imgUser: img3,
        circleimg: true,
        activeOrNot: true,
        haveStory: 1,
        note: 'Trần Thị Thủy',
    },
    {
        imgUser: img4,
        circleimg: true,
        activeOrNot: true,
        haveStory: 1,
        note: 'Trần Minh Phương',
    },
    {
        imgUser: img5,
        circleimg: true,
        activeOrNot: true,
        haveStory: 0,
        note: 'Thanh Hoa',
    },
    {
        imgUser: img1,
        circleimg: true,
        activeOrNot: true,
        haveStory: 0,
        note: 'Hương Linh',
    },
    {
        imgUser: img2,
        circleimg: true,
        activeOrNot: true,
        haveStory: 0,
        note: 'Thùy Dương',
    },
    {
        imgUser: img3,
        circleimg: true,
        activeOrNot: true,
        haveStory: 1,
        note: 'Trần Thị Thủy',
    },
    {
        imgUser: img4,
        circleimg: true,
        activeOrNot: true,
        haveStory: 1,
        note: 'Trần Minh Phương',
    },
    {
        imgUser: img5,
        circleimg: true,
        activeOrNot: true,
        haveStory: 0,
        note: 'Thanh Hoa',
    },
    {
        imgUser: img1,
        circleimg: true,
        activeOrNot: true,
        haveStory: 0,
        note: 'Hương Linh',
    },
    {
        imgUser: img2,
        circleimg: true,
        activeOrNot: true,
        haveStory: 0,
        note: 'Thùy Dương',
    },
    {
        imgUser: img3,
        circleimg: true,
        activeOrNot: true,
        haveStory: 1,
        note: 'Trần Thị Thủy',
    },
    {
        imgUser: img4,
        circleimg: true,
        activeOrNot: true,
        haveStory: 1,
        note: 'Trần Minh Phương',
    },
    {
        imgUser: img5,
        circleimg: true,
        activeOrNot: true,
        haveStory: 0,
        note: 'Thanh Hoa',
    },
    {
        imgUser: img1,
        circleimg: true,
        activeOrNot: true,
        haveStory: 0,
        note: 'Hương Linh',
    },
    {
        imgUser: img2,
        circleimg: true,
        activeOrNot: true,
        haveStory: 0,
        note: 'Thùy Dương',
    },
    {
        imgUser: img3,
        circleimg: true,
        activeOrNot: true,
        haveStory: 1,
        note: 'Trần Thị Thủy',
    },
    {
        imgUser: img4,
        circleimg: true,
        activeOrNot: true,
        haveStory: 1,
        note: 'Trần Minh Phương',
    },
    {
        imgUser: img5,
        circleimg: true,
        activeOrNot: true,
        haveStory: 0,
        note: 'Thanh Hoa',
    },
]

const groupOfUser = [
    {
        imgUser: img6,
        circleimg: true,
        activeOrNot: true,
        note: 'IT Supporter gen 7',
    },
    {
        imgUser: img7,
        circleimg: true,
        activeOrNot: true,
        note: 'CNTT1 - K15',
    },
    {
        imgUser: img8,
        circleimg: true,
        activeOrNot: true,
        note: 'Nhóm báo nổ',
    },
]
// trạng thái data truyền vào => data: {imgUser, circleimg, activeOrNot, haveStory, note}  
// -----> đối số havestory: 1 là đã xem và 0 là chưa xem, không có thì ko cần truyền
// note là tên user

const HomeRight = () => {
    const users = dataUser.map((user, index) => <ElementUser key={index} data={user}/>)
    const groups = groupOfUser.map((user, index) => <ElementUser key={index} data={user}/>)
    return (
        <section className="home-right container-scroll">
            <div className="duty-calc-height-scroll">
                <header className="home-right-head d-flex justify-content-between align-items-center mx-3 my-2">
                    <p className="fs-title m-0 fw-bold">Người liên hệ</p>
                    <ul className="home-right-uties-list m-0 p-0 d-flex justify-content-between align-items-center">
                        <li className="home-right-uties-item">
                            <IoVideocam className="uti-icon"/>
                        </li> 
                        <li className="home-right-uties-item">
                            <FaSistrix className="uti-icon"/>
                        </li> 
                        <li className="home-right-uties-item">
                            <IoEllipsisHorizontal className="uti-icon"/>
                        </li> 
                    </ul>
                </header>
                <main className="list-relative">
                    <section className='list-user'>
                        {users}
                    </section>
                    <div className='line-seperate my-2'></div>
                    <section className='list-group'>
                        <header className='group-chat-title mx-3 my-2'>
                            <p className='fs-title m-0 fw-bold'>Cuộc trò chuyện nhóm</p>
                        </header>
                        {groups}
                    </section>
                    <Element data={{symbol: <IoAdd style={{fontSize: '20px'}} className='text-color-pr'/>, note: {noteMain: 'Tạo Nhóm mới'}, circleSymbol: true}}/>
                </main>
            </div>
            <div className='scrollbar scrollbar-homeright'>
                <div className='scrollbar-create'></div>
            </div>
        </section>
    )
}

export default HomeRight