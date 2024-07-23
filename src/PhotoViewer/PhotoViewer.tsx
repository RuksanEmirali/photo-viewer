import React from "react";  // import React (to provide access to TSX)
import "./PhotoViewer.css"

export function PhotoViewer({photoURL}: {photoURL:string}) {    // declare and export new function called 'PhotoViewer'
    return (                
        <div className="focus-img">
            <img id="large-pic" src={photoURL} alt = "random pic"/>
        </div>
    );
}