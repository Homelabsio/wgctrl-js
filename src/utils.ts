// REF: https://www.ietf.org/archive/id/draft-main-ipaddr-text-rep-02.txt
// REF: https://www.ietf.org/rfc/rfc4291.txt section 2.2

// TODO: refactor v6Regex to see if a simpler or more concise solution exists

const v4Regex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;
// REF: https://community.fortra.com/forums/intermapper/miscellaneous-topics/5acc4fcf-fa83-e511-80cf-0050568460e4
const v6Regex =
	/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
/**
 * @param {string} ip The IP to be tested with or without cidr notation e.g
 *                    127.0.0.1/8 or fe80::1/64 or 127.0.0.1 or fe80::1
 * @returns {boolean} True if ip is valid / False if malformed
 */
function isValidIP(ip: string): boolean {
	const parts = ip.split('/');
	const stripped = parts[0];
	// (validv4 OR validv6) AND (parts.length EQ 1 OR parts.length EQ 2))
	return (v4Regex.test(stripped) || v6Regex.test(stripped)) && (parts.length === 1 || parts.length === 2);
}

/**
 * @param {string} ip The IP to be tested with or without cidr notation e.g
 *                    127.0.0.1/8 or 127.0.0.1
 * @returns {boolean} True if ip is valid / False if malformed
 */
function isValidIP4(ip: string): boolean {
	const parts = ip.split('/');
	const stripped = parts[0];
	// (validv4) AND (parts.length EQ 1 OR parts.length EQ 2))
	return v4Regex.test(stripped) && (parts.length === 1 || parts.length === 2);
}

/**
 * @param {string} ip The IP to be tested with or without cidr notation e.g
 *                    fe80::1/64 or fe80::1
 * @returns {boolean} True if ip is valid / False if malformed
 */
function isValidIP6(ip: string): boolean {
	const parts = ip.split('/');
	const stripped = parts[0];
	// (validv6) AND (parts.length EQ 1 OR parts.length EQ 2))
	return v6Regex.test(stripped) && (parts.length === 1 || parts.length === 2);
}
/**
 *
 * @param key JSON Key
 * @param value JSON Value
 * @returns value for everything, except bigint which is returned as string
 */
function bigIntReplacer(key: string, value: any): any {
	return typeof value === 'bigint' ? value.toString() : value;
}

export { isValidIP, isValidIP4, isValidIP6, bigIntReplacer };
