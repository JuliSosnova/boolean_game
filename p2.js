window.onload=function(){
    document.getElementById("solve").addEventListener("click", FindResidual);
}



function FindResidual(){
    let vector=document.getElementById("vector").value;   
    if(vector.match(/[2-9]/)){         
        document.getElementById('result').value = 'Это не вектор функции (есть числа помимо 0 и 1)';
    }
    if(((vector.length & (vector.length - 1)) === 0 )&& vector.length!==1){    
        const form = document.getElementById("ost");
        let T=Number(form.elements["d"].value);
        let el=Number(document.getElementById('nom').value);
        //alert(typeof T);
        if(el>vector.length){
            document.getElementById('result').value = 'Неверное значение номера аргумента';
        }
        else{ 
            let v = [];
            let k = vector.length, l = 0;
            while (parseInt(k / 2) !== 0) {
                k = parseInt(k / 2);
                l++;
                v.push(l);
            }
            
            v.reverse();
            el = v[el - 1];
            let r='';
            for(let i=0;i<vector.length;i++){
                let p=i%(1 << el)
                let d= 1<<(el-1);
                if(parseInt((p/d),10)==T){
                    r+=vector[i];
                }
            }
            document.getElementById('result').value = r;
        }
    }
    else{
        document.getElementById('result').value = 'Это не вектор функции (длина не степень 2)';
    }
    
}
