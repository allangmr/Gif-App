import { shallow } from "enzyme";
import GifApp from "../components/GifApp";

describe('Test of GifApp.js', () => {
    test('should be a component snapshot', () => {
        const wrapper = shallow(<GifApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should be show a category list', () =>{
        const categories = ['Developer', 'Happy'];
        const wrapper = shallow(<GifApp  defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
})
