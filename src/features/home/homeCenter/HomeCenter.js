import React from "react";
// import HomeCreateStatus from "./homeStatus/homeStatus";
import { IoAddCircleSharp, IoArrowForward } from "react-icons/io5";
import { StoryItem} from "../../../assets/genaral/elementGenaral";
import a1 from './imghomeCenter/a1.jpg'
import a2 from './imghomeCenter/a2.jpg'
import a3 from './imghomeCenter/a3.jpg'
import a4 from './imghomeCenter/a4.jpg'
import imgUser from './imghomeCenter/imguser.jpg'
import { Link } from "react-router-dom";

// {data: {imgStory, imgUser, everRead, activeOrNot, note = '', grid = ''}}

const dataStory = [
    {
        imgStory: a1,
        imgUser: a3,
        everRead: true,
        activeOrNot: true,
        note: 'Trần Minh Phương',
    },
    {
        imgStory: a2,
        imgUser: a4,
        everRead: true,
        activeOrNot: false,
        note: 'Nguyễn Văn Hạnh',
    },
    {
        imgStory: a3,
        imgUser: a1,
        everRead: false,
        activeOrNot: true,
        note: 'Nguyễn Minh Khôi',
    },
    {
        imgStory: a4,
        imgUser: a2,
        everRead: false,
        activeOrNot: true,
        note: 'Ngô Mạnh Hùng',
    },
]

// {data: {imgUser, circleimg, haveStory}, width = 40}

const HomeCenter = () => {
    const storyList = dataStory.map((item, index) => <StoryItem data={item} grid={'l-2-4'} key={index}/>)
    return(
        <section className="home-center">
            <section className="home-story stop-select">
                <div className="row g-2 position-relative">
                    <div className='element-story-hover l-2-4'>
                        {/* element tạo story */}
                        <Link to='#' className='target-border cover-story-create position-relative'>
                            <div className='cover-img-story-create'>
                                <img src={imgUser} className='img-story' alt='imgStory'></img>
                            </div>
                            <div className='box-dark'></div>
                            <div className='margin-icon-story-create position-absolute'>
                                <div className='story-create-icon-cover rounded-circle'>
                                    <IoAddCircleSharp className='story-create-icon'/>
                                </div>
                            </div>
                            <div className='story-create-text-cover'>
                                <p className='story-create-text'>Tạo tin</p>
                            </div>
                            <div className='box-dark-hover'></div>
                        </Link>
                    </div>
                    {storyList}
                    {/* chuyển hướng sang story */}
                    <div className='redirect-page-stories'>
                        <Link to='#' className='redirect-page-stories-link'>
                            <IoArrowForward />
                            <div className='redirect-page-stories-hover'></div>
                        </Link>
                    </div>
                </div>
            </section>
            {/* <HomeCreateStatus /> */}
            <section className="home-posts">

            </section>
        </section>
    )
}

export default HomeCenter