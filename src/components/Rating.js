import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

function Rating({ ratings }) {

    return (
        <>
            {[...Array(5)].map((_, i) => (
                // <span key={i} onClick={() => onClick(i)} style={style}>
                <span key={i}>
                    {ratings > i ? (
                        <AiFillStar fontSize="16px" />
                    ) : (
                        <AiOutlineStar fontSize="16px" />
                    )}
                </span>
            ))}


        </>
    )
}

export default Rating