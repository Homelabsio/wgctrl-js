// export const Greeter = (name: string) => `Hello ${name}`;
import bindings = require("bindings");
const {
    getDevices,
    getDevice,
    addDevice,
    setDevice,
    deleteDevice,
    generatePublicKey,
    generatePrivateKey,
    generatePresharedKey,
} = bindings('wg');

export namespace wgctrl {

    // REF: https://evertpot.com/opaque-ts-types/
    // declare const version: unique symbol;

    // type wgAllowedIP4 = string & {
    //     [version]: 4
    // }

    // type wgAllowedIP6 = string & {
    //     [version]: 6
    // }
    
    const v4Regex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/
    // REF: https://community.fortra.com/forums/intermapper/miscellaneous-topics/5acc4fcf-fa83-e511-80cf-0050568460e4
    const v6Regex = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
    
    export function isValidIP(ip: string): boolean {
        let slash = ip.indexOf('/');
        // console.log(slash);
        let stripped = "";
        if (slash !== -1) {
            stripped = ip.substring(0, slash);
        } else {
            // Bare IP without cidr notation implying host route e.g /32 for v4 or /128 for v6
            stripped = ip;
        }
        
        return v4Regex.test(stripped)||v6Regex.test(stripped);
    }

    export class wgPeer {
        // readonly?
        flags?: number;
        publicKey?: string | null;
        presharedKey?: string | null;
        endpoint?: string;
        // readonly?
        lastHandhakeTime?: BigInt;
        rxBytes?: BigInt;
        txBytes?: BigInt;
        persistentKeepaliveInterval?: number;
        
        private _allowedIPs: string[] = [];
        get allowedIPs(): string[] {
            return this._allowedIPs;
        }
        // WIP: https://stackoverflow.com/questions/63519316/typescript-getter-setter-on-array-property
        addAllowedIP(ip: string): number {
            if (isValidIP(ip)) {
                let parts = ip.split('/');
                if (parts.length === 2) {
                    
                } else {
                    
                }
                return 0;
            } else {
                return -1;
            }
        }
        removeAllowedIP(ip: string): number {
            if (isValidIP(ip)) {
                
                return 0;
            } else {
                return -1;
            }
        }
    }

    export class wgDevice {
        name?: string;
        // readonly?
        ifindex?: number;
        // readonly?
        flags?: number;
        publicKey?: string | null;
        privateKey?: string | null;
        fwmark?: number;
        listenport?: number;
        peers?: wgPeer[];
    }
    
    export function getDevices(): void {}
    
    export function getDevice(): void {}
    
    export function addDevice(): void {}
    
    export function setDevice(): void {}
    
    export function deleteDevice(): void {}
    
    export function generatePublicKey(): void {}
    
    export function generatePrivateKey(): void {}
    
    export function generatePresharedKey(): void {}

}


// export {
    // getDevices,
    // getDevice,
    // addDevice,
    // setDevice,
    // deleteDevice,
    // generatePublicKey,
    // generatePrivateKey,
    // generatePresharedKey,
// };