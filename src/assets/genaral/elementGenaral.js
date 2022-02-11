import { Link } from "react-router-dom"
// tạo symbol riêng lẻ
const Symbol = ({data: {circleSymbol, symbol, width = 36}}) => {
    const style = {
        width: width + 'px',
        height: width + 'px',
    }
    if(circleSymbol)
        return <div className='cover-symbol' style={style}>{symbol}</div>
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
        <div className={circleimg ? 'cover-img-circle d-flex justify-content-center align-items-center' : 'cover-img-square'}>
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
                right: '-1px',
                bottom: '2px'}}></div> : <></>

// function tạo element là những user 
const ElementUser = ({data: {imgUser, circleimg, activeOrNot, haveStory, note = '', link = ''}}) => {
    return(
        <div className="element-hover text-color-pr">
            <div className="element-hover--margin">
                <Link to={link} className='element-link'>
                    <div className="section-avatar position-relative">
                        <ImgUser data={{imgUser, circleimg, haveStory}}/>
                        {stateActive(activeOrNot)}
                    </div>
                    <div className="element-note d-flex flex-column justify-content-center ms-3 me-2 flex-grow-1">
                        <p className='fw-bold my-0 '>{note}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

// function tạo story
const StoryItem = ({data: {imgStory, imgUser, everRead, activeOrNot, note = ''}, grid = ''}) => {
    const circleimg = true
    const haveStory = everRead ? 1 : 0
    return(
        <div className={`element-story-hover ${grid}`}>
            <Link to='#' className='target-border cover-story position-relative'>
                <div className='cover-img-story'>
                    <img src={imgStory} className='img-story' alt='imgStory'></img>
                </div>
                <div className='box-dark'></div>
                <div className='section-avatar-cover position-absolute'>
                    <div className="section-avatar position-relative">
                        <ImgUser data={{imgUser, circleimg, haveStory}}/>
                        {stateActive(activeOrNot)}
                    </div>
                </div>
                <p className='name-user position-absolute'>{note}</p>
                <div className='box-dark-hover'></div>
            </Link>
        </div>
    )
}

export { Symbol, Element, ImgUser, stateActive, ElementUser, StoryItem}