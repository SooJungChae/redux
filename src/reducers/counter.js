function counter(state, action) {

    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        default:
            return state;
    }
}

import expect from 'expect';

expect(
    counter(0, {type: 'INCREMENT'})
).toEqual(1);

console.log('Test completed');

export default counter;