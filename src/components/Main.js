import React from "react";
import HornedBeast from "./HornedBeast";
import Data from "../data.json";


class Main extends React.Component {
    render() {
        return (
            <div className="myBeasts">
           {Data.map((beast, idx) => <HornedBeast 
           id={beast._id} 
           imageUrl={beast.image_url}
           title={beast.title}
           description={beast.description}
           key={idx}
            />
            )}
            </div>
        )
    }
}
export default Main