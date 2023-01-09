import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
    render() {
        return (
            <>
            <HornedBeast title={'UniWhal'} imageUrl={"http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"} description={"A unicorn and a narwhal nuzzling their horns"} />
            <HornedBeast title={'UniWhal'} imageUrl={"http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"} description={"A unicorn and a narwhal nuzzling their horns"} />
            </>
        )
    }
}
export default Main