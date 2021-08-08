import { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifApp = ({defaultCategories = []}) => {

    const [categories, setCategories] = useState(defaultCategories);

    return (
        <div>
            <h2>GifApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol> 
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifApp
