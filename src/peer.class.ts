import { isValidIP } from './utils';
/**
 * @description A wireguard peer
 */
class Peer {
	/**
	 * @description Peer flags
	 */
	flags?: number;
	/**
	 * @description Peer public key
	 */
	private _publicKey: string;
	/**
	 * @description Peer preshared key
	 */
	presharedKey?: string | null;
	/**
	 * @description Peer endpoint can be IP or DNS name
	 */
	endpoint?: string;
	/**
	 * @description Timestamp of last handshake performed by Peer
	 */
	lastHandShakeTime?: BigInt;
	/**
	 * @description Number of bytes received from Peer
	 */
	rxBytes?: BigInt;
	/**
	 * @description Number of bytes sent to Peer
	 */
	txBytes?: BigInt;
	/**
	 * @description Number of seconds between keepalive packets sent to Peer
	 */
	persistentKeepaliveInterval?: number;

	private _allowedIPs: string[] = [];

	constructor(publicKey: string) {
		this._publicKey = publicKey;
	}

	get publicKey(): string {
		return this._publicKey;
	}
    
	get name(): string {
		return this._publicKey;
	}

	/**
	 * @description Array of IPs routed to Peer
	 */
	get allowedIPs(): string[] {
		return this._allowedIPs;
	}
	// WIP: https://stackoverflow.com/questions/63519316/typescript-getter-setter-on-array-property
	/**
	 * @param {string} ip the IP address to be added to allowedIPs
	 * @returns {number} 0 if ip was added / Negative integer if ip was not added to indicate reason
	 */
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
	/**
	 *
	 * @param {string} ip the IP address to be removed to allowedIPs
	 * @returns {number} True if ip was added / False if ip was not removed
	 */
	removeAllowedIP(ip: string): number {
		if (isValidIP(ip)) {
			return 0;
		} else {
			return -1;
		}
	}
}

export { Peer };
