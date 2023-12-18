function quickSort(haystack: number[]): void {
    function recurse(haystack: number[], lo: number, hi: number): void {
        if (lo >= hi) return;
        const pivotIdx = partition(haystack, lo, hi);
        recurse(haystack, lo, pivotIdx - 1);
        recurse(haystack, pivotIdx + 1, hi);
    }

    function partition(haystack: number[], lo: number, hi: number): number {
        const pivotIdx = Math.floor((hi + lo) / 2);
        const pivot = haystack[pivotIdx];
        var i = lo,
            j = hi;
        while (i < j) {
            while (haystack[i] < pivot && i <= hi) i++;
            while (haystack[j] > pivot && j >= lo) j--;

            if (i < j) {
                [haystack[i], haystack[j]] = [haystack[j], haystack[i]];
                i++;
                j--;
            }
        }

        return pivotIdx;
    }

    recurse(haystack, 0, haystack.length - 1);
}

function main() {
    var haystack = [1601, 801, 300, 132, 57, 10, 1];
    quickSort(haystack);
    console.log(haystack);
}

main();
