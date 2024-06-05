import {Draw, Read, sortList, Swap} from "./utils.js";

let combSortGenerator: Generator;

function* combSortMain(speed: number) {
	let i: number = 0,
		j: number = sortList.length,
		swapped: boolean = true,
		count: number = 0;
	while (swapped) {
		swapped = false;
		j = j == 1 ? 1 : Math.floor(j / 1.3);
		i = 0;
		while (i <= sortList.length - j) {
			if (Read(i) > Read(i + j)) {
				swapped = true;
				Swap(i, i + j);
			}
			if (count++ % speed == 0) {
				yield [i, i + j];
			}
			i++;
		}

		if (count++ % speed == 0) {
			yield;
		}
	}
}

function CombSort(IsStart: any): void {
	if (IsStart) {
		combSortGenerator = combSortMain(IsStart);
	}
	const resp = combSortGenerator.next();
	if (resp.value != undefined) {
		Draw(resp.value[0], resp.value[1]);
	} else {
		Draw();
	}

	if (resp.done) {
		return;
	}
	requestAnimationFrame(() => CombSort(false));
}

export {
	CombSort
}