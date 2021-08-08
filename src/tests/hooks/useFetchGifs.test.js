import { useFetchGifs } from "../../hooks/useFetchGifs"
import {renderHook} from '@testing-library/react-hooks'

describe('Test of Hook useFetchGifs', () => {
    test('should be return the initial state', () => {
        const {result} = renderHook(()=>useFetchGifs('Pokemon') )
        const {data, loading} = result.current;


        expect(data).toEqual([]);
        expect(loading).toEqual(true);
    })

    test('should return img and loading in false', async() => {
        const {result,waitForNextUpdate} = renderHook(()=>useFetchGifs('Pokemon') )
        const {data, loading} = result.current;
        expect(data).toEqual([]);
        expect(loading).toEqual(true);
    }) 
    
})
