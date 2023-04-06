import { Device } from './device.class';
import { Peer } from './peer.class';
import bindings = require('bindings');
const {
	nativeGetDevices,
	nativeGetDevice,
	nativeAddDevice,
	nativeSetDevice,
	nativeDeleteDevice,
	nativeGeneratePublicKey,
	nativeGeneratePrivateKey,
	nativeGeneratePresharedKey,
} = bindings('wg');

function getDevices(): string[] {
	return nativeGetDevices() as string[];
}

function getDevice(name: string): Device {
	const rawdev = nativeGetDevice(name) as Device;
	const retdev: Device = new Device(rawdev.name, rawdev.ifindex);
	return retdev;
}
// tslint:disable:no-empty
function addDevice(): void {}
// tslint:disable:no-empty
function setDevice(): void {}
// tslint:disable:no-empty
function deleteDevice(): void {}

function generatePublicKey(privKey: any): string {
	const pubKey: string = nativeGeneratePublicKey(privKey);
	return pubKey;
}

function generatePrivateKey(): string {
	const privKey: string = nativeGeneratePrivateKey();
	return privKey;
}

function generatePresharedKey(): string {
	const psk: string = nativeGeneratePresharedKey();
	return psk;
}

export {
	getDevices,
	getDevice,
	addDevice,
	setDevice,
	deleteDevice,
	generatePublicKey,
	generatePrivateKey,
	generatePresharedKey,
};
