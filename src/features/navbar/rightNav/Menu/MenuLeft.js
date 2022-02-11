import React from "react";
import {FcPlanner, FcCollaboration, FcConferenceCall, FcTemplate, FcKindle, FcWebcam, FcSteam, FcStart, FcCurrencyExchange, FcShop, FcEditImage, FcSynchronize, FcBookmark, FcLandscape, FcBullish, FcBusiness, FcHighPriority, FcLike, FcVoicePresentation, FcMms} from "react-icons/fc";
import {FaSistrix} from 'react-icons/fa'

const dataMenu = [
    {
        name: 'Xã hội',
        content: [
            {
                icon: () => (<FcPlanner className='menu-unti-icon'/>),
                title: 'Sự kiện',
                des: 'Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng hoặc ở quanh đây.',
            },
            {
                icon: () => (<FcCollaboration className='menu-unti-icon'/>),
                title: 'Bạn bè',
                des: 'Tìm kiếm bạn bè hoặc những bạn bè có thể biết.',
            },
            {
                icon: () => (<FcConferenceCall className='menu-unti-icon'/>),
                title: 'Nhóm',
                des: 'Kết nối với những người bạn có chung sở thích.',
            },
            {
                icon: () => (<FcTemplate className='menu-unti-icon'/>),
                title: 'Bảng tin',
                des: 'Xem bài viết phù hợp với người và trang bạn theo dõi.',
            },
            {
                icon: () => (<FcKindle className='menu-unti-icon'/>),
                title: 'Trang',
                des: 'Khám phá và kết nối với các doanh nghiệp trên faceboook.',
            },
        ]
    },
    {
        name: 'Giải trí',
        content: [
            {
                icon: () => (<FcWebcam className='menu-unti-icon'/>),
                title: 'Video chơi game',
                des: 'Xem, kết nối với những game và những người phát trực tiếp mà bạn yêu thích.',
            },
            {
                icon: () => (<FcSteam className='menu-unti-icon'/>),
                title: 'Chơi game',
                des: 'Chơi game mà bạn yêu thích.',
            },
            {
                icon: () => (<FcStart className='menu-unti-icon'/>),
                title: 'Watch',
                des: 'Đích đến của video phù hợp với sở thích và quan hệ kết nối của bạn.',
            },
        ]
    },
    {
        name: 'Mua sắm',
        content: [
            {
                icon: () => (<FcCurrencyExchange className='menu-unti-icon'/>),
                title: 'Facebook Pay',
                des: 'Một cách dễ dàng bảo mật để thanh toán trên các ứng dụng bạn đang dùng.',
            },
            {
                icon: () => (<FcShop className='menu-unti-icon'/>),
                title: 'Marketplace',
                des: 'Mua bán trong cộng đồng cảu bạn.',
            },
        ]
    },
    {
        name: 'Cá nhân',
        content: [
            {
                icon: () => (<FcEditImage className='menu-unti-icon'/>),
                title: 'Hoạt động quảng cáo gần đây',
                des: 'Xem toàn bộ quảng cáo đã tương tác trên Facebook.',
            },
            {
                icon: () => (<FcSynchronize className='menu-unti-icon'/>),
                title: 'Kỷ niệm',
                des: 'Lướt xem ảnh, video và bài viết cũ của bạn trên Facebook.',
            },
            {
                icon: () => (<FcBookmark className='menu-unti-icon'/>),
                title: 'Đã lưu',
                des: 'Tìm bài viết, ảnh và video mà bạn đã lưu để xem sau.',
            },
            {
                icon: () => (<FcLandscape className='menu-unti-icon'/>),
                title: 'Thời tiết',
                des: 'Kiểm tra dự báo thời tiết tại địa phương và đăng ký nhận thông báo về tình hình thời tiết hàng ngày.',
            },
        ]
    },
    {
        name: 'Chuyên nghiệp',
        content: [
            {
                icon: () => (<FcBullish className='menu-unti-icon'/>),
                title: 'Trình quản lý quảng cáo',
                des: 'Tạo, quản lý và theo dõi hiệu quả quảng cáo.',
            },
            {
                icon: () => (<FcBusiness className='menu-unti-icon'/>),
                title: 'Việc làm',
                des: 'Tìm việc làm phù hợp với bạn.',
            },
        ]
    },
    {
        name: 'Nguồn lực cho cộng đồng',
        content: [
            {
                icon: () => (<FcHighPriority className='menu-unti-icon'/>),
                title: 'Ứng phó khẩn cấp',
                des: 'Tìm thông tin mới nhất về các cuộc khủng hoảng đang diễn ra tren thế giới.',
            },
            {
                icon: () => (<FcLike className='menu-unti-icon'/>),
                title: 'Chiến dịch gây quỹ',
                des: 'Quyên góp và gây quỹ cho tổ chức phi lợi nhuận và mục đích cá nhân.',
            },
        ]
    },
    {
        name: 'Sản phẩm khác của Facebook',
        content: [
            {
                icon: () => (<FcVoicePresentation className='menu-unti-icon'/>),
                title: 'Messenger',
                des: 'Chat ngay tức thì với bạn bè và những người đã kết nối.',
            },
            {
                icon: () => (<FcMms className='menu-unti-icon'/>),
                title: 'Messenger nhí',
                des: 'Cho phép bé nhắn tin với bạn thân và gia đình.',
            },
        ]
    },
]

const Content = ({content}) => {
    return(
        <div className='unti-content'>
            <div className='unti-cover-icon'>
                {content.icon()}
            </div>
            <div className='unti-cover-des-content'>
                <h3 className='unti-content-title'>
                    {content.title}
                </h3>
                <small className='unti-content-des'>
                    {content.des}
                </small>
            </div>
        </div>
    )
}

const UtiesItems = ({contents}) => {
    const untiContents = contents.map((content, index) => <Content key={index} content={content}/>)

    return (
        <div className='unties-cover'>
            {untiContents}
        </div>
    )
}


const MenuLeft = () => {
    const uties = dataMenu.map((uti, index) => (
        <div key={index} className='unti-name'>
            <h2 className='allow-select'>{uti.name}</h2>
            <UtiesItems contents={uti.content}/>
        </div>)
    )
    return(
        <section className='menu-left'>
            <div className='menu-left--margin'>
                <div className='menu-search'>
                    <FaSistrix className='menu-icon-search'/>
                    <input className='menu-input' type='text' placeholder='Tìm kiếm trong menu'></input>
                </div>
                <div className='menu-uti'>
                    {uties}
                </div>
            </div>
        </section>
    )
}

export default MenuLeft