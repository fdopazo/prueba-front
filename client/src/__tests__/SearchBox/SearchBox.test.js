
import {configure, shallow} from "enzyme"

import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import SearchBox from '../../components/SearchBox/SearchBox';

const mockStore = configureMockStore();
const store = mockStore({});

configure({adapter: new Adapter()})

describe("SearchBox testing", () => {
    let wrapper;

    // Initialize wrapper
    beforeEach(() => {
        wrapper = shallow(<SearchBox.WrappedComponent store={store} />)
    })

    // placeholder test
    test('Correct placeholder', () => {
        const input = wrapper.find('input');
        expect(input.props().placeholder).toContain('Nunca dejes de buscar');

    });

    // First value of input
    test('First input value', () => {
        const input = wrapper.find('input');
        expect(input.props().value).toContain('');

    });

    // On submit search
    test('On submit test', () => {
        const input = wrapper.find('input');
        expect(input.props().value).toContain('');
        const fakeEvent = {preventDefault: () => console.log('preventDefault')};
        input.simulate('submit', fakeEvent);
        expect(input.length).toBe(1);

    });



})