import { Peer } from './peer.class';

enum PeerResult {
	ENOERROR = 0,
	EINVALID = -1,
	EDUPLICATE = -2,
	ENOTFOUND = -3,
}

class Device {
	readonly name: string;
	// readonly?
	private _ifindex: number;
	// readonly?
	flags?: number;
	publicKey?: string | null;
	privateKey?: string | null;
	fwmark?: number;
	listenport?: number;
	private _peers: Peer[] = [];

	constructor(name: string, ifindex?: number) {
		this.name = name;
		if (ifindex !== undefined) {
			this._ifindex = ifindex;
		} else {
			this._ifindex = 9999;
		}
	}

	public get ifindex(): number {
		return this._ifindex;
	}
	// tslint:disable:no-empty
	addPeer(peer: Peer) {}
	// tslint:disable:no-empty
	removePeer(peer: Peer) {}
}

export { Device, PeerResult };
