import {Swap, Draw, sortList, Read} from "./utils.js";

let gnomeSortGenerator: Generator;

function* insertionSortMain(speed: number) {
	let i: number = 1,
		count: number = 0;
	while (i < sortList.length) {
		if (Read(i - 1) > Read(i) && i > 0) {
			Swap(i - 1, i);
			i--;
		} else {
			i++;
		}
		if (count++ % speed == 0) {
			yield i;
		}
	}
}

function GnomeSort(IsStart: any): void {
	if (IsStart) {
		gnomeSortGenerator = insertionSortMain(IsStart);
	}
	const resp = gnomeSortGenerator.next();
	if (resp.value != undefined) {
		Draw(resp.value);
	} else {
		Draw();
	}

	if (resp.done) {
		return;
	}
	requestAnimationFrame(() => GnomeSort(false));
}

export {
	GnomeSort
}