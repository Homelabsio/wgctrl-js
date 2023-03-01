import { getDevices } from "../lib";

describe('getDevices()',()=>{
    test(' returns string[]', ()=>{
        const result = getDevices();
        expect(result).toEqual(expect.anything());
    });
});