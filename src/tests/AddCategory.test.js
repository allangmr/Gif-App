import { shallow } from "enzyme";
import AddCategory from "../components/AddCategory";

describe('Test in the AddCategory.js', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })
    test('should be show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change of input', () => {
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', {target: { value }});
        expect(wrapper.find('p').text().trim()).toBe('Hola Mundo');

    });

    test('should not send the information on submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault: () => {}});
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should be call the setCategories and clean the input text', () => {
        // 1. Simular el inputChange
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', {target: { value }});
        expect(wrapper.find('p').text().trim()).toBe('Hola Mundo');
        // 2. Simular el submit
        wrapper.find('form').simulate('submit', {preventDefault: () => {}});
        // 3. setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        //4. El valor del input debe estar en ''
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});