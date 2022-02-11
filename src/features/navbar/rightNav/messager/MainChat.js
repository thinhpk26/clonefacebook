import React from "react";
import {IoEllipsisHorizontal, IoRadioButtonOn, IoNotificationsOff, IoCheckmarkCircleOutline, IoCheckmarkCircle, IoEllipse} from "react-icons/io5";
import { useDispatch } from "react-redux";
import { messageSlice } from "./messageSlice";
const decreaseWords = (peopleSend, content) => {
    const context = `${peopleSend}: ${content}`
    if(context.length > 30) {
        return context.slice(0, 30) + '...'
    } else {
        return context
    }
}

// trạng thái chat
const StateChat = ({imgMess, state, isRead}) => {
    if(isRead) 
        switch(state) {
            case 'notifyOff':
                return <IoNotificationsOff className='icon-state'/>
            case 'seen':
                return <></>
            case 'friendSeen':
                return <img src={imgMess} className='friendseen-icon' alt=''></img>
            case 'sent':
                return <IoCheckmarkCircleOutline className='icon-state'/>
            case 'sendSuccess':
                return <IoCheckmarkCircle className='icon-state'/>
            default:
                return <></>
        }
    else 
        return <IoEllipse className='state-ever-read'/>
}

// Danh sách các đoạn chat
const ChatItem = ({chatItem: {
    imgMess, 
    desMess: {
        active,
        nameMess,
        personSend,
        contentMess,
        timeMess,
        state,
        isRead,
}},
    element,
}) => {
    const actions = messageSlice.actions
    const dispatch = useDispatch()

    const styleEverRead = {
        color: '#2e89ff',
        fontWeight: '900', 
    }

    const styleActive = {
        backgroundColor: '#1bb200',
        width: '14px',
        height: '14px',
        position: 'absolute',
        borderRadius: '50%',
        border: '2px solid var(--bg-body)',
        top: '41px',
        left: '41px',
    }

    let content, Chatname
    const desMessif = decreaseWords(personSend, contentMess)
    if(isRead) {
        Chatname = () => <span className='chat-name'>{nameMess}</span>
        content = personSend === '' ? <small className='chat-content'>{contentMess} </small> : <small className='chat-content'>{desMessif}</small>
    } else {
        Chatname = () => <span style={styleEverRead} className='chat-name'>{nameMess}</span>
        content = personSend === '' ? <small className='chat-content'>{contentMess} </small> : <small style={styleEverRead} className='chat-content'>{desMessif}</small>
    }

    const activeChat = active ? <div style={styleActive} className='icon-active'></div> : <></>

    const stateChat = <StateChat ingMess={imgMess} state={state} isRead={isRead}/>

    return (
        <li className='chat-item element-hover' onClick={() => {dispatch(actions.isRead({isRead, element}))}}>
            <div className='element-hover--margin'>
                <div className='div-cover'>
                    <div className='chat-img-cover'>
                        <div className='chat-img-around'>
                            <img className='chat-img' src={imgMess} alt=''></img>
                        </div>
                        {activeChat}
                    </div>
                    <div className='chat-des'>
                        <Chatname />
                        <div className='chat-des-cover'> 
                            {content}
                            <small className='chat-time'>
                                <IoRadioButtonOn className='chat-time-dot'/>
                                {timeMess}
                            </small>
                        </div>
                    </div>
                    <div className='chat-state-cover'>
                        {stateChat}
                    </div>
                    <div className='div-button-more'>
                        <span className='button-more'>
                            <IoEllipsisHorizontal className='button-more-icon'/>
                        </span>
                    </div>
                </div>
            </div>
        </li>
    )
}

const Chat = ({data}) => {
    const chatItems = data.map((chatItem, index) => <ChatItem key={index} chatItem={chatItem} element={index}/>)

    return (
        <div className='message-chats'>
            <ul className='chat-list'>
                {chatItems}
            </ul>
        </div>
    )
}

export default Chat