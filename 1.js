const govno = n => { return isNaN(n) || isNaN(parseFloat(n)) || !isFinite(n) || !isFinite(parseFloat(n)) || n === null || n === 'null' || n === '' }

const isInt = n => { return Math.round(Number(n)) === Number(n) }

const mod6 = n => { return n % 6 === 0 }

const hueta = num => {
    let s = num.toString();
    let len = s.length;
    if (len !== 3) {
        return false;
    }
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += Math.pow(s[i], 2);
    }
    return mod6(sum);
}

(() => {
    let s = "";
    let p = undefined;
    for (; ;) {
        p = prompt("num = ")
        if (govno(p) || !isInt(p)) {
            break;
        }
        p = Number(p);
        if (hueta(p)) {
            s += `${p}\n`;
        }
    }
    document.write(s);
})();
