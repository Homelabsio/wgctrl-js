import { isValidIP, isValidIP4, isValidIP6 } from './utils';

enum allowedIPResult {
	ENOERROR = 0,
	EINVALID = -1,
	EDUPLICATE = -2,
	ENOTFOUND = -3,
}

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
	readonly publicKey: string;

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

	/**
	 * @description Array of IPs routed to Peer
	 */
	private _allowedIPs: readonly string[] = [];

	constructor(publicKey: string) {
		this.publicKey = publicKey;
	}

	/**
	 * @description Peer public key
	 */
	get name(): string {
		return this.publicKey;
	}
	get allowedIPs(): readonly string[] {
		return this._allowedIPs;
	}

	/**
	 * @param {string} ip the IP address to be added to allowedIPs
	 * @returns {number} 0 if ip was added / Negative integer if ip was not added to indicate reason
	 */
	addAllowedIP(ip: string): allowedIPResult {
		const v6: boolean = isValidIP6(ip);
		if (isValidIP(ip)) {
			const parts = ip.split('/');
			// If no / found assume a host-route was passed and add /32 [v4] or /128 [v6]
			if (parts.length === 1) {
				if (v6) {
					ip += '/128';
				} else {
					ip += '/32';
				}
			}
			const exists = this._allowedIPs.includes(ip);
			if (exists) {
				return allowedIPResult.EDUPLICATE;
			}
			// Add ip to allowedIPs using ES6 spread operator
			this._allowedIPs = [...this._allowedIPs, ip];
			return allowedIPResult.ENOERROR;
		} else {
			return allowedIPResult.EINVALID;
		}
	}

	/**
	 * @param {string} ip the IP address to be removed to allowedIPs
	 * @returns {number} 0 if ip was added / Negative integer if ip was not added to indicate reason
	 */
	removeAllowedIP(ip: string): allowedIPResult {
		const v6: boolean = isValidIP6(ip);
		if (isValidIP(ip)) {
			const parts = ip.split('/');
			// If no / found assume a host-route was passed and add /32 [v4] or /128 [v6]
			if (parts.length === 1) {
				if (v6) {
					ip += '/128';
				} else {
					ip += '/32';
				}
			}
			const exists = this._allowedIPs.includes(ip);
			if (!exists) {
				return allowedIPResult.ENOTFOUND;
			}
			// Remove ip from allowedIPs using filter to return all allowedIP that are NOT ip
			this._allowedIPs = this._allowedIPs.filter((pfx: string) => pfx !== ip);
			return allowedIPResult.ENOERROR;
		} else {
			return allowedIPResult.EINVALID;
		}
	}
}

export { Peer, allowedIPResult };
