window.onload = function() {
  document.getElementById("present").addEventListener("click", GetPresent);
    function generateBooleanVector() {
      const sz = 1 << 3;
      let bin='';
      for (let i = 0; i < sz; ++i) {
        bin+= (Math.floor(Math.random() * 2));
      }
      return bin;
    }
    //let binString=generateBooleanVector();
    let binString='10001101';
    document.getElementById("numberField").innerHTML = binString;
  
    document.getElementById('startButton').onclick = startFunction;
  
    function startFunction(){
  
      let res=getResponse();
      //console.log(res);
      console.log(getResponse());
      let unswerBlock = document.getElementById('unswer');
      if(res){
        document.getElementById("success").show();
      }else{
        unswerBlock.textContent = 'You are lox';
      }
    }
    function getResponse(){
  
      console.log(incompleteT0(binString));
  
      console.log(incompleteT1(binString));
  
      console.log(incompleteS(binString));
  
      console.log(incompleteM(binString));
  
      console.log(incompleteL(binString));
      let mainValues = [incompleteT0(binString), incompleteT1(binString),incompleteS(binString),incompleteM(binString),incompleteL(binString)];
      //console.log("hello "+ mainValues + " buy");
      let group1Values = document.getElementsByName('group1');
      //console.log( group1Values );
      let groupResult = true;
      if(group1Values[group1Values.length - 1].checked){
        console.log(group1Values[group1Values.length - 1] );
        for (let i = 0; i < mainValues.length ; i++) {
          if(mainValues[i] !== false){
            groupResult = false;
            return groupResult;
          }
        }
      }else{
        for (let i = 0; i < mainValues.length ; i++) {
          if (group1Values[i].checked !== mainValues[i]) {
            groupResult = false;
            //return groupResult;
          }
        }
      }
      return groupResult;
  }
  let checkboxes1 = document.querySelectorAll('input[name="group1"]');
    checkboxes1.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      let specialOptionCheckbox1 = document.querySelector('input[value="optionno"]');
      if (this.value !== 'optionno' && this.checked && specialOptionCheckbox1.checked) {
        specialOptionCheckbox1.checked = false;
      }
      if (this.checked && this.value === 'optionno') {
        //let group1Values = document.getElementsByName('group1');
        for (let i = 0; i < checkboxes1.length-1; i++) {
          checkboxes1[i].checked = false;
        }
        //checkboxes1[checkboxes1.length-1].checked = true;
      }
    });
  });
  function incompleteT0(vecBool){
      console.log(vecBool);
      if(vecBool[0] === "0"){
          return true;
      }
      return false;
  }
  function incompleteT1(vecBool){
      //console.log(vecBool);
      if(vecBool[vecBool.length-1] === "1"){
          return true;
      }
      return false;
  }
  function incompleteS(vecBool){
      let vecBoolrev = vecBool.split("").reverse().join("");
      for(let i=0; i < vecBool.length; i++){
          if(vecBool[i] === vecBoolrev[i]){
              return false;
          }
      }
      return true;
  }
  function incompleteM(vecBool){
      let flag = false;
      for(let i=0; i < vecBool.length; i++){
          if(vecBool[i] === "0"){
              if(flag === true){
                  return false;
              }
          }else{
              flag = true;
          }
      }
      return true;
  }
  function calcPol(vec_zh1){
      let vec_zh2="";
      for(let i=0;i<vec_zh1.length-1;i++){
          if(vec_zh1[i] === "1"){
              if(vec_zh1[i+1]==="1"){
                  vec_zh2 = vec_zh2 + "0";
              }else{
                  vec_zh2 = vec_zh2 + "1";
              }
          }else{
              if(vec_zh1[i+1]==="1"){
                  vec_zh2 = vec_zh2 + "1";
              }else{
                  vec_zh2 = vec_zh2 + "0";
              }
          }
  
      }
      //console.log(vec_zh2);
      return vec_zh2;
  }
  function incompleteL(vecBool){
      //flag = true;
      for(let i=0; i < 8; i++){
          console.log("Индекс "+ i);
          console.log("Вектор");
          console.log(vecBool);
          if(i===3 || i===5 || i===6 || i===7){
              if(vecBool[0] === "1"){
                  console.log(vecBool[0]);
                  return false;
                  //break;
              }
          }
          vecBool=calcPol(vecBool);
          //console.log(vecBool.length);
      }
      return true;
  }
  function GetPresent(){
    sessionStorage.setItem('t5', 1);   
}
  };