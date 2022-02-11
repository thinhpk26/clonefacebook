import React, { useEffect, useRef, useState } from "react"
import {FcPlanner, FcCollaboration, FcConferenceCall, FcKindle, 
    FcWebcam, FcSteam, FcStart, FcCurrencyExchange, FcShop, FcEditImage, 
    FcSynchronize, FcBookmark, FcLandscape, FcBullish, FcBusiness, FcHighPriority, 
    FcLike, FcVoicePresentation, FcMms, FcContacts, FcCloseUpMode, 
    FcAdvertising, FcFilm, FcLikePlaceholder} from "react-icons/fc";
import {IoChevronDown, IoChevronUp} from "react-icons/io5";
import { Link } from "react-router-dom";
import {Element, ElementUser} from '../../../assets/genaral/elementGenaral'
// Khi làm backend thì sẽ lấy img từ server
import imgUser from './imghomeLeft/a1.jpg'
import imgShortcut1 from './imghomeLeft/shortcut1.jpg'
import imgShortcut2 from './imghomeLeft/shortcut2.jpg'
import imgShortcut3 from './imghomeLeft/shortcut3.jpg'
import { hoverElement } from '../../../assets/genaral/functionGenaral';
import './homeLeftScss.scss'

// user là server truyền về - ko cần dùng redux
const userInfo = {
    imgUser: imgUser,
    circleimg: true,
    active: false,
    note: 'Nguyễn Văn Thịnh',
}
// trạng thái là redux truyền về
const stateFeatures = {
    'Bạn bè': false,
    'Nhóm': false,
    'Watch': 3,
    'Đã lưu': false,
    'Trình quản lý quảng cáo': false,
    'Marketplace': false,
    'Kỷ niệm': false,
    'Chiến dịch gây quỹ': false,
    'Chơi game': 9,
    'Facebook Pay': false,
    'Gần đây nhất': false,
    'Hoạt động quảng cáo gần đây': false,
    'Messenger': false,
    'Messenger nhí': false,
    'Sự kiện': false,
    'Sức khỏe cảm xúc': false,
    'Thời tiết': false,
    'Trang': false,
    'Trung tâm quảng cáo': false,
    'Ứng phó khẩn cấp': false,
    'Video chơi game': 11,
    'Video trực tiếp': false,
    'Việc làm': false,
    'Yêu thích': false,
}
// biểu tượng là có sẵn
const symbolFeatures = {
    'Bạn bè': <FcCollaboration className="symbol-icon-home-left" />,
    'Nhóm': <FcConferenceCall className="symbol-icon-home-left" />,
    'Watch': <FcStart className="symbol-icon-home-left" />,
    'Đã lưu': <FcBookmark className="symbol-icon-home-left" />,
    'Trình quản lý quảng cáo': <FcBullish className="symbol-icon-home-left" />,
    'Marketplace': <FcShop className="symbol-icon-home-left" />,
    'Kỷ niệm': <FcSynchronize className="symbol-icon-home-left" />,
    'Chiến dịch gây quỹ': <FcLike className="symbol-icon-home-left" />,
    'Chơi game': <FcSteam className="symbol-icon-home-left" />,
    'Facebook Pay': <FcCurrencyExchange className="symbol-icon-home-left" />,
    'Gần đây nhất': <FcContacts className="symbol-icon-home-left" />,
    'Hoạt động quảng cáo gần đây': <FcEditImage className="symbol-icon-home-left" />,
    'Messenger': <FcVoicePresentation className="symbol-icon-home-left" />,
    'Messenger nhí': <FcMms className="symbol-icon-home-left" />,
    'Sự kiện': <FcPlanner className="symbol-icon-home-left" />,
    'Sức khỏe cảm xúc': <FcCloseUpMode className="symbol-icon-home-left" />,
    'Thời tiết': <FcLandscape className="symbol-icon-home-left" />,
    'Trang': <FcKindle className="symbol-icon-home-left" />,
    'Trung tâm quảng cáo': <FcAdvertising className="symbol-icon-home-left" />,
    'Ứng phó khẩn cấp': <FcHighPriority className="symbol-icon-home-left" />,
    'Video chơi game': <FcWebcam className="symbol-icon-home-left" />,
    'Video trực tiếp': <FcFilm className="symbol-icon-home-left" />,
    'Việc làm': <FcBusiness className="symbol-icon-home-left" />,
    'Yêu thích': <FcLikePlaceholder className="symbol-icon-home-left" />,
}
// tiêu đề là server truyền về - ko cần dùng redux
const noteFeatures = {
    'Bạn bè':{
                noteMain: 'Bạn bè',
                noteSpan: stateFeatures['Bạn bè'],
            },
    'Nhóm': {
                noteMain: 'Nhóm',
                noteSpan: stateFeatures['Nhóm'],
            },
    'Watch': {
                noteMain: 'Watch',
                noteSpan: stateFeatures['Watch'],
            },
    'Đã lưu': {
                noteMain: 'Đã lưu',
                noteSpan: stateFeatures['Đã lưu'],
            },
    'Trình quản lý quảng cáo': {
                noteMain: 'Trình quản lý quảng cáo',
                noteSpan: stateFeatures['Trình quản lý quảng cáo'],
            },
    'Marketplace': {
                noteMain: 'Marketplace',
                noteSpan: stateFeatures['Marketplace'],
            },
    'Kỷ niệm': {
                noteMain: 'Kỷ niệm',
                noteSpan: stateFeatures['Kỷ niệm'],
            },
    'Chiến dịch gây quỹ': {
                noteMain: 'Chiến dịch gây quỹ',
                noteSpan: stateFeatures['Chiến dịch gây quỹ'],
            },
    'Chơi game': {
                noteMain: 'Chơi game',
                noteSpan: stateFeatures['Chơi game'],
            },
    'Facebook Pay': {
                noteMain: 'Facebook Pay',
                noteSpan: stateFeatures['Facebook Pay'],
            },
    'Gần đây nhất': {
                noteMain: 'Gần đây nhất',
                noteSpan: stateFeatures['Gần đây nhất'],
            },
    'Hoạt động quảng cáo gần đây': {
                noteMain: 'Hoạt động quảng cáo gần đây',
                noteSpan: stateFeatures['Hoạt động quảng cáo gần đây'],
            },
    'Messenger': {
                noteMain: 'Messenger',
                noteSpan: stateFeatures['Messenger'],
            },
    'Messenger nhí': {
                noteMain: 'Messenger nhí',
                noteSpan: stateFeatures['Messenger nhí'],
            },
    'Sự kiện': {
                noteMain: 'Sự kiện',
                noteSpan: stateFeatures['Sự kiện'],
            },
    'Sức khỏe cảm xúc': {
                noteMain: 'Sức khỏe cảm xúc',
                noteSpan: stateFeatures['Sức khỏe cảm xúc'],
            },
    'Thời tiết': {
                noteMain: 'Thời tiết',
                noteSpan: stateFeatures['Thời tiết'],
            },
    'Trang': {
                noteMain: 'Trang',
                noteSpan: stateFeatures['Trang'],
            },
    'Trung tâm quảng cáo': {
                noteMain: 'Bạn bè',
                noteSpan: stateFeatures['Bạn bè'],
            },
    'Ứng phó khẩn cấp': {
                noteMain: 'Trung tâm quảng cáo',
                noteSpan: stateFeatures['Trung tâm quảng cáo'],
            },
    'Video chơi game': {
                noteMain: 'Video chơi game',
                noteSpan: stateFeatures['Video chơi game'],
            },
    'Video trực tiếp': {
                noteMain: 'Video trực tiếp',
                noteSpan: stateFeatures['Video trực tiếp'],
            },
    'Việc làm': {
                noteMain: 'Việc làm',
                noteSpan: stateFeatures['Việc làm'],
            },
    'Yêu thích': {
                noteMain: 'Yêu thích',
                noteSpan: stateFeatures['Yêu thích'],
            },
}
// function tạo data để tạo hình thái data rồi render
const functionsFeature = (number) => {
    let features = []
    if(!number) {
        for(let key of Object.keys(noteFeatures))
            if(noteFeatures.hasOwnProperty(key)) {
                const object = noteFeatures[key].noteMain
                const feature = {
                    symbol: symbolFeatures[object],
                    note: noteFeatures[object],
                }
                features.push(feature)
            }
        return features
    }
    else {
        let count = 0;
        for(let key of Object.keys(noteFeatures)) {
            count++
            if(count <= number && noteFeatures.hasOwnProperty(key)) {
                const object = noteFeatures[key].noteMain
                const feature = {
                    symbol: symbolFeatures[object],
                    note: noteFeatures[object],
                }
                features.push(feature)
            }
            else return features
        }
    }
}
// props element thông thường cần truyền => {data: {symbol, note: {noteMain, noteSpan}, circleSymbol = false, iconEnd = false}, link = ''} ----- nếu không có thì ko cần truyền
// props element là user cần truyền => {data: {imgUser, circleimg, activeOrNot, note}} ----- nếu không có thì ko cần truyền
// lối tắt là redux truyền về - vì nó có thể sửa 
const dataShortcuts = [
    {
        imgUser: imgShortcut1,
        note: 'Không phí tiền mạng',
    },
    {
        imgUser: imgShortcut2,
        note: 'Thổ dân cục súc',
    },
    {
        imgUser: imgShortcut3,
        note: 'Captivators 17+',
    },
]

