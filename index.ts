import { Blockchain } from './blockchain';
import { Block } from './block';

const myBlockchain = new Blockchain();

myBlockchain.addNewBlock(
	new Block(Date.now(), {
		from: 'Cyber Eternal',
		to: 'Eternal Cyber',
		quantity: 100,
	})
);

myBlockchain.addNewBlock(
	new Block(Date.now(), {
		from: 'Cyber Eternal',
		to: 'Eternal Cyber',
		quantity: 50,
	})
);

console.log('Is valid:', myBlockchain.checkChainValidity());
