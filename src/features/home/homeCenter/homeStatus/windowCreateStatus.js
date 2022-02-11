import React from "react"
import {ImgUser} from "../../../../assets/genaral/elementGenaral"
import imgUser from '../imghomeCenter/imguser.jpg'
import { FcGallery, FcCustomerSupport, FcReddit, FcCollect, FcCableRelease } from "react-icons/fc"
import { IoEllipsisHorizontal, IoClose } from "react-icons/io5";

// từ server truyền xuống
const initPermission = 'Công khai'
// data quyền truy cập
const dataSelectPermission = ['Công Khai', 'Bạn bè', 'Bạn bè trừ', 'Chỉ mình tôi', 'Bạn bè cụ thể', 'Tùy chỉnh', 'Close friend', 'Danh sách chưa đặt tên']
const Permission = ({data}) => {
    return(
        <option value={data}>{data}</option>
    )
}

// data extentions status
const dataExtention = [
    {
        icon: <FcGallery className='extention-status-item-icon'/>,
        detail: 'Ảnh/Video',
    },
    {
        icon: <FcCustomerSupport className='extention-status-item-icon'/>,
        detail: 'Gắn thẻ người khác',
    },
    {
        icon: <FcReddit className='extention-status-item-icon'/>,
        detail: 'Cảm xúc hoạt động',
    },
    {
        icon: <FcCollect className='extention-status-item-icon'/>,
        detail: 'Check in',
    },
    {
        icon: <FcCableRelease className='extention-status-item-icon'/>,
        detail: 'Tổ chức buổi H&Đ',
    },
    {
        icon: <IoEllipsisHorizontal className='extention-status-item-icon'/>,
        detail: 'Xem thêm',
    },
]
const ExtentionItem = ({data: {icon, detail}}) => {
    return(
        <li className='extention-status-item list-style-none ms-1'>
            <h3 className='m-0'>{icon}</h3>
            <span className='noted upnote-4'>{detail}</span>
        </li>
    )
}

const WindowCreateStatus = () => {
    const permissionOPtion = dataSelectPermission.map((data, index) => <Permission key={index} data={data} />)
    const extentionItems = dataExtention.map((data, index) => <ExtentionItem key={index} data={data} />)
    return(
        <div className="window-create-status-cover">
            <div className='window-create-status'>
                <form action='#' method='post' className='create-status-form'>
                    <section className='window-create-status-main position-relative'>
                        <header className='window-create-header'>
                            <p className='lead fw-bold text-center text-color-pr my-3'>Tạo bài viết</p>
                            <span className='close-box close-box-status'><IoClose /></span>
                        </header>
                        <div className='line-seperate m-0'></div>
                        <div className='permission-people-watch m-3 d-flex align-items-center'>
                            <ImgUser data={{imgUser, circleimg: true}}/>
                            <div className='ms-2'>
                                <small className='fw-bold m-0 text-color-pr'>Nguyễn Văn Thịnh</small>
                                <small className='select-permission bg-symbol text-color-pr d-flex justify-content-center fb-border-radius'>
                                    {initPermission}
                                </small>
                            </div>
                        </div>
                        <div className='text-status-cover'>
                            <div className='mx-3'>
                                <textarea id='text-status' className=' text-color-input' rows='4'></textarea>
                            </div>
                        </div>
                        <div className='extentions-status mx-3 fb-border-radius'>
                            <div className='mx-3 my-2 d-flex justify-content-between align-items-center'>
                                <small className='fw-bold text-color-pr text-center m-0'>Thêm vào bào viết</small>
                                <ul className='extention-status-list m-0 d-flex appear-name-uti'>
                                    {extentionItems}
                                </ul>
                            </div>
                        </div>
                        <div className='m-3'>
                            <button className='btn btn-form-create-status fb-border-radius w-100 bg-no-touch'>
                                <p className='fw-bold m-0 text-color-read'>Đăng</p>
                            </button>
                        </div>
                    </section>
                    <section className='window-create-status-select-first'>
                        <select className='d-none'>
                            {permissionOPtion}
                        </select>

                    </section>
                    <section className='window-create-status-select-second'>

                    </section>
                </form>
            </div>
        </div>
    )
}

export default WindowCreateStatus