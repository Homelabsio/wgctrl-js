import { Peer, allowedIPResult } from '../lib';

describe('Peer',()=>{
    const peer = new Peer('szhDFFL/m6HRlrTMaCeBxJheFNM3YGCESJfzETLiQAg=');
    test('.constructor',() =>{
        expect(peer).toBeInstanceOf(Peer);        
    });
    test('.publicKey', ()=>{
        expect(peer.publicKey).not.toBe('');
        expect(peer.publicKey).toBe('szhDFFL/m6HRlrTMaCeBxJheFNM3YGCESJfzETLiQAg=');
    });
    test('.name', ()=>{
        expect(peer.name).not.toBe('');
        expect(peer.name).toBe('szhDFFL/m6HRlrTMaCeBxJheFNM3YGCESJfzETLiQAg=');
    });
    test('.allowedIPs [Empty]', ()=>{
        expect(peer.allowedIPs).toBeInstanceOf(Array<string>);
        expect(peer.allowedIPs.length).toBe(0);
        // expect(peer.allowedIPs).toBe('szhDFFL/m6HRlrTMaCeBxJheFNM3YGCESJfzETLiQAg=');
    });
    test('.addAllowedIP()', ()=>{
        expect(peer.addAllowedIP('')).toBe(allowedIPResult.EINVALID);
        expect(peer.addAllowedIP('192.168.0.0/24')).toBe(allowedIPResult.ENOERROR);
        expect(peer.addAllowedIP('192.168.1.1')).toBe(allowedIPResult.ENOERROR);
        expect(peer.addAllowedIP('2001::1')).toBe(allowedIPResult.ENOERROR);
        expect(peer.addAllowedIP('2001::1/128')).toBe(allowedIPResult.EDUPLICATE);
        expect(peer.allowedIPs.length).toBe(3);
    });
    test('.removeAllowedIP()', ()=>{
        expect(peer.removeAllowedIP('')).toBe(allowedIPResult.EINVALID);
        expect(peer.removeAllowedIP('192.168.0.0/24')).toBe(allowedIPResult.ENOERROR);
        expect(peer.removeAllowedIP('192.168.1.1')).toBe(allowedIPResult.ENOERROR);
        expect(peer.removeAllowedIP('2001::1')).toBe(allowedIPResult.ENOERROR);
        expect(peer.removeAllowedIP('2001::1/128')).toBe(allowedIPResult.ENOTFOUND);
        expect(peer.allowedIPs.length).toBe(0);
    });

});