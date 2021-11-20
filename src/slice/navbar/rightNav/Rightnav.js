import React, {useRef, useEffect} from "react";
import {IoApps, IoChatbubbleEllipsesSharp, IoNotifications, IoCaretDownOutline} from "react-icons/io5"
import Menu from "./Menu/Menu.js";
import Message from "./messager/Message.js";
import Notify from "./notify/Notify.js";
import Extra from "./extra/Extra.js";
import { getParent} from "../../../functionGenaral.js";
import './rightnavScss.scss'

const UIRightnav = {
    menu: {
      name: 'Menu',
    },
    mess: {
      name: 'Messenger',
      notedDetail: {
        option: 'Tuỳ chọn',
        extend: 'Xem tất cả trong messenger',
        meeting: 'Tạo phòng họp mặt mới',
        addChat: 'Tin nhắn mới',
      }
    },
    notify: {
      name: 'Thông báo',
    },
    person: {
      name: 'Tài khoản',
    }
}

const Rightnav = () => {
    const {menu, mess, notify, person} = UIRightnav
    const personalList = useRef(null)
    const rightnav = useRef(null)

    // handle uti
    const handleUti = () => {
        // appear detail
        const appearMore = (e) => {
            const utiItem = getParent(e.target, '.personal-uti-item')
            const utiItems = personalList.current.querySelectorAll('.personal-uti-item')
            utiItems.forEach(function(uti) {
                if(uti !== utiItem) {
                    uti.classList.remove('uti-item-active')
                }
            })
            if(!utiItem.matches('.uti-item-active')) {
                utiItem.classList.add('uti-item-active')
            } else {
                utiItem.classList.remove('uti-item-active')
            }
        }
        // press uti
        const pressDownUti = (e) => {
            const uti = e.target.closest('.personal-uti-item--hover')
            uti.style.transform = 'scale(0.9)'
            uti.style.opacity = '0.8'
        }
        const pressUpUti = (e) => {
            const uti = e.target.closest('.personal-uti-item--hover')
            uti.style.transform = 'scale(1)'
            uti.style.opacity = '1'
        }
        return {appearMore, pressDownUti, pressUpUti}
    }
    useEffect(() => {
        const personalUtiItems = personalList.current.querySelectorAll('.personal-uti-item--hover')
        personalUtiItems.forEach( element => {
            element.addEventListener('mouseup', handleUti().pressUpUti)
            element.addEventListener('mousedown', handleUti().pressDownUti)
            element.addEventListener('click', handleUti().appearMore)
        })
    })

    return(
        <section className='rightnav appear-name-uti'>
            <ul className='personal-uti-list' ref={personalList}>
                <li className='personal-uti-item menu'>
                    <div className='personal-uti-item--hover'>
                        <IoApps className='personal'/>
                        <span className='noted centernote'>{menu.name}</span>
                    </div>
                    <Menu />
                </li>
                <li className='personal-uti-item mes'>
                    <div className='personal-uti-item--hover'>
                        <IoChatbubbleEllipsesSharp className='personal'/>
                        <span className='noted centernote'>{mess.name}</span>
                    </div>
                    <Message notedDetail={mess.notedDetail}/>
                </li>
                <li className='personal-uti-item notify'>
                    <div className='personal-uti-item--hover'>
                        <IoNotifications className='personal'/>
                        <span className='noted centernote'>{notify.name}</span>
                    </div>
                    <Notify />
                </li>
                <li className='personal-uti-item extra'>
                    <div className='personal-uti-item--hover'>
                        <IoCaretDownOutline className='personal'/>
                        <span className='noted centernote'>{person.name}</span>
                    </div>
                    <Extra />
                </li>
            </ul>
        </section>
    )
}

export default Rightnav
