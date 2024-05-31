import {Read, Swap, Draw, sortList} from "./utils.js";

let shakerSortGenerator: Generator;

function* shakerSortMain(speed: number) {
	let i: number = 0,
		j: number = 0,
		count: number = 0;
	while (i / 2 < sortList.length) {
		j = i;
		while (j <= sortList.length - i) {
			if (Read(j) > Read(j + 1)) {
				Swap(j, j + 1);
			}
			if (count++ % speed == 0) {
				yield [i, j];
			}
			j++;
		}
		while (j >= i) {
			if (Read(j) > Read(j + 1)) {
				Swap(j, j + 1);
			}
			if (count++ % speed == 0) {
				yield [i, j];
			}
			j--;
		}

		if (count++ % speed == 0) {
			yield [i, j];
		}
		i++;
	}
}

function ShakerSort(IsStart: any): void {
	if (IsStart) {
		shakerSortGenerator = shakerSortMain(IsStart);
	}
	const resp = shakerSortGenerator.next();
	if (resp.value != undefined) {
		Draw(resp.value);
	} else {
		Draw();
	}

	if (resp.done) {
		return;
	}
	requestAnimationFrame(() => ShakerSort(false));
}

export {
	ShakerSort
}