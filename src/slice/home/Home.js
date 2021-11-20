import React, { useRef } from "react";
import HomeCenter from "./homeCenter/HomeCenter";
import HomeLeft from "./homeLeft/HomeLeft";
import HomeRight from "./homeRight/Homeright";

const Home = () => {
    const homeBody = useRef(null)
    return (
        <>
            <HomeLeft />
            <HomeCenter />
            <HomeRight />
        </>
    )
}

export default Home