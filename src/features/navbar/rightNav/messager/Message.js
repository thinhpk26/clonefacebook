import React, {useRef, useState} from "react";
import {IoArrowBack, IoEllipsisHorizontal, IoExpand, IoVideocam, IoCreate} from "react-icons/io5";
import {FaSistrix} from 'react-icons/fa'
import { getParent } from'../../../../assets/genaral/functionGenaral'
import Chat from "./MainChat.js";
import WindowSearchMes from "./windowSearchMes.js";
import { useSelector } from "react-redux";

const Message = ({notedDetail: {option, extend, meeting, addChat}}) => {
    const [searching, setSearching] = useState(false)
    const messDetail = useRef(null)
    const inputMes = useRef(null)
    const inputSearch = useRef(null)
    const data = useSelector(state => state.messageReducer)

    const root = document.querySelector('#root')
    const chatMain = searching ? <WindowSearchMes /> : <Chat data={data}/>

    // handle event - các event của message
    const handleEvent = () => {
        const focusInput = () => {
            inputMes.current.focus()
            inputMes.current.select()
            const backInputMes = root.querySelector('.mess-icon-back')
            backInputMes.style.display = 'flex'
            inputSearch.current.classList.add('appear-icon-back-mes')
            inputMes.current.style.animation = 'paddinginput 0.3s ease-in forwards'
            const backInput = inputSearch.current.querySelector('.mess-icon-back')
            backInput.style.animation = 'backinputmes ease 0.3s'
            const iconSearch = inputSearch.current.querySelector('.message-search-icon')
            iconSearch.style.animation = 'disappearIconSearch 0.3s ease-in'
            setTimeout(function() {
                iconSearch.style.display = 'none'
            }, 150)
            setSearching(true)
        }

        const blurInput = () => {
            inputMes.current.style.animation = 'paddinginput 0.3s ease-in reverse forwards'
            const iconSearch = inputSearch.current.querySelector('.message-search-icon')
            iconSearch.style.animation = 'disappearIconSearch 0.3s ease-in reverse'
            setTimeout(function() {
                iconSearch.style.animation = 'none'
            }, 299)
            iconSearch.style.display = 'flex'
        }

        const outInput = (e) => {
            const searchWindowMes = messDetail.current.querySelector('.windowSearchMes')
            const backInputMes = messDetail.current.querySelector('.mess-icon-back')
            const inputSearch = messDetail.current.querySelector('.message-search-cover')
            if(getParent(e.target, '.mess-icon-back') === backInputMes || getParent(e.target, '.windowSearchMes') !== searchWindowMes || getParent(e.target, '.message-search-cover') !== inputSearch) {
                backInputMes.style.animation = 'backinputmes ease 0.3s reverse forwards'
                setSearching(false)
            }
        }

        const outSearch = (e) => {
            const backInputMes = root.querySelector('.mess-icon-back')
            const mainDetail = messDetail.current
            if(getParent(e.target, '.message-detail') !== mainDetail) {
                backInputMes.style.display = 'none'
                setSearching(false)
            }
        }
        return {focusInput, blurInput, outInput, outSearch}
    }
    root.addEventListener('mouseup', handleEvent().outSearch)

    return (
        <div className='message-detail container-scroll' onMouseUp={handleEvent().outInput} ref={messDetail}>
            <div className='duty-calc-height-scroll position-relative'>
                <header className='message-header'>
                    <div className='message-detail-margin message-head-cover'>
                        <span className='message-name'>Messenger</span>
                        <div className='message-head-right appear-name-uti'>
                            <div className='icon-three-dots-hover icon-mes-hover'>
                                <IoEllipsisHorizontal className='icon-mes-head icon-three-dots'/>
                                <span className='noted'>{option}</span>
                            </div>
                            <div className='icon-expand-hover icon-mes-hover'>
                                <IoExpand className='icon-mes-head icon-expand'/>
                                <span className='noted'>{extend}</span>
                            </div>
                            <div className='icon-videocam-hover icon-mes-hover'>
                                <IoVideocam className='icon-mes-head icon-videocam'/>
                                <span className='noted'>{meeting}</span>
                            </div>
                            <div className='icon-writing-hoevr icon-mes-hover'>
                                <IoCreate className='icon-mes-head icon-writing'/>
                                <span className='noted'>{addChat}</span>
                            </div>
                        </div>
                    </div>
                </header>
                <main className='message-main'>
                    <div className='message-detail-margin'>
                        <div className='message-search'  ref={inputSearch}>
                            <div className='backinput--hover mess-icon-back'>
                                <IoArrowBack className='icon-backinput' />
                            </div>
                            <div className='message-search-cover' onClick={handleEvent().focusInput}>
                                <FaSistrix className='message-search-icon'/>
                                <input className='message-input' type='text' placeholder='Tìm kiếm trên Messenger' onBlur={handleEvent().blurInput} ref={inputMes}></input>
                            </div>
                        </div>
                    </div>
                    {chatMain}
                </main>
                <footer className='footerMes'>
                    <span className='content-footer'>Xem tất cả trong Messenger</span>
                </footer>
            </div>
            
            <div className='scrollbar scrollbar-mess'>
                <div className='scrollbar-create'></div>
            </div>
        </div>
    )
}

export default Message

