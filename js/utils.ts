let sortList: number[];
const canvas: HTMLCanvasElement = document.getElementById('main') as HTMLCanvasElement;

const cv = canvas.getContext('2d');
const width: number = canvas.width;
const height: number = canvas.height;

function Read(i: number): number {
	return sortList[i];
}

function Draw(highLight: number = -1, subHighLight: number = -1, sub: number = -1): void {
	if (!cv) {
		throw new Error('2d context not supported or canvas not found');
	}

	if (subHighLight == -1) {
		subHighLight = highLight;
	}
	if (sub == -1) {
		sub = highLight;
	}

	cv.clearRect(-10, -10, width + 10, height + 10);

	for (let i: number = 0; i < sortList.length; i++) {
		cv.fillStyle = Near(i, highLight, sortList.length / 500) || Near(i, subHighLight, sortList.length / 500) || Near(i, sub, sortList.length / 500) ? 'red' : 'white';
		cv.fillRect(
			width * i / sortList.length,
			height - height * (sortList[i] + 1) / sortList.length,
			width / sortList.length,
			height * (sortList[i] + 1) / sortList.length
		);
	}
}

function Swap(i: number, j: number): void {
	if (i == j || i >= sortList.length || j >= sortList.length || i < 0 || j < 0) {
		return;
	}
	const temp: number = sortList[i];
	sortList[i] = sortList[j];
	sortList[j] = temp;
}

function Shuffle(number: number): void {
	let temp: number[] = [];
	sortList = new Array(number);
	for (let i: number = 0; i < sortList.length; i++) {
		temp.push(i)
	}
	for (let i: number = 0; i < sortList.length; i++) {
		const j: number = Math.floor(Math.random() * temp.length);
		sortList[i] = temp[j];
		temp.splice(j, 1);
	}
}

function Near(number: number, base: number, range: number): boolean {
	return Math.abs(number - base) <= range;
}

export {
	Draw,
	Read,
	Swap,
	Shuffle,
	sortList
}