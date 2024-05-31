import { Read, Swap, Draw, sortList } from "./utils.js";
let exchangeSortGenerator;
function* exchangeSortMain(speed) {
    let i = 0, j = 0, count = 0;
    while (i < sortList.length) {
        j = i;
        while (j <= sortList.length) {
            if (Read(j) < Read(i)) {
                Swap(i, j);
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
function ExchangeSort(IsStart) {
    if (IsStart) {
        exchangeSortGenerator = exchangeSortMain(IsStart);
    }
    const resp = exchangeSortGenerator.next();
    if (resp.value != undefined) {
        Draw(resp.value[0], resp.value[1]);
    }
    else {
        Draw();
    }
    if (resp.done) {
        return;
    }
    requestAnimationFrame(() => ExchangeSort(false));
}
export { ExchangeSort };
