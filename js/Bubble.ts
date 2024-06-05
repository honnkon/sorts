import {Draw, Read, sortList, Swap} from "./utils.js";

let bubbleSortGenerator: Generator;

function* bubbleSortMain(speed: number) {
	let i: number = 0,
		swapped: boolean = true,
		count: number = 0;
	while (swapped) {
		swapped = false;
		i = 0;
		while (i < sortList.length) {
			if (Read(i) > Read(i + 1)) {
				swapped = true;
				Swap(i, i + 1);
			}
			if (count++ % speed == 0) {
				yield i;
			}
			i++;
		}

		if (count++ % speed == 0) {
			yield i;
		}
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