// 文字コードに応じて、カラーコードを変更したい

strs = "ThisIsAQuine!";
colors=[
    '\x1b[38;2;86;166;209m',
    '\x1b[38;2;117;189;225m',
    '\x1b[38;2;248;212;156m',
    '\x1b[38;2;248;188;155m',
    '\x1b[38;2;248;155;155m',
]
cstrs = [];

for(let s in strs){
    let str = colors[strs[s].charCodeAt()%5] +  strs[s]+ '\x1b[m';
    cstrs.push(str);
}

let output = '';

for(let s in cstrs){
    output += cstrs[s];
}

console.log(output);

console.log('*'.charCodeAt());

// \x1b[38;5;47m\x1b[m
// #56a6d1
// #75bde1
// #f8d49c
// #f8bc9b
// #f89b9b