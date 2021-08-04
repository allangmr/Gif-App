import GifGridItem from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs"

const GifGrid = ({category}) => {
    const {loading, data:images} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__backInLeft">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                    {images.map((img) => (
                        <GifGridItem {...img} key={img.id} />
                    ))}
            </div>
        </>
    )
}


export default GifGrid
