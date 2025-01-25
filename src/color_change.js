import { useState } from "react";
import "./color_change.css";

function Color(){
    const [color, setColor] = useState("");

    const handleInputChange = (e) => {
        setColor(e.target.value);
    }

    return(
        <>
            <h1 className="heading1">Color Change App</h1>
            <div className="box" style={{background: color}}>
                {color ? color :"White"}
            </div>

            <input 
                type="text"
                value={color}
                onChange={handleInputChange}
                placeholder="Enter a color: "
            />

            {/* <div className="color-box">
                <button className="color-btn">Color-Button</button>
                
            </div> */}
        </>
    );
};

export default Color;