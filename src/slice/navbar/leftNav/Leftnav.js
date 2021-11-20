import React, {useRef, useState} from "react";
import {FaFacebook, FaSistrix} from 'react-icons/fa'
import {IoArrowBack} from "react-icons/io5"
import { getParent } from "../../../functionGenaral";
import HasHis from "./history_rightnav/Hashis.js";
import './leftnavSass.scss'

const Search = ({inputChangeValue, focusInput, valueInput, blurInput}) => {
    return(
        <div className='nav-search' onBlur={blurInput}>
            <FaSistrix className='icon-search' />
            <input onChange={inputChangeValue} onFocus={focusInput} onKeyPress={valueInput} className='nav-search-input' placeholder='Tìm kiếm trên Facebook'></input>
        </div>
    )
}

const Leftnav = () => {
    const [history, setHistory] = useState([])
    const [hashis, sethashis] = useState(false)
    const [changeInput, setchangeInput] = useState(false)
    const navleft = useRef(null)
    const historySearch = useRef(null)
    const root = document.querySelector('#root')

    // render ra các item history
    const valueInput = (e) => {
        if(e.which === 13) {
            sethashis(true)
            const valueInputsearch = e.target.value
            setHistory([...history, 
                {
                    des: valueInputsearch,
                }
            ])
        }
    }

    // điều kiện khi render
    let RenderHis
    if(changeInput) {
        RenderHis = () => {
            return (
                <div className='search-by-click'>
                    <div className='icon-search-history-cover'>
                        <FaSistrix className='icon-search-history'/>
                    </div>
                    <span className='search-by-click-des'>Tìm kiếm <h4>{changeInput}</h4></span>
                </div>
            )
        }
    } else if(hashis) {
        RenderHis = (props) => {
            return (
                <>
                    <HasHis deleteHisItem={props.deleteHisItem} history={history}/>
                </>
            )
        }
    } else {
        RenderHis = () => {
            return(
                <div className='nohistory'>
                    <p>Không có tìm kiếm nào gần đây</p>
                </div>
            )
        }
    }

    const inputChangeValue = (e) => {
        if(e.target.value || e.target.value.length === 0) {
            if(e.target.value.length === 0) {
                setchangeInput(false)
            } else {
                setchangeInput(e.target.value)
            }
        }
    }

    // delete history
    const deleteHisItem = (itemRemain) => {
        setHistory([...itemRemain])
        if(itemRemain.length === 0) {
            sethashis(false)
        }
    }

    // handle event
    const handleEvent = () => {
        // focus input
        const focusInput = () => {
            const iconSearch = navleft.current.querySelector('.icon-search')
            const search = navleft.current.querySelector('.nav-search')
            const iconBack = navleft.current.querySelector('.backinput--hover')
            const inputSearch = navleft.current.querySelector('.nav-search-input')
            inputSearch.select()
            navleft.current.classList.add('focus-input')
            search.style.animation = 'creWidthBox linear 0.1s forwards'
            iconSearch.style.animation =  'opacityElement linear 0.2s forwards'
            iconBack.style.animation = 'appearBackInput 0.5s ease forwards'
            setTimeout(function() {
                iconSearch.style.display = 'none'
            }, 200)
        }
        // blur input
        const blurInput = () => {
            const iconSearch = navleft.current.querySelector('.icon-search')
            iconSearch.style.display = 'block'
            iconSearch.style.animation =  'opacityElement linear 0.2s reverse forwards'
        }
        const mouseUpRoot = (e) => {
            // mouseup out from input in navleft
            const navSearch = root.querySelector('.nav-search')
            const historySearch = root.querySelector('.history-search')
            if(getParent(e.target, '.nav-search') !== navSearch) {
                if(getParent(e.target, '.history-search') !== historySearch) {
                    const search = navleft.current.querySelector('.nav-search')
                    navleft.current.classList.remove('focus-input')
                    search.style.animation = 'creWidthBox linear 0.1s reverse forwards'
                    const iconSearch = navleft.current.querySelector('.icon-search')
                    setTimeout(function() {
                        iconSearch.style.animation = 'none'
                    }, 200)
                }
            }
            root.querySelectorAll('.personal-uti-item').forEach(function(utiItem) { 
                if(getParent(e.target, '.personal-uti-item') !== utiItem) {
                    utiItem.classList.remove('uti-item-active')
                }
            })
        }
        return {focusInput, blurInput, mouseUpRoot}
    }
    
    root.addEventListener('mouseup', handleEvent().mouseUpRoot)

    // render input
    return(
        <section className='navleft' ref={navleft}>
            <div className='nav-left-cover'>
                <div className='icon-face__cover'>
                    <FaFacebook className='icon-face'/>
                </div>
                <div className='backinput--hover'>
                    <IoArrowBack className='icon-backinput' />
                </div>
                <Search inputChangeValue={inputChangeValue} focusInput={handleEvent().focusInput} valueInput={valueInput} blurInput={handleEvent().blurInput}/>
                <div className='history-search' ref={historySearch}>
                    <RenderHis deleteHisItem={deleteHisItem}/>
                </div>
            </div>
        </section>
    )
}

export default Leftnav