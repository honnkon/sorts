import { Draw, Read, sortList, Swap } from "./utils.js";
let shakerSortGenerator;
function* shakerSortMain(speed) {
    let i = 0, swapped = true, count = 0;
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
        while (i >= 0) {
            if (Read(i) > Read(i + 1)) {
                swapped = true;
                Swap(i, i + 1);
            }
            if (count++ % speed == 0) {
                yield i;
            }
            i--;
        }
        if (count++ % speed == 0) {
            yield i;
        }
    }
}
function ShakerSort(IsStart) {
    if (IsStart) {
        shakerSortGenerator = shakerSortMain(IsStart);
    }
    const resp = shakerSortGenerator.next();
    if (resp.value != undefined) {
        Draw(resp.value);
    }
    else {
        Draw();
    }
    if (resp.done) {
        return;
    }
    requestAnimationFrame(() => ShakerSort(false));
}
export { ShakerSort };
