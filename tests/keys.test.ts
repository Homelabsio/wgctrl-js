import {
	generatePublicKey,
	generatePrivateKey,
	generatePresharedKey,
} from '../lib';

// describe('',()=>{});
    // test('.method',()=>{});

describe('Methods:',()=>{
    const sharedKey = generatePresharedKey();
    const privKey = generatePrivateKey();
    const pubKey = generatePublicKey(privKey);
    test('generatePresharedKey()',()=>{
        console.log(sharedKey);
        expect(typeof sharedKey).toBe('string');
        expect(sharedKey.length).toBe(44);
		
    });
	test('generatePrivateKey()',()=>{
        console.log(privKey);
        expect(typeof privKey).toBe('string');
		expect(privKey.length).toBe(44);
    });
	test('generatePublicKey()',()=>{
        console.log(pubKey);
        expect(typeof pubKey).toBe('string');
		expect(pubKey.length).toBe(44);
    });
});
