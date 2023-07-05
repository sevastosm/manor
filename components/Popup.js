import React, { useEffect } from 'react'

export default function Popup({ isVisible, children }) {

    useEffect(() => {
        if (isVisible)
            document.body.style.overflow = "hidden";
        else
            document.body.style.overflow = "visible";
    }, [isVisible])

    if (!isVisible) return
    (
        <div id="ex1" className="modal popup carrers-popup">
            {children}
        </div>
    )
    return (
        <div className='blocker current'>
            <div id="ex1" className="modal popup carrers-popup" style={{ display: "inline-block" }}>
                {children}
            </div>
        </div>
    )
}
