import {Read, Swap, Draw, sortList} from "./utils.js";

let exchangeSortGenerator: Generator;

function* exchangeSortMain(speed: number) {
	let i: number = 0,
		j: number = 0,
		count: number = 0;
	while (i < sortList.length) {
		j = i;
		while (j <= sortList.length) {
			if (Read(j) < Read(i)) {
				Swap(i,j)
			}
			if (count++ % speed == 0) {
				yield [i, j];
			}
			j++;
		}
		Swap(i, j);
		i++;
		if (count++ % speed == 0) {
			yield;
		}
	}
}

function ExchangeSort(IsStart: any): void {
	if (IsStart) {
		exchangeSortGenerator = exchangeSortMain(IsStart);
	}
	const resp = exchangeSortGenerator.next();
	if (resp.value != undefined) {
		Draw(resp.value[0], resp.value[1]);
	} else {
		Draw();
	}

	if (resp.done) {
		return;
	}
	requestAnimationFrame(() => ExchangeSort(false));
}

export {
	ExchangeSort
}