import React from "react";
import { IoCreateOutline, IoBook, IoRibbon, IoFlag, IoMegaphone, IoCalendarSharp, IoBagHandle, IoBriefcase, IoCaretDownOutline} from "react-icons/io5";
import {FaUsers} from "react-icons/fa";

const dataSocial = [
    {
        icon: <IoFlag className='menuleft-icon'/>,
        des: 'Trang',
    },
    {
        icon: <IoMegaphone className='menuleft-icon'/>,
        des: 'Quảng cáo',
    },
    {
        icon: <FaUsers className='menuleft-icon'/>,
        des: 'Nhóm',
    },
    {
        icon: <IoCalendarSharp className='menuleft-icon'/>,
        des: 'Sự kiện',
    },
    {
        icon: <IoBagHandle className='menuleft-icon'/>,
        des: 'Bài niêm yết trên Marketplace',
    },
    {
        icon: <IoBriefcase className='menuleft-icon'/>,
        des: 'Việc làm',
    },
]

const dataPersonal = [
    {
        icon: <IoCreateOutline className='menuleft-icon'/>,
        des: 'Đăng',
    },
    {
        icon: <IoBook className='menuleft-icon'/>,
        des: 'Tin',
    },
    {
        icon: <IoRibbon className='menuleft-icon'/>,
        des: 'Sự kiện trong đời',
    },
]

const Uti = ({uti: {icon, des}}) => {
    return(
        <li className='main-uti-right'>
            <div className='icon--hover'>
                {icon}
            </div>
            <span className='main-uti-right-des'>
                {des}
            </span>
        </li>
    )
}


const Main = () => {
    const mainPersonal = dataPersonal.map((uti, index) => (<Uti key={index} uti={uti}/>))
    const mainSocial = dataSocial.map((uti, index) => (<Uti key={index} uti={uti}/>))
    return(
        <main className='menu-right-main'>
            <div>
                <ul className='menu-right-main-margin'>
                    {mainPersonal}
                </ul>
                <ul className='menu-right-main-margin'>
                    {mainSocial}
                </ul>
            </div>
        </main>
    )
}



const MenuRight = () => {
    return (
        <section className='menu-right'>
            <header className='menu-right-head'>
                <span className='menu-right-head-test'>Tạo</span>
            </header>
            <Main />
        </section>
    )
}

export default MenuRight