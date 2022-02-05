import { v4 as uuid } from 'uuid';
import SHA256 from 'crypto-js/sha256';
import { IBlockInfo } from './block.interface';

export class Block {
	private readonly id: string;
	private readonly current_time: number;
	private readonly info: IBlockInfo;
	public readonly nextHash: string;
	public readonly hash: string;

	constructor(current_time: number, info: IBlockInfo, nextHash = ' ') {
		this.id = uuid();
		this.current_time = current_time;
		this.info = info;
		this.nextHash = nextHash;
		this.hash = this.computeHash();
	}

	public computeHash(): string {
		return SHA256(
			this.id + this.nextHash + this.current_time + JSON.stringify(this.info)
		).toString();
	}
}
