import { Peer } from './peer.class';

class Device {
	private _name: string;
	// readonly?
	private _ifindex: number;
	// readonly?
	flags?: number;
	publicKey?: string | null;
	privateKey?: string | null;
	fwmark?: number;
	listenport?: number;
	peers?: Peer[];
	constructor(name: string, ifindex: number) {
		this._name = name;
		this._ifindex = ifindex;
	}

	public get name(): string {
		return this._name;
	}

	public get ifindex(): number {
		return this._ifindex;
	}
}

export { Device };
