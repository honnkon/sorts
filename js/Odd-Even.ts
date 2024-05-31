import {Read, Swap, Draw, sortList} from "./utils.js";

let oddEvenSortGenerator: Generator;

function* oddEvenSortMain(speed: number) {
	let swapped: boolean = true,
		i: number = 0,
		count: number = 0;
	while (swapped) {
		swapped = false;
		i = 0;
		while (i < sortList.length) {
			if (Read(i) > Read(i + 1)) {
				Swap(i, i + 1);
				swapped = true;
			}
			if (count++ % speed == 0) {
				yield i;
			}
			i += 2;
		}
		i = 1;
		while (i < sortList.length) {
			if (Read(i) > Read(i + 1)) {
				Swap(i, i + 1);
				swapped = true;
			}
			count++;
			if (count++ % speed == 0) {
				yield i;
			}
			i += 2;
		}
	}
}

function OddEvenSort(IsStart: any): void {
	if (IsStart) {
		oddEvenSortGenerator = oddEvenSortMain(IsStart);
	}
	const resp = oddEvenSortGenerator.next();
	if (resp.value != undefined) {
		Draw(resp.value);
	} else {
		Draw();
	}

	if (resp.done) {
		return;
	}
	requestAnimationFrame(() => OddEvenSort(false));
}

export {
	OddEvenSort
}