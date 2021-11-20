import { Link } from "react-router-dom"
// get element parent
function getParent(element, parent) {
    while(element.parentElement) {
        if(element.parentElement.matches(parent)) {
            return element.parentElement
        }
        element = element.parentElement
    }
}

// scroll element
function elementScroll (element, scrollbar, widthAppear) {
    const scrollMess = () => {
        const scrollBar = element.querySelector(scrollbar)
        scrollBar.style.marginTop = element.scrollTop + 'px'
        scrollBar.scrollTop = element.scrollTop
    }

    const dragScroll = () => {
        const scrollBar = element.querySelector(scrollbar)
        element.scrollTop = scrollBar.scrollTop
        scrollBar.style.marginTop = element.scrollTop + 'px'
    }

    return function dragScrollAppear(e) {
        const scrollBar = element.querySelector(scrollbar)
        if(e.offsetX >= widthAppear[0] && e.offsetX <= widthAppear[1]) {
            scrollBar.style.zIndex = 0;
            scrollBar.addEventListener('scroll', dragScroll)
            element.removeEventListener('scroll', scrollMess)
        }
    
        if (e.offsetX < widthAppear[0]) {
            scrollBar.style.zIndex = -1;
            scrollBar.removeEventListener('scroll', dragScroll)
            element.addEventListener('scroll', scrollMess)
        }
    }
}

function disOrAppearScroll(element) {
    const appearScroll = () => {
        const scrollbar = element.querySelector('.scrollbar')
        scrollbar.style.overflow = 'auto'
        // set chiều cao cho scrollbar
        const elementChildren = element.childNodes;
        let heightElement
        for(let elementChild of elementChildren) {
            if(elementChild.getAttribute('class') === 'duty-calc-height-scroll')
                heightElement = elementChild.offsetHeight + 'px'
        }
        const scrollbarCreate = scrollbar.querySelector('.scrollbar-create')
        scrollbarCreate.style.height = heightElement
    }
    const disAppearScroll = () => {
        const scrollbar = element.querySelector('.scrollbar')
        scrollbar.style.overflow = 'hidden'
    }
    return {appearScroll, disAppearScroll}
}

// hover uti - để hiện detail
function hoverUti(nav) {
    return function() {
        const notes = nav.querySelectorAll('span.noted')
        notes.forEach(function(note) {
            const elementHover = note.parentElement
            elementHover.addEventListener('mouseenter', function() {
                const setTimeAppear = setTimeout(() => {
                    elementHover.classList.add('noting')
                }, 500);
                elementHover.addEventListener('mouseleave',function() {
                    clearTimeout(setTimeAppear)
                })
                elementHover.addEventListener('click', function() {
                    clearTimeout(setTimeAppear)
                })
            })
            elementHover.addEventListener('mouseleave', function() {
                elementHover.classList.remove('noting')
            })
            elementHover.addEventListener('click', function() {
                elementHover.classList.remove('noting')
            })
        })
    }
}

// hover element - hover các phần tử bên trong 1 mảng
const hoverElement = (element, buttonMore) => {
    const hoverElementItem = () => {
        element.style.backgroundColor = 'rgba(225, 225, 225, 0.2)'
        if(buttonMore) buttonMore.style.display = 'flex'
    }
    const hoverOutElementItem = () => {
        element.style.backgroundColor = 'transparent'
        if(buttonMore) buttonMore.style.display = 'none'
    }
    const hoverButtonMore = () => {
        buttonMore.style.backgroundColor = '#626262'
        element.style.backgroundColor = 'transparent'
    }
    const hoverOutButtonMore = () => {
        buttonMore.style.backgroundColor = '#404040'
        element.style.backgroundColor = 'rgba(225, 225, 225, 0.2)'
    }
    return {hoverElementItem, hoverOutElementItem, hoverButtonMore, hoverOutButtonMore}
}

// tạo symbol riêng lẻ
const Symbol = ({data: {circleSymbol, symbol}}) => {
    if(circleSymbol)
        return <div className='cover-symbol'>{symbol}</div>
    else
        return <div className='cover-symbol-no-rounded'>{symbol}</div>
}

// function tạo ra element gồm biểu thượng và thông tin
const Element = ({data: {symbol, note: {noteMain = '', noteSpan = ''}, circleSymbol = false, iconEnd = ''}, link = '', className = ''}) => {
    const DetailElement = () => {
        if(link !== '')
            return(
                <Link to={link} className='element-link' >
                    <Symbol data={{circleSymbol, symbol}}/>
                    <div className="element-note d-flex flex-column justify-content-center mx-2 flex-grow-1">
                        <p className='fw-bold my-0 '>{noteMain}</p>
                        <small className='text-color-read'>{noteSpan}</small>
                    </div>
                    <div className='element-icon-end'>
                        {iconEnd}
                    </div>
                </Link>
            )
        else
            return(
                <div className='div-cover'>
                    <Symbol data={{circleSymbol, symbol}}/>
                    <div className="element-note d-flex flex-column justify-content-center mx-2 flex-grow-1">
                        <p className='fw-bold my-0 '>{noteMain}</p>
                        <small className='text-color-read'>{noteSpan}</small>
                    </div>
                    <div className='element-icon-end'>
                        {iconEnd}
                    </div>
                </div>
            )
    }
    return(
        <div className={`element-hover text-color-pr ${className}`}>
            <div className="element-hover--margin">
                <DetailElement />
            </div>
        </div>
    )
}


// tạo avatar người dùng
const ImgUser = ({data: {imgUser, circleimg, haveStory}, width = 40}) => {
    const styleStory = haveStory === 0 ? {backgroundColor: '#2e89ff'} : {backgroundColor: '#ccc'}
    const styleNoStory = {
        width: width + 'px'
    }
    const styleHaveStory = {
        width: width - 6 + 'px',
    }
    return(
        <div className={circleimg ? 'cover-img-circle' : 'cover-img-square'}>
            <div className={haveStory !== undefined ? 'border-story-out d-flex justify-content-center align-items-center overflow-hidden' : ''} style={styleStory}>
                <div className={haveStory !== undefined ? 'border-story-in d-flex justify-content-center align-items-center overflow-hidden' : 'd-flex justify-content-center align-items-center'}>
                    <img src={imgUser} alt='avatar' className='avatar-img' style={haveStory ? styleHaveStory: styleNoStory}></img> 
                </div>
            </div>
        </div>
    )
}
// user có đang hoạt động hay không
const stateActive = (activeOrNot) => activeOrNot ? <div className='icon-active' style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid var(--bg-body)',
                backgroundColor: '#1bb200',
                position: 'absolute',
                right: '-2px',
                bottom: '1px'}}></div> : <></>

// function tạo element là những user 
const ElementUser = ({data: {imgUser, circleimg, activeOrNot, haveStory, note = '', link = ''}}) => {
    return(
        <div className="element-hover text-color-pr">
            <div className="element-hover--margin">
                <Link to={link} className='element-link'>
                    <div className="section-avatar position-relative me-2">
                        <ImgUser data={{imgUser, circleimg, haveStory}}/>
                        {stateActive(activeOrNot)}
                    </div>
                    <div className="element-note d-flex flex-column justify-content-center mx-2 flex-grow-1">
                        <p className='fw-bold my-0 '>{note}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

// function tạo story
const storyItem = ({data: {}}) => {
    return(
        <></>
    )
}

export { elementScroll, getParent, hoverUti, disOrAppearScroll, hoverElement, Element, ElementUser, Symbol, ImgUser, stateActive }