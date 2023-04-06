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
	private _peers: readonly Peer[] = [];

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

	get peers(): readonly Peer[] {
		return this._peers;
	}

	addPeer(peer: Peer): PeerResult {
		// WIP: ensure uniqueness via public key
		const exists: boolean = this._peers.filter((p: Peer) => p.publicKey === peer.publicKey).length > 0;
		if (exists) {
			return PeerResult.EDUPLICATE;
		} else {
			this._peers = [...this._peers, peer];
			return PeerResult.ENOERROR;
		}
	}
	removePeer(peer: Peer): PeerResult {
		// WIP: ensure uniqueness via public key
		const filtered: Peer[] = this._peers.filter((p: Peer) => p.publicKey === peer.publicKey);
		const exists: boolean = filtered.length > 0;
		if (!exists) {
			return PeerResult.ENOTFOUND;
		} else {
			this._peers = this._peers.filter((p: Peer) => p.publicKey !== peer.publicKey);
			return PeerResult.ENOERROR;
		}
	}
}

export { Device, PeerResult };
