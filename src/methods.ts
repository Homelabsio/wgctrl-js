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

// tslint:disable:no-empty
function getDevices(): void {}
// tslint:disable:no-empty
function getDevice(): void {}
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
// tslint:disable:no-empty
function generatePresharedKey(): void {}


export { getDevices, getDevice, addDevice, setDevice, deleteDevice, generatePublicKey, generatePrivateKey, generatePresharedKey }