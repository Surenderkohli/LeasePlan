import React from 'react'



const Title = ({children, text, className}) => {
    return ( <>
            <div className={className}>
                {children}
                {text}
            </div>
        </>
    )
}

const Subhead = ({children}) => {
    return (
        <>
            <div>
             {children}
            </div>
        </>
    )
}


Title.Subhead = Subhead;

export default Title