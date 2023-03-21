const govno = n => { return isNaN(n) || isNaN(parseFloat(n)) || !isFinite(n) || !isFinite(parseFloat(n)) || n === null || n === 'null' || n === '' }

const isInt = n => { return Math.round(Number(n)) === Number(n) }

const row = (t, n, cls) => {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += `<td class="${cls}">${t}</td>`
    }
    return s;
}

const nest = (o, i, n, cls1, cls2) => {
    return `<td class="${cls1}">${o}</td>${row(i, n, cls2)}<td class="${cls1}">${o}</td>`;
}

const rec = (o, i, n, m, cls1, cls2) => {
    if (n > m) {
        return `<td class="${cls1}">${o}</td>${rec(i, i + 1, n - 1, m, cls2, cls1)}<td class="${cls1}">${o}</td>`;
    }
    return nest(o, i, n * 2, cls1, cls2);
}

const tbl = n => {
    document.write("<table>");
    document.write(`<tr>${row(1, n * 2, "black")}</tr>`);
    for (let i = n - 1; i > 0; i--) {
        document.write(`<tr>${rec(1, 2, n - 1, i, "black", "white")}</tr>`)
    }
    for (let i = 1; i < n; i++) {
        document.write(`<tr>${rec(1, 2, n - 1, i, "black", "white")}</tr>`)
    }
    document.write(`<tr>${row(1, n * 2, "black")}</tr>`);
    document.write("</table>");
}

(() => {
    let p = undefined;
    p = prompt("num = ")
    if (govno(p) || !isInt(p)) return;
    p = Number(p);
    if (p < 2 || p > 15) return;
    for (let i = 1; i <= p; i++) {
        document.write(`<hr width="${100 / i}%">`);
    }

    tbl(p);

    for (let i = p; i > 0; i--) {
        document.write(`<hr width="${100 / i}%">`);
    }
})();
