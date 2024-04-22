window.onload=function(){
    document.getElementById("solve").addEventListener("click", FindSKNF);
}
function FindSKNF(){
    let vector=document.getElementById("vector").value;   
    if(vector.match(/[2-9]/)){         
        document.getElementById('result').value = 'Это не вектор функции (есть числа помимо 0 и 1)';
    }
    if(((vector.length & (vector.length - 1)) === 0 )&& vector.length!==1){    
        truthTable(vector);
    }
    else{
        document.getElementById('result').value = 'Это не вектор функции (длина не степень 2)';
    }
}
function truthTable(n1) {
    let l=n1.toString().length
    const numRows = l.toString(2).length-1;
    let s='';
    for (let i = 0; i < l; i++) {
    if(n1[i]==='1'){
        let cnt=1;
        for (let j = numRows - 1; j >= 0; j--) {
            if(cnt===1)
                    s+='(';
            
            if(((i >> j) & 1)===1){
                s+=('x'+cnt);
            }
            else
                s+=('!x'+cnt); 
            if(cnt===numRows)
                s+=')';
            cnt+=1;
        }
        if(i!==(l-1))
            s+='|';
    }
    }
    document.getElementById('result').value = s;
  }