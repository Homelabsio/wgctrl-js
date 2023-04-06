import { Device, PeerResult, Peer, allowedIPResult } from "../lib";

describe('Device:',()=>{
    const device = new Device('tunnel');
    const peer = new Peer('KvVXPwNPPm/e2r9iSt2V+NhpaaQxek1PurhWERzUchU=');
    // test('.method',()=>{});
    test('.constructor',()=>{
        expect(device).toBeInstanceOf(Device);
    });
    test('.name',()=>{
        expect(device.name).not.toBe('');
        expect(device.name).toBe('tunnel');
    });
    test('.ifindex',()=>{
        expect(device.ifindex).toBe(9999);
    });
    test('.peers [Empty]',()=>{
        expect(device.peers).toBeInstanceOf(Array<Peer>);
        expect(device.peers.length).toBe(0);
    });
    test('.addPeer',()=>{
        expect(device.addPeer(peer)).toBe(PeerResult.ENOERROR);
        expect(device.addPeer(new Peer('szhDFFL/m6HRlrTMaCeBxJheFNM3YGCESJfzETLiQAg='))).toBe(PeerResult.ENOERROR);
        expect(device.addPeer(peer)).toBe(PeerResult.EDUPLICATE);
        expect(device.peers.length).toBe(2);
    });
    test('.removePeer',()=>{
        expect(device.removePeer(peer)).toBe(PeerResult.ENOERROR);
        expect(device.removePeer(new Peer('szhDFFL/m6HRlrTMaCeBxJheFNM3YGCESJfzETLiQAg='))).toBe(PeerResult.ENOERROR);
        expect(device.removePeer(peer)).toBe(PeerResult.ENOTFOUND);
        expect(device.peers.length).toBe(0);
    });

});