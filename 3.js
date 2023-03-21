const govno = n => { return n === null || n === 'null' || n === '' }

const _ = console.log;

(() => {
    let p = undefined;
    p = prompt("str = ")
    if (govno(p)) return;

    let s = ""

    const re = /(\w+) \d+/g;

    let match = undefined;
    while ( (match = re.exec(p)) !== null ) {
        s += match[1] + " ";
    }

    document.write(s);
})();
