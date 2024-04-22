window.onload = function() {
    function generateBooleanVector() {
      const sz = 1 << 2;
      let bin='';
      for (let i = 0; i < sz; ++i) {
        bin+= (Math.floor(Math.random() * 2));
      }
      return bin;
    }
    let binString='';
    binString=generateBooleanVector(); 
    document.getElementById("numberField").innerHTML = binString;
    document.getElementById("startButton").addEventListener("click", getCheckedRadioValue);
    document.getElementById("present").addEventListener("click", GetPresent);

function getCheckedRadioValue() {
        var elements = document.getElementsByName("drone");
        for (var i=0, len=elements.length; i<len; ++i){
            if (elements[i].checked){ 
                    if(elements[i].value==binString){
                      document.getElementById("success").show();
                    }
                    else{
                      document.getElementById("unswer").textContent = 'You are lox';
                    }
             break;       
             }       
        }
}
function GetPresent(){
      sessionStorage.setItem('t1', 1);   
}
};
    
