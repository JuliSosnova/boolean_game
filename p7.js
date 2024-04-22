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
    let binString='01111111';
    document.getElementById("numberField").innerHTML = binString;
    document.getElementById('startButton').onclick = startFunction;
    function startFunction(){
      var userInput = document.getElementById("userInput").value;
      console.log("Вы ввели: " + userInput);
      //getResponse(userInput);
      let res=getResponse(userInput);
      console.log(res);
      let unswerBlock = document.getElementById('unswer');
      if(res){
        document.getElementById("success").show();
      }else{
        unswerBlock.textContent = 'You are lox';
      }
    }
    function getResponse(strKNF){
      if(!check_Correct(strKNF)){
          return false;
      }
      let userKNF = strKNF.replace(/[+()]/g,'');
      console.log(userKNF);
      userKNF = userKNF.split('*');
      console.log(userKNF);
      //check_set1=false;
      //Пробегаемся по вектору булевой функции
      var answer1=false;
      var answer2=true;
      //Пробегаемся по вектору функции
      for(let i = 0; i < binString.length ; i++){
  
          //Формируем первый набор
          //for(let i=0;i<binString.length;i++){
             var bin_sets = i.toString(2);
             console.log(bin_sets);
             if(i< binString.length/2){
                  while(bin_sets.length<3){
                      bin_sets="0"+bin_sets;
                  }
             }
              console.log(bin_sets);
              //Проверяем соответствие при 0 в б.в.
              if(binString[i]==="0"){
              console.log("We are in 0");
              //Пробегаемся по КНФ
                  var check_bracket1 = true;
                  for(let j = 0; j < userKNF.length ; j++){
                      var check_element=false;
                  //Пробегаемся по элементам КНФ
                      for(let u = 0; u < userKNF[j].length ; u++){
  
                          if(userKNF[j][u]==="x"){
  
                              if( u>0 && userKNF[j][u-1]==="-"){
                                  check_element = check_element || !logical_Negation(bin_sets[0]);
                                  console.log("I change at " + check_element);
                              }else{
                                  check_element = check_element || logical_Negation(bin_sets[0]);
                              }
                          }
                          if(userKNF[j][u]==="y"){
  
                              if( u>0 && userKNF[j][u-1]==="-"){
                                  check_element = check_element || !logical_Negation(bin_sets[1]);
                                  console.log("I change at " + check_element);
                              }else{
                                  check_element = check_element || logical_Negation(bin_sets[1]);
                              }
                          }
                          if(userKNF[j][u]==="z"){
                              if( u>0 && userKNF[j][u-1]==="-"){
                                  check_element = check_element || !logical_Negation(bin_sets[2]);
                                  console.log("I change at " + check_element);
                              }else{
                                  check_element = check_element || logical_Negation(bin_sets[2]);
                              }
                          }
  
                      }
                      console.log("скобка " + j + " " + check_element);
                      check_bracket1 = check_bracket1 && check_element;
                      console.log(check_bracket1);
                  }
                  answer1 = answer1 || check_bracket1;
              //Проверяем соответствие при 1 в б.в.
              }else{
                  console.log("We are in 1");
                  //check_set2=true;
                  var check_bracket2 = true;
                  //Пробегаемся по КНФ
                  for(let j = 0; j < userKNF.length ; j++){
                      var check_element=false;
                  //Пробегаемся по элементам КНФ
                      for(let u = 0; u < userKNF[j].length ; u++){
  
                          if(userKNF[j][u]==="x"){
  
                              if( u>0 && userKNF[j][u-1]==="-"){
                                  check_element = check_element || !logical_Negation(bin_sets[0]);
                                  console.log("I change at " + check_element);
                              }else{
                                  check_element = check_element || logical_Negation(bin_sets[0]);
                              }
                          }
                          if(userKNF[j][u]==="y"){
  
                              if( u>0 && userKNF[j][u-1]==="-"){
                                  check_element = check_element || !logical_Negation(bin_sets[1]);
                                  console.log("I change at " + check_element);
                              }else{
                                  check_element = check_element || logical_Negation(bin_sets[1]);
                              }
                          }
                          if(userKNF[j][u]==="z"){
                              if( u>0 && userKNF[j][u-1]==="-"){
                                  check_element = check_element || !logical_Negation(bin_sets[2]);
                                  console.log("I change at " + check_element);
                              }else{
                                  check_element = check_element || logical_Negation(bin_sets[2]);
                              }
                          }
                      }
                      console.log("скобка " + j + " " + check_element);
                      //console.log(check_element);
                      check_bracket2 = check_bracket2 && check_element;
  
                      console.log(check_bracket2);
                  }
                  answer2 = answer2 && check_bracket2;
              }
          //}
  
      }
      console.log("ответы");
      console.log(answer1);
      console.log(answer2);
      if(!answer1 && answer2){
          return true;
      }
      return false;
  
    }
    function logical_Negation(bin_val){
      return !(bin_val == '0');
    };
    function check_Correct(check_KNF){
        var check = check_KNF.replace(/[x-z-]/gi,'');
        check = check.replace(/[+()*]/g,'');
        console.log("check " + check);
        if(check === ""){
          console.log("Correct");
          return true;
        }
        console.log("Not Correct");
        return false;
    }
    function GetPresent(){
        sessionStorage.setItem('t4', 1);   
    }
    };
  //(x+y+z)*(x+y+-z)*(x+-y+z)*(x+-y+-z)*(-x+y+z)*(-x+y+-z)*(-x+-y+z)
  //(-x+-y+z)*(-x+-y+-z)