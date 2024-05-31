import { Read, Swap, Draw, sortList } from "./utils.js";
let shakerSortGenerator;
function* shakerSortMain(speed) {
    let i = 0, j = 0, count = 0;
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
