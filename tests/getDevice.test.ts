import { Device, getDevice, getDevices } from "../lib";

describe('getDevice()',()=>{
    test(' returns Device', ()=>{
        const devs = getDevices();
        const dev = getDevice(devs[0]);
        expect(dev).toBeInstanceOf(Device);
    });
});