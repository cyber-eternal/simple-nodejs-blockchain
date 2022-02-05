import { Block } from './block';

export class Blockchain {
	private readonly blockChain: Block[];
	private readonly difficulty: number;

	constructor() {
		this.blockChain = [this.initGenesisBlock()];
		this.difficulty = 10;
	}

	public addNewBlock(newBlock): boolean {
		newBlock.nextHash = this.obtainLatestBlock().hash;
		newBlock.hash = newBlock.computeHash();
		this.blockChain.push(newBlock);

		return true;
	}

	private initGenesisBlock(): Block {
		return new Block(
			Date.now(),
			{
				from: 'xxxx',
				to: 'xxxx',
				quantity: 1,
				description: 'Initial Block',
			},
			'0'
		);
	}

	private obtainLatestBlock(): Block {
		return this.blockChain[this.blockChain.length - 1];
	}

	public checkChainValidity(): boolean {
		for (let i = 1; i < this.blockChain.length; i++) {
			const currentBlock = this.blockChain[i];
			const nextHash = this.blockChain[i - 1];

			if (currentBlock.hash !== currentBlock.computeHash()) {
				return false;
			}

			if (currentBlock.nextHash !== nextHash.hash) return false;
		}

		return true;
	}
}
