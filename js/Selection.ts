import {Read, Swap, Draw, sortList} from "./utils.js";

let selectionSortGenerator: Generator;

function* selectionSortMain(speed: number) {
	let i: number = 0,
		j: number = 0,
		k: number,
		count: number = 0;
	while (j < sortList.length) {
		i = j;
		k = j;
		while (k <= sortList.length) {
			if (Read(k) < Read(i)) {
				i = k;
			}
			if (count++ % speed == 0) {
				yield [i, k];
			}
			k++;
		}
		Swap(i, j);
		j++;
		if (count++ % speed == 0) {
			yield;
		}
	}
}

function SelectionSort(IsStart: any): void {
	if (IsStart) {
		selectionSortGenerator = selectionSortMain(IsStart);
	}
	const resp = selectionSortGenerator.next();
	if (resp.value != undefined) {
		Draw(resp.value[0], resp.value[1]);
	} else {
		Draw();
	}

	if (resp.done) {
		return;
	}
	requestAnimationFrame(() => SelectionSort(false));
}

export {
	SelectionSort
}