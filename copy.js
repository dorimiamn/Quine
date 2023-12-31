f=()=>{eval(`p='ThisIsAQuine!';o='';t='f='+f+';f();';r='\\u0020';s='\`';t=t.replace(/[\\n]|[
    \\s]/g,'').split('\`');u=t[4];t=t[0]+s+t[1]+s+t[2]+s+t[3];c=0;cs=['\\x1b[38;2;86;166;209m','
    \\x1b[38;2;117;189;225m','\\x1b[38;2;248;212;156m','\\x1b[38;2;248;188;155m','\\x1b[38;2;248
    ;155;155m',];a=[[0,92],[0,92],[0,92],[0,92],[0,92],[0,92],[0,8,16,48,51,92],[0,6,18,48,51,92
    ],[0,5,10,15,19,48,51,92],[0,4,8,16,20,92],[0,3,7,18,21,92],[0,2,6,18,22,92],[0,2,5,19,22,92
    ],[0,2,5,19,23,28,31,39,42,48,51,57,60,63,68,81,87,92],[0,1,5,20,23,28,31,39,42,48,51,57,60,
    61,70,79        ,89,92],[0,1,4,20,23,28,31,39,42   ,48,51,57,63,67,70,78,82,85,89,92],[0,1,4
    ,20,23            ,28,31,39,42,48,51,57,62,68,71   ,77,80,87,90,92],[0,1,4,20,23,28,31,39,42
    ,48,5     1,57,    61,68,71,76,80,87,91,92],[0,1   ,4,20,23,28,31,39,42,48,51,57,60,68,71,76
    ,79,    88,91,92    ],[0,1,4,20,23,28,31,39,42,48,51,57,60,68,71,76,79,88,91,92],[0,1,4,20,2
    3,2    8,31,39,42,   48,51,57,60,68,71,76,91,92],[0,1,5,20,23,28,31,39,42,48,51,57,60,68,71,
    76    ,91,92],[0,2    ,5,12,14,20,23,28,31,39,42,48,51,57,60,68,71,76,79,92],[0,2,5,12,15,19
    ,2   2,28,31,39,42,   48,51,57,60,68,71,76,79,92],[0,2,6,12,16,19,22,28,31,39,42,48,51,57,60
    ,6   8,71,76,79,92]    ,[0,3   ,7,13,21   ,28,31   ,38,42   ,48     ,51,57,60,68,      71,76
    ,    80,89,90,92],[0   ,4,8,   15,21,28   ,31,37   ,42,48   ,         51,57,60,          68,
    7   1,77,80,88,91,92   ],[0,   5,10,15,   20,28,   32,36,      42,4   8,51,57,    60,    68,
    7   1,78,82,86,90,92   ],[0,   6,22,29,   38,39,   42,48,     51,57,   60,68,   71,79,8   9,
    9   2],[0,8,16,19,23   ,31,3   6,39,42,   48,51,   57,60,    68,71,8   1,87,    92],[0,    2
    0   ,23,92],[0,22,23   ,92],   [0,92],[   0,92],   [0,92]   ,[0,92]]   ;for(   i=0;i<a.l   e
    n   gth;i++){if(i==a   .leng   th-1){fo   r(j=0;   j<a[i]   .length-   1;j++   ){for(k=a   [
    i   ][j];k<a[i][j+1]   -u.le   ngth-3;k   ++){o+   =cs[p[   k%p.leng   th].c               h
    a    rCodeAt()%5]+p[   k%p.l   ength]+'   \\x1b[   m';c++   ;}}o+=cs   [c%5]               +
    '*   '+cs[c%  4+1]+'   /';fo   r(j=0;j<   s.leng   th;j++   ){o+=cs[   s[j].   charCodeAt()%
    5]   +s[j];}   for(   j=0;j<   u.length   ;j++){   o+=cs[   u[j].cha   rCode   At()%5]+u[j];
    }b    reak;}    for   (j=0;j   <a[i].le   ngth-1   ;j++){   for(k=a[   i][j]   ;k<a[i][j+1];
    k++    ){if(c        >=t.len   gth){if    (c==t.   length   ){o+=cs[   c%5]+    '/';c++;c on
    tinu    e;}if(c      ==t.len   gth+1)     {o+=cs   [c%5]+   '*';c++;   contin   ue;}if(i   =
    =a.le     ngth-     1&&j==a[    i].l      ength-   2&&k==   a[i][j+1   ]-2){o+    =cs[    c%
    5]+'*'                +cs[c%4         +   1]+'/'   ;c++;b   reak;}if   (j%2){o+          =r;
    }else{o+        =cs    [((p[c%p     .le   ngth].   charCo   deAt())%   5)]+p[c%p.      lengt
    h];c++;}}else{if(j%2   ){o+=r;}else{o+=cs[((t[c].charCodeAt())%5)]+t[c];c++;}}}}o+="\\n";}co
    nsole.log(o);/*uine!Th isIsAQuine!ThisIsAQuine!ThisIsAQuine!ThisIsAQuine!ThisIsAQuine!ThisIs
    AQuine!ThisIsAQuine!ThisIsAQuine!ThisIsAQuine!ThisIsAQuine!ThisIsAQuine!ThisIsAQuine!ThisIsA
    Quine!ThisIsAQuine!ThisIsAQuine!ThisIsAQuine!ThisIsAQuine!ThisIsAQuine!ThisIsAQuine!ThisIsAQ
    uine!ThisIsAQuine!ThisIsAQuine!ThisIsAQuine!ThisIsAQuine!ThisIsAQuine!ThisIsAQuine!ThisIsAQu
    ThisIsAQuine!ThisIsAQuine!ThisIsAQuine!ThisIsAQuine!T*/`.replace(/([\n]|[\s])+/g,''));};f();