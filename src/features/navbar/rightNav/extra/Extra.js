import React from 'react'
import { IoInformation, IoSettingsSharp, IoHelpCircle, IoMoon, IoLogOut, IoChevronForward } from 'react-icons/io5'
import imgUser from'./imgExtra/a1.jpg'
import { Element } from '../../../../assets/genaral/elementGenaral'
import {Link} from'react-router-dom'

const dataUser = {
    username: 'Nguyễn Văn Thịnh',
}
const dataReport = {
    symbol: <IoInformation className="symbol-icon"/>,
    note: {
        noteMain: 'Đóng góp ý kiến',
        noteSpan: 'Góp phần cải thiện phiên bản facebook mới.'
    },
    circleSymbol: true,
    iconEnd: false,
}
const dataFeatures = [
    {
        symbol: <IoSettingsSharp className="symbol-icon"/>,
        note: {
            noteMain: 'Cài đặt & quyền riêng tư',
            noteSpan: false,
        },
        circleSymbol: true,
        iconEnd: <IoChevronForward className="extra-iconend"/>,
    },
    {
        symbol: <IoHelpCircle className="symbol-icon"/>,
        note: {
            noteMain: 'Trợ giúp & hỗ trợ',
            noteSpan: false,
        },
        circleSymbol: true,
        iconEnd: <IoChevronForward className="extra-iconend"/>,
    },
    {
        symbol: <IoMoon className="symbol-icon"/>,
        note: {
            noteMain: 'Màn hình & trợ năng',
            noteSpan: false,
        },
        circleSymbol: true,
        iconEnd: <IoChevronForward className="extra-iconend"/>,
    },
    {
        symbol: <IoLogOut className="symbol-icon"/>,
        note: {
            noteMain: 'Đăng xuất',
            noteSpan: false
        },
        circleSymbol: true,
        iconEnd: <IoChevronForward className="extra-iconend"/>,
    },
]

// {data: {symbol, note:{noteMain, noteSpan}}, circleSymbol, iconEnd}

const Extra = () => {
    const features = dataFeatures.map((data, index) => <Element key={index} data={data}/>)
    return(
        <section className='extra-detail position-absolute stop-select'>
            <div className='duty-calc-height-scroll d-flex flex-column'>
                <div className='page-user element-hover my-2'>
                    <div className='element-hover--margin'>
                        <div className='img-cover overflow-hidden rounded-circle me-3'>
                            <img src={imgUser} className='img-user' alt='ảnh user'></img>
                        </div>
                        <div className='info-user d-flex flex-column justify-content-center flex-grow-1'>
                            <h6 className='fw-bolder text-color-pr m-0'>{dataUser.username}</h6>
                            <p className='m-0'>Xem trang cá nhân của bạn.</p>
                        </div>
                    </div>
                </div>
                <div className='line-seperate'></div>
                <div className='border-under py-2'>
                    <Element data={dataReport}/>
                </div>
                <div className='line-seperate'></div>
                <div className='extra-features py-2'>
                    {features}
                </div>
                <div className='license mx-3'>
                    <Link to='/' className='inline-block text-color-read text-decoration-none'><small>Quyền riêng tư</small></Link>&nbsp;
                    <Link to='/' className='inline-block text-color-read text-decoration-none'><small>.&nbsp;Điều khoản</small></Link>&nbsp;
                    <Link to='/' className='inline-block text-color-read text-decoration-none'><small>.&nbsp;Quảng cáo</small></Link>&nbsp;
                    <Link to='/' className='inline-block text-color-read text-decoration-none'><small>.&nbsp;Lựa chọn quảng cáo</small></Link>&nbsp;
                    <Link to='/' className='inline-block text-color-read text-decoration-none'><small>.&nbsp;Cookie</small></Link>&nbsp;
                </div>
            </div>
        </section>
    )
}

export default Extra

