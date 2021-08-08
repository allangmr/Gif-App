import { useFetchGifs } from "../../hooks/useFetchGifs"
import {renderHook} from '@testing-library/react-hooks'

describe('Test of Hook useFetchGifs', () => {
    test('should be return the initial state', async() => {

        const {result,waitForNextUpdate} = renderHook(()=>useFetchGifs('Pokemon') )
        const {data, loading} = result.current;
        await waitForNextUpdate({timeout:1500});

        expect(data).toEqual([]);
        expect(loading).toEqual(true);
    })

    test('should return img and loading in false', async() => {
        const {result,waitForNextUpdate} = renderHook(()=>useFetchGifs('One Punch') )
        await waitForNextUpdate({timeout:1500});
        const {data, loading} = result.current;
        expect(data.length).toBe(12);
        expect(loading).toEqual(false);
    }) 
    
})
