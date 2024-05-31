import {Read, Swap, Draw, sortList} from "./utils.js";

let bubbleSortGenerator: Generator;

function* bubbleSortMain(speed: number) {
	let i: number = 0,
		j: number = 0,
		count: number = 0;
	while (i < sortList.length) {
		j = 0;
		while (j <= sortList.length - i) {
			if (Read(j) > Read(j + 1)) {
				Swap(j, j + 1);
			}
			if (count++ % speed == 0) {
				yield j;
			}
			j++;
		}

		if (count++ % speed == 0) {
			yield [i, j];
		}
		i++;
	}
}

function BubbleSort(IsStart: any): void {
	if (IsStart) {
		bubbleSortGenerator = bubbleSortMain(IsStart);
	}
	const resp = bubbleSortGenerator.next();
	if (resp.value != undefined) {
		Draw(resp.value);
	} else {
		Draw();
	}

	if (resp.done) {
		return;
	}
	requestAnimationFrame(() => BubbleSort(false));
}

export {
	BubbleSort
}