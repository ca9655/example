function clear(){
    const out = document.getElementById('out');
    out.innerHTML = '';
}

function create(){
    clear();
    let r = document.getElementById('inr').value;
    let c = document.getElementById('inc').value;
    const row = parseInt(r); const col = parseInt(c);
    const total = row*col;
    let used = [];
    const lay = document.getElementById('out');
    const br = document.createElement('br');
    for(var i = 1; i<=row; i++){
        const add = document.createElement('div');
        add.className = `row row${i}`;
        lay.appendChild(add);
        const cur = document.getElementsByClassName(`row${i}`)[0];
        for(var j = 0; j<col; j++){
            const sit = document.createElement('div');
            let ran;
            do{
                ran = Math.floor(Math.random() * total) + 1;
            }while(used.includes(ran));
            used.push(ran);
            sit.className = `sits col`;
            sit.textContent = ran;
            cur.appendChild(sit);
        }
    }
}