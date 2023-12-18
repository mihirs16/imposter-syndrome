function HCF(a: number, b: number) {
    if (a === 0) return b;
    if (b === 0) return a;
    return HCF(b, a % b)
}

function ListLCM(arr: number[]) {
    function LCMFromHCF(a: number, b: number) {
        return a / HCF(a, b) * b;
    }
    return arr.reduce((acc, curr) => LCMFromHCF(acc, curr));
}

console.log(ListLCM([2, 3, 5]));