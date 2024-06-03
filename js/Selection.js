import { Read, Swap, Draw, sortList } from "./utils.js";
let selectionSortGenerator;
function* selectionSortMain(speed) {
    let i = 0, j = 0, k, count = 0;
    while (i < sortList.length) {
        j = i;
        k = i;
        while (k <= sortList.length) {
            if (Read(k) < Read(j)) {
                j = k;
            }
            if (count++ % speed == 0) {
                yield [j, k];
            }
            k++;
        }
        Swap(i, j);
        i++;
        if (count++ % speed == 0) {
            yield;
        }
    }
}
function SelectionSort(IsStart) {
    if (IsStart) {
        selectionSortGenerator = selectionSortMain(IsStart);
    }
    const resp = selectionSortGenerator.next();
    if (resp.value != undefined) {
        Draw(resp.value[0], resp.value[1]);
    }
    else {
        Draw();
    }
    if (resp.done) {
        return;
    }
    requestAnimationFrame(() => SelectionSort(false));
}
export { SelectionSort };
