import { shallow } from "enzyme";
import '@testing-library/jest-dom'
import GifGridItem from "../components/GifGridItem";

describe('Test of GifGridItem', () => {
    const Grid = {title:'Prueba', id:1, url:'google.com'}
    const {title, id,url}  = Grid;
    const wrapper = shallow(<GifGridItem title={title} id={id} url={url} />);
    test('should be show the component', () => {
            expect(wrapper).toMatchSnapshot();
    });

    test('should be have one image with some title', () => {
        const img = wrapper.find('img');
        expect(img.props().alt).toBe(title);
        expect(img.props().src).toBe(url);
    });

    test('debe de tener animate__backInLeft', () => {
        const div = wrapper.find('div');
        expect(div.props().className).toContain('animate__backInLeft');
    });

});