import {Draw, sortList} from "./utils.js";

let margeSortGenerator: Generator;

function* mergeSortMain(speed: number) {
	let i: number = 0,
		j: number,
		k: number = 2,
		l: number,
		m: number[] = [],
		s: number[] = [],
		n: number = 0,
		temp1: number[],
		temp2: number[],
		temp3: number[],
		count: number = 0;
	while (n < 2) {
		j = i + k / 2 - 1;
		l = i;
		temp1 = [];
		temp2 = sortList.slice(i, j + 1);
		temp3 = sortList.slice(j + 1, i + k);
		while (temp1.length < k && (temp2.length > 0 || temp3.length > 0)) {
			if (temp2.length == 0) {
				// @ts-ignore
				temp1.push(temp3.shift());
				j++;
			} else if (temp3.length == 0) {
				// @ts-ignore
				temp1.push(temp2.shift());
				i++;
			} else if (temp2[0] < temp3[0]) {
				// @ts-ignore
				temp1.push(temp2.shift());
				i++;
			} else {
				// @ts-ignore
				temp1.push(temp3.shift());
				j++;
			}
			if (count++ % speed == 0) {
				yield [i, j];
			}
		}

		i = l;
		while (temp1.length > 0) {
			// @ts-ignore
			sortList[i] = temp1.shift();
			i++;
			if (count++ % speed == 0) {
				yield [i, -1];
			}
		}
		if (m[m.length - 1] == k) {
			// @ts-ignore
			i = s.pop();
			// @ts-ignore
			k = m.pop() * 2;
		} else {
			m.push(k);
			s.push(l);
			i = l + k;
			k = 2;
		}

		if (count++ % speed == 0) {
			yield;
		}

		if (n == 1) {
			n = 2;
		}
		if (sortList.length <= k) {
			n = 1;
		}
	}
}

function MergeSort(IsStart: any): void {
	if (IsStart) {
		margeSortGenerator = mergeSortMain(IsStart);
	}
	const resp = margeSortGenerator.next();
	if (resp.value != undefined) {
		Draw(resp.value[0], resp.value[1]);
	} else {
		Draw();
	}

	if (resp.done) {
		return;
	}
	requestAnimationFrame(() => MergeSort(false));
}

export {
	MergeSort
}