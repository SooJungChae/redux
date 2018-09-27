// import http from 'http';
import counter from './counter';
import expect from 'expect';

expect(
    counter(0, {type: 'INCREMENT'})
).toEqual(1);