f=()=>{eval(`
p='HappyNewYear!';
o='';
t='f='+f+';f();';
r='\\u0020';
s='\`';
t=t.replace(/[\\n]|[\\s]/g,'').split('\`');
u=t[4];
t=t[0]+s+t[1]+s+t[2]+s+t[3];
c=0;
cs=[
    '\\x1b[38;2;86;166;209m',
    '\\x1b[38;2;117;189;225m',
    '\\x1b[38;2;248;212;156m',
    '\\x1b[38;2;248;188;155m',
    '\\x1b[38;2;248;155;155m',
];
a=[
    [0,130],
    [0,130],
    [0,40,42,130],
    [0,16,18,23,25,40,42,73,76,106,109,130],
    [0,2,10,16,18,23,25,40,42,50,62,73,76,91,94,106,108,130],
    [0,2,10,16,18,23,25,35,49,50,62,73,76,86,95,105,108,130],
    [0,12,30,35,49,50,52,59,62,73,76,83,93,105,127,130],
    [0,12,30,40,42,46,48,50,52,59,62,67,81,83,88,105,127,130],
    [0,1,12,16,18,23,25,39,42,46,48,50,52,59,62,67,81,83,85,104,107,115,117,130],
    [0,1,12,16,18,23,25,39,41,46,48,50,52,59,62,70,72,77,79,83,85,104,107,115,117,130],
    [0,38,41,45,48,50,52,59,62,70,72,77,79,83,85,103,106,115,117,130],
    [0,13,29,37,40,42,48,50,62,70,73,77,79,83,85,103,105,115,117,130],
    [0,13,29,35,39,42,47,50,62,70,73,76,79,83,85,102,105,115,117,130],
    [0,2,10,13,15,20,22,27,29,35,37,71,73,76,78,83,97,101,104,115,117,130],
    [0,2,10,13,15,20,22,27,29,38,59,67,82,83,97,101,103,106,126,130],
    [0,13,15,20,22,27,29,38,59,67,82,83,85,90,92,106,126,130],
    [0,13,29,38,40,57,59,73,76,83,85,90,92,106,108,115,117,130],
    [0,2,10,13,29,38,40,57,59,73,76,83,85,90,92,106,108,115,117,130],
    [0,2,10,20,22,38,59,73,76,83,85,90,92,106,108,115,117,130],
    [0,20,22,38,59,67,81,83,85,90,92,106,108,115,117,130],
    [0,20,22,38,40,57,59,67,81,83,85,90,92,106,108,115,117,130],
    [0,2,11,13,29,38,59,72,76,82,85,90,92,106,108,115,117,130],
    [0,2,11,13,29,38,59,72,76,82,85,90,92,100,129,130],
    [0,2,4,9,11,20,22,38,40,57,59,71,77,82,85,90,92,100,129,130],
    [0,2,4,9,11,20,22,38,40,57,59,70,79,82,85,90,92,115,117,130],
    [0,2,4,9,11,13,29,38,59,70,72,73,76,77,80,82,84,90,92,115,117,130],
    [0,2,4,9,11,13,29,38,59,69,72,73,76,78,80,82,84,90,92,115,117,130],
    [0,2,4,9,11,20,22,43,44,52,55,68,71,73,76,79,80,81,84,90,92,115,117,130],
    [0,2,4,9,11,20,22,41,45,51,58,67,70,73,76,81,83,90,92,115,117,130],
    [0,2,11,20,22,38,44,54,60,67,69,73,76,80,83,90,92,115,117,130],
    [0,2,11,12,30,35,42,56,62,73,76,80,83,90,92,115,117,130],
    [0,2,4,12,30,35,40,58,61,73,76,79,82,90,92,115,117,130],
    [0,2,4,36,37,74,75,80,81,90,92,130],
    [0,130],
    [0,130],
    [0,130]
];
for(i=0;i<a.length;i++){
    if(i==a.length-1){
        for(j=0;j<a[i].length-1;j++){
            for(k=a[i][j];k<a[i][j+1]-u.length-3;k++){
                o+=cs[p[k%p.length].charCodeAt()%5]+p[k%p.length]+'\\x1b[m';
                c++;
            }
        }
        o+=cs[c%5]+'*'+cs[c%4+1]+'/';
        for(j=0;j<s.length;j++){
            o+=cs[s[j].charCodeAt()%5]+s[j];
        }
        for(j=0;j<u.length;j++){
            o+=cs[u[j].charCodeAt()%5]+u[j];
        }
        break;
    }
    for(j=0;j<a[i].length-1;j++){
        for(k=a[i][j];k<a[i][j+1];k++){
            if(c>=t.length){
                if(c==t.length){
                    o+=cs[c%5]+'/';
                    c++;
                    continue;
                }
                if(c==t.length+1){
                    o+=cs[c%5]+'*';
                    c++;
                    continue;
                }
                if(j%2){
                    o+=r;
                }else{
                    o+=cs[((p[c%p.length].charCodeAt())%5)]+p[c%p.length];
                    c++;
                }
            }else{
                if(j%2){
                    o+=r;
                }else{
                    o+=cs[((t[c].charCodeAt())%5)]+t[c];
                    c++;
                }
            }
        }
    }
    o+="\\n";
}
console.log(o);
`.replace(/([\n]|[\s])+/g,''));};f();