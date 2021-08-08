import React from 'react'
import Proptypes from 'prop-types'

const GifGridItem = ( {title, id,url} ) => {
    return (
        <div className="card animate__animated animate__backInLeft" key={id}>
            <img src={url} alt={title} height="300" width="300" />
        </div>
    )
}

GifGridItem.propTypes = {
    title: Proptypes.string.isRequired,
    id: Proptypes.number.isRequired,
    url: Proptypes.string.isRequired
}
export default GifGridItem

