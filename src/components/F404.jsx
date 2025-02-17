import React from "react";
import { Link } from "react-router-dom";

function F404_page(){

    return(
        <div>
            <h1>somthing went worng</h1>
            <Link to={"/"}>go to home page</Link>
        </div>
    )
}

export default F404_page