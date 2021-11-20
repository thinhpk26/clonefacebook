import React from "react";
import { IoEllipse, IoEllipsisHorizontal, IoPeopleCircle, IoPersonCircle, IoImageOutline, IoChatbubble, IoTv  } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { notifyActions } from "./notifySlice";

const IsRead = ({isRead}) => {
    if(isRead) return <></>
    else return <IoEllipse className='state-ever-read'/>
}
const desIsRead = (isRead) => {
    if(isRead) return 'notify-item__des text-color-read'
    else return 'notify-item__des text-color-input'
}


// function lấy biểu tượng
const Relative = ({relative}) => {
    switch(relative) {
        case 'group': return <IoPeopleCircle className='relative' />
        case 'person': return <IoPersonCircle className='relative' />
        case 'img': return <IoImageOutline className='relative' />
        case 'chat': return <IoChatbubble className='relative' />
        case 'watch': return <IoTv className='relative' />
        default: return <></>
    }
}

const NotifyItem = ({item: {img, relativeSocial, des:{user, action, relative, content}, isRead},
    element: {element, section},
}) => {
    const dispatch = useDispatch()
    return(
        <div className='notify-item element-hover' onClick={() => dispatch(notifyActions.isRead({isRead, element, section}))}>
            <div className='element-hover--margin'>
                <div className='div-cover'>
                    <div className='notify-item__img-cover position-relative me-2'>
                        <div className='cover-img rounded-circle overflow-hidden'>
                            <img className='notify-item__img' src={img} alt='ảnh notify'></img>
                        </div>
                        <span className='relativeIcon text-color-pr position-absolute bg-blue-primary d-flex justify-content-center align-items-center rounded-circle'>
                            <Relative relative={relativeSocial}/>
                        </span>
                    </div>
                    <div className={desIsRead(isRead)}>
                        <p className='fw-bold d-inline'>{user}</p>&nbsp;
                        <p className='d-inline'>{action}</p>&nbsp;
                        <p className='fw-bold d-inline'>{relative}</p>&nbsp;
                        <p className='d-inline'>{content}</p>
                    </div>
                    <div className='div-button-more'>
                        <span className='button-more'>
                            <IoEllipsisHorizontal className='button-more-icon'/>
                        </span>
                    </div>
                    <div className='notify-item__isRead'>
                        <IsRead isRead={isRead} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotifyItem