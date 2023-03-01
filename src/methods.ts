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
// tslint:disable:no-empty
function generatePublicKey(): void {}
// tslint:disable:no-empty
function generatePrivateKey(): void {}

function generatePresharedKey(): any {
	const psk = nativeGeneratePresharedKey();
	// tslint:disable:no-console
	console.log(psk);
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
