import React from "react";
import Bottom from "../../Bottom/Bottom";
import Middle from "../../Middle/Middle";
import Recentproducts from "../../components/Recentproducts"

function Home() {
    return(
        <div>
            <Recentproducts/>
            <Middle/>
            <Bottom/>
        </div>
    );
}

export default Home;