import React from "react";
import HomeCenter from "./homeCenter/HomeCenter";
import HomeLeft from "./homeLeft/HomeLeft";
import HomeRight from "./homeRight/Homeright";

const Home = () => {
    return (
        <>
            <HomeLeft />
            <HomeCenter />
            <HomeRight />
        </>
    )
}

export default Home