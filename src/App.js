import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";

const styleCard = {
    backgroundColor: "#f0f0f0"
}



const RestaurantCard = ({
    resName, 
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
}) => {
    return (
        <div className="res-card" style={styleCard}>
            <img 
                className="res-logo" 
                src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    cloudinaryImageId
                    }
                />
            <h3>{ resName }</h3>
            <h4>{ cuisines.join(",") }</h4>
            <h4>{ lastMileTravelString } minutes</h4>
        </div>
    )
}

// no key (not acceptable)<<<<<<<<<< index key(last option) <<<<< unique key (best practice)

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);