const HomeLeft = () => {
    const [extra, setextra] = useState(false)
    const homeBodyLeft = useRef(null)
    const extraElement = useRef(null)
    useEffect(() => {
        const root = document.getElementById('root')
        // tạo ra event cho tất cả các element có chung class
        root.querySelectorAll('.element-hover').forEach(element => {
            const buttonMore = element.querySelector('.button-more')
            const event = hoverElement(element, buttonMore)
            const hoverElementItem = event.hoverElementItem
            const hoverOutElementItem = event.hoverOutElementItem
            element.addEventListener('mouseleave', hoverOutElementItem)
            element.addEventListener('mouseover', hoverElementItem)
            element.addEventListener('click', hoverOutElementItem)
        })
    }, [extra])
    // render features
    let functions
    if(extra)
        functions = functionsFeature().map((feature, index) => <Element key={index} data={feature} link='/'/>)
    else
        // đối số của function chính là số lượng feature muốn render ra
        functions = functionsFeature(8).map((feature, index) => <Element key={index} data={feature} link='/'/>)

    // render lối tắt
    const shortcuts = dataShortcuts.map((value, index) => <ElementUser key={index} data={value}/>)

    // event mở rộng feature
    const extraFuntions = () => {
        if(!extraElement.current.matches('.extra')) {
            extraElement.current.classList.add('extra')
            setextra(true)
        }
        else {
            extraElement.current.classList.remove('extra')
            setextra(false)
            homeBodyLeft.current.scrollTop = 0
        }
    }

    // scroll bar dành riêng cho home left
    useEffect(() => {
        const root = document.querySelector('#root')
        const homeBodyLeftElement = homeBodyLeft.current
        const elementToCalcHeight = homeBodyLeftElement.querySelector('.duty-calc-height-scroll')
        const scrollBar = homeBodyLeftElement.querySelector('.scrollbar')
        const scrollBarThumb = homeBodyLeftElement.querySelector('.scrollbar-create')
        const heightOfscrollbarThumb = Math.pow(scrollBar.offsetHeight - 16, 2) / elementToCalcHeight.offsetHeight
        scrollBarThumb.style.height = heightOfscrollbarThumb + 'px'
        const spaceLeaveScrollBar = scrollBar.offsetHeight - heightOfscrollbarThumb
        scrollBarThumb.addEventListener('mousedown', (e) => {
            scrollBarThumb.style.backgroundColor = 'rgba(225, 225, 225, 0.5)'
            const coordMouseDown = e.pageY
            root.addEventListener('mousemove', moveScrollBar)
            root.addEventListener('mouseup', () => {
                scrollBarThumb.style.backgroundColor = 'rgba(225, 225, 225, 0.3)'
                root.removeEventListener('mousemove', moveScrollBar)
            })
            const oldScrollBarTop = scrollBarThumb.offsetTop
            function moveScrollBar(event) {
                const clientMouseY = event.pageY;
                if(scrollBarThumb.offsetTop >= 4 && scrollBarThumb.offsetTop <= spaceLeaveScrollBar) {
                    const ratio = elementToCalcHeight.offsetHeight / scrollBar.offsetHeight
                    if(clientMouseY - coordMouseDown >= 4) {
                        scrollBarThumb.style.top = oldScrollBarTop + (clientMouseY - coordMouseDown) + 'px'
                        homeBodyLeftElement.scrollTop = scrollBarThumb.offsetTop * ratio
                    } else if(clientMouseY - coordMouseDown < -4) {
                        scrollBarThumb.style.top = oldScrollBarTop - (coordMouseDown - clientMouseY) + 'px'
                        homeBodyLeftElement.scrollTop = scrollBarThumb.offsetTop * ratio
                    }
                    if(scrollBarThumb.offsetTop < 4) scrollBarThumb.style.top = '4px'
                    if(scrollBarThumb.offsetTop > spaceLeaveScrollBar - 4) scrollBarThumb.style.top = spaceLeaveScrollBar - 4 +'px'
                }
            }
        })
        homeBodyLeftElement.addEventListener('scroll', (e) => {
            const scrollTop = e.target.scrollTop
            scrollBar.style.top = scrollTop + 'px'
            const ratio = elementToCalcHeight.offsetHeight / scrollBar.offsetHeight
            scrollBarThumb.style.top = e.target.scrollTop / ratio + 'px'
            if(scrollBarThumb.offsetTop < 4) scrollBarThumb.style.top = '4px'
            if(scrollBarThumb.offsetTop > spaceLeaveScrollBar) scrollBarThumb.style.top = spaceLeaveScrollBar - 4 +'px'
        })
        scrollBar.addEventListener('mousedown', (e) => {
            if(e.target.matches('.scrollbar')) {
                const clientY = e.clientY - 58
                if(clientY > scrollBarThumb.offsetTop) {
                    const scrollingThumb = setInterval(() => {
                        const ratio = elementToCalcHeight.offsetHeight / scrollBar.offsetHeight
                        scrollBarThumb.style.top = scrollBarThumb.offsetTop + 1 + 'px'
                        homeBodyLeftElement.scrollTop = scrollBarThumb.offsetTop * ratio
    
                    }, 5)
                    scrollBar.addEventListener('mouseup', () => {
                        clearInterval(scrollingThumb)
                    })
                    scrollBar.addEventListener('mouseleave', () => {
                        clearInterval(scrollingThumb)
                    })
                } else {
                    const scrollingThumb = setInterval(() => {
                        const ratio = elementToCalcHeight.offsetHeight / scrollBar.offsetHeight
                        scrollBarThumb.style.top = scrollBarThumb.offsetTop - 1 + 'px'
                        homeBodyLeftElement.scrollTop = scrollBarThumb.offsetTop * ratio
    
                    }, 5)
                    scrollBar.addEventListener('mouseup', () => {
                        clearInterval(scrollingThumb)
                    })
                    scrollBar.addEventListener('mouseleave', () => {
                        clearInterval(scrollingThumb)
                    })
                }
            }
        })
    })

    return(
        <section className="home-body-left container-scroll stop-select" ref={homeBodyLeft}>
            <div className="duty-calc-height-scroll">
                <ElementUser data={userInfo}/>
                <div className="home-left-feature">
                    {functions}
                </div>
                <div className="extra-or-narrow mb-2" onClick={extraFuntions} ref={extraElement}>
                    <Element data={{symbol: <IoChevronDown />, note: {noteMain: 'Xem thêm'}, circleSymbol: true}} className={'body-left-narrow'} />
                    <Element data={{symbol: <IoChevronUp />, note: {noteMain: 'Thu gọn'}, circleSymbol: true}} className={'body-left-ex'}/>
                </div>
                <div className='line-seperate'></div>
                <div className='shortcuts-list'>
                    <header className='d-flex justify-content-between align-items-center mx-3 my-1 allow-select'>
                        <p className='fs-title fw-bold my-2 '>Lối tắt của bạn</p>
                        <button className='btn-edit-shortcut btn'>Chỉnh sửa</button>
                    </header>
                    {shortcuts}
                </div>
                <div className='license mx-3 my-2'>
                    <Link to='/' className='inline-block text-color-read text-decoration-none'><small>Quyền riêng tư</small></Link>&nbsp;
                    <Link to='/' className='inline-block text-color-read text-decoration-none'><small>.&nbsp;Điều khoản</small></Link>&nbsp;
                    <Link to='/' className='inline-block text-color-read text-decoration-none'><small>.&nbsp;Quảng cáo</small></Link>&nbsp;
                    <Link to='/' className='inline-block text-color-read text-decoration-none'><small>.&nbsp;Lựa chọn quảng cáo</small></Link>&nbsp;
                    <Link to='/' className='inline-block text-color-read text-decoration-none'><small>.&nbsp;Cookie</small></Link>&nbsp;
                </div>
            </div>
            <div className='scrollbar scrollbar-homeleft'>
                <div className='scrollbar-create'></div>
            </div>
        </section>
    )
}

export default HomeLeft