import { isValidIP4 } from "../lib";

const data: [string, boolean][] = [
    ['192.168.9.0/24', true],
    ['192.168.9.0', true],
    ['192.168.9.0/24/32', false],
    ['192.168.9.999/24', false],
    ['127.1/8', false], //Technically valid but we're not going to accept shorthand
];

describe.each(data)('isValidIP4("%s")', (ip, expected) => {
    test(`returns ${expected}`, () =>{
        expect(isValidIP4(ip)).toBe(expected);
    });
});