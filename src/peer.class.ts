import { isValidIP } from "./utils";

class Peer {
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
            const parts = ip.split('/');
            // tslint:disable:no-empty
            if (parts.length === 2) {
            // tslint:disable:no-empty
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

export { Peer }