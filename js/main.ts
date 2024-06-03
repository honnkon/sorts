import {SelectionSort} from './Selection.js';
import {BubbleSort} from './Bubble.js';
import {ShakerSort} from "./Shaker.js";
import {InsertionSort} from "./Insertion.js";
import {GnomeSort} from "./Gnome.js";
import {MergeSort} from "./Merge.js";
import {OddEvenSort} from "./Odd-Even.js";
import {ExchangeSort} from "./Exchange.js";
import {Shuffle} from './utils.js';
import {DoubleSelectionSort} from "./DoubleSelection.js";

const Length = document.getElementById('Length');
const Speed = document.getElementById('Speed');
const Buttons = document.querySelectorAll('#sorts button');

Buttons[0].addEventListener('click', () => {
	// @ts-ignore
	Shuffle(Length.valueAsNumber);
	// @ts-ignore
	SelectionSort(Speed.valueAsNumber);
})

Buttons[1].addEventListener('click', () => {
	// @ts-ignore
	Shuffle(Length.valueAsNumber);
	// @ts-ignore
	InsertionSort(Speed.valueAsNumber);
})

Buttons[2].addEventListener('click', () => {
	// @ts-ignore
	Shuffle(Length.valueAsNumber);
	// @ts-ignore
	GnomeSort(Speed.valueAsNumber);
})

Buttons[3].addEventListener('click', () => {
	// @ts-ignore
	Shuffle(Length.valueAsNumber);
	// @ts-ignore
	BubbleSort(Speed.valueAsNumber);
})

Buttons[4].addEventListener('click', () => {
	// @ts-ignore
	Shuffle(Length.valueAsNumber);
	// @ts-ignore
	MergeSort(Speed.valueAsNumber);
})
Buttons[5].addEventListener('click', () => {
	// @ts-ignore
	Shuffle(Length.valueAsNumber);
	// @ts-ignore
	ShakerSort(Speed.valueAsNumber);
})
Buttons[6].addEventListener('click', () => {
	// @ts-ignore
	Shuffle(Length.valueAsNumber);
	// @ts-ignore
	OddEvenSort(Speed.valueAsNumber);
})
Buttons[7].addEventListener('click', () => {
	// @ts-ignore
	Shuffle(Length.valueAsNumber);
	// @ts-ignore
	ExchangeSort(Speed.valueAsNumber);
})
Buttons[8].addEventListener('click', () => {
	// @ts-ignore
	Shuffle(Length.valueAsNumber);
	// @ts-ignore
	DoubleSelectionSort(Speed.valueAsNumber);
})