import { shallow } from "enzyme";
import GifGrid from "../components/GifGrid";
import '@testing-library/jest-dom';
import { useFetchGifs } from "../hooks/useFetchGifs";
jest.mock('../hooks/useFetchGifs');

describe('Test of GifGrid.js', () => {
    const title  = 'Spiderman';
    test('should be a component of GifGrid', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        })
        const wrapper = shallow(<GifGrid category={title} />);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should be show items when loading the images',() => {
        const gifs = [{
            id:15,
            url:'https://google.com',
            title: 'Cualquier Cosa'
        },
        {
            id:16,
            url:'https://google.com',
            title: 'Cualquier Cosa'
        }]
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        })
        const wrapper = shallow(<GifGrid category={title} />);
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
})
