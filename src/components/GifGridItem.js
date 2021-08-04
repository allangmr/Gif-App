import React from 'react'

const GifGridItem = ( {title, id,url} ) => {
    return (
        <div className="card animate__animated animate__backInLeft">
            <img src={url} alt={title} key={id} height="300" width="300" />
        </div>
    )
}
//                 <img src={imageGif.url} alt={imageGif.title} key={imageGif.id} height="300" width="300" />
export default GifGridItem
