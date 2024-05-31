import { Draw, sortList } from "./utils.js";
let margeSortGenerator;
function* mergeSortMain(speed) {
    let i = 0, j, k = 2, l, m = [], s = [], n = 0, temp1, temp2, temp3, count = 0;
    while (n < sortList.length) {
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
            }
            else if (temp3.length == 0) {
                // @ts-ignore
                temp1.push(temp2.shift());
                i++;
            }
            else if (temp2[0] < temp3[0]) {
                // @ts-ignore
                temp1.push(temp2.shift());
                i++;
            }
            else {
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
        }
        else {
            m.push(k);
            s.push(l);
            i = l + k;
            k = 2;
        }
        if (count++ % speed == 0) {
            yield;
        }
    }
}
function MergeSort(IsStart) {
    if (IsStart) {
        margeSortGenerator = mergeSortMain(IsStart);
    }
    const resp = margeSortGenerator.next();
    if (resp.value != undefined) {
        Draw(resp.value[0], resp.value[1]);
    }
    else {
        Draw();
    }
    if (resp.done) {
        return;
    }
    requestAnimationFrame(() => MergeSort(false));
}
export { MergeSort };
