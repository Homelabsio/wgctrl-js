# wgctrl-js
[![npm Version][NPM VERSION BADGE]][NPM PAGE]
[![Node.js][NODE VERSION BADGE]][NODE PAGE]
[![GitHub License][LICENSE BADGE]][LICENSE PAGE]
[![CI Status][CI BADGE]][CI PAGE]

Wireguard control API for Node.js

# Install

```sh
npm install @homelabsio/wgctrl
```

# Runtime Requirements
@homelabsio/wgctrl performs various network configuration tasks which require that the node process either:
* be executing as root [NOT PREFERRED]  
*OR*
* have CAP_NET_ADMIN [PREFERRED]

# Usage

### Modify existing Wireguard device

```typescript
import { Peer, Device, getDevices, getDevice, setDevice } from '@homelabsio/wgctrl';

// Get array of current WireGuard devices
let devs: string[] = getDevices();
console.log (devs); // [ 'wg0', 'wg1', 'wg2' ]

const wg0: Device = getDevice('');
let newPeer: Peer = new Peer('BCBqOfgqPK2RQO+z1QPYHvlxcOG41m2385dvjJcj5mE=');
newPeer.endpoint = "203.0.113.0:51820";
newPeer.presharedKey = "QJa8/fxAxEZtbaWrQ1UOrkGc2Gzx+O/DbhYzYcICPew=";
newPeer.persistentKeepaliveInterval = 25;
newPeer.addAllowedIP("198.19.254.250/32");
newPeer.addAllowedIP("198.19.254.252");
wg.addPeer(newPeer);

setDevice(wg0);
```

# Testing
```sh
npm run format
npm run lint
npm run test
```

# See Also
- TODO

# Legal
@homelabsio/wgctrl is licensed under the terms of the MIT License. See the [license file](LICENSE) for details.

[CI BADGE]: https://github.com/homelabsio/wgctrl-js/actions/workflows/ci.yaml/badge.svg
[CI PAGE]: https://github.com/homelabsio/wgctrl-js/actions/workflows/ci.yaml
[LICENSE BADGE]: https://img.shields.io/badge/license-MIT%20License-blue.svg?style=flat
[LICENSE PAGE]: https://github.com/homelabsio/wgctrl-js/blob/master/LICENSE
[NODE PAGE]: https://nodejs.org/
[NODE VERSION BADGE]: https://img.shields.io/node/v/@homelabsio/wgctrl.svg?style=flat
[NPM PAGE]: https://www.npmjs.com/package/@homelabsio/wgctrl
[NPM VERSION BADGE]: https://img.shields.io/npm/v/@homelabsio/wgctrl.svg?style=flat
[NPM KEYWORDS BADGE]: https://img.shields.io/github/package-json/keywords/homelabsio/wgctrl.svg?style=flat