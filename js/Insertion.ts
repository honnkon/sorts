import {Draw, sortList, Read} from "./utils.js";

let insertionSortGenerator: Generator;

function* insertionSortMain(speed: number) {
	let i: number = 1,
		j: number = 0,
		k: number,
		l: number,
		count: number = 0;
	while (i < sortList.length) {
		j = i - 1;
		while (Read(j) > Read(i)) {
			j--;
			if (count++ % speed == 0) {
				yield j;
			}
		}
		j++;
		k = i;
		l = sortList[i];
		while (k > j) {
			sortList[k] = Read(k-1);
			k--;
			if (count++ % speed == 0) {
				yield k;
			}
		}
		sortList[j] = l;
		if (count++ % speed == 0) {
			yield;
		}
		i++;
	}
}

function InsertionSort(IsStart: any): void {
	if (IsStart) {
		insertionSortGenerator = insertionSortMain(IsStart);
	}
	const resp = insertionSortGenerator.next();
	if (resp.value != undefined) {
		Draw(resp.value);
	} else {
		Draw();
	}

	if (resp.done) {
		return;
	}
	requestAnimationFrame(() => InsertionSort(false));
}

export {
	InsertionSort
}