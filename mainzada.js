window.onload = function() {
    if(document.title==='SHOP'){
        if( sessionStorage.getItem('t1')==='1' && sessionStorage.getItem('t1')!== null){
            document.getElementById("p2").style.visibility = 'visible'; 
            document.getElementById("v2").style.visibility = 'hidden'; 
        }
        if( sessionStorage.getItem('t2')==='1' && sessionStorage.getItem('t2')!== null){
            document.getElementById("p3").style.visibility = 'visible'; 
            document.getElementById("v3").style.visibility = 'hidden'; 
        }
        if( sessionStorage.getItem('t3')==='1' && sessionStorage.getItem('t3')!== null){
            document.getElementById("p4").style.visibility = 'visible'; 
            document.getElementById("v4").style.visibility = 'hidden'; 
        }
        if( sessionStorage.getItem('t4')==='1' && sessionStorage.getItem('t4')!== null){
            document.getElementById("p5").style.visibility = 'visible'; 
            document.getElementById("v5").style.visibility = 'hidden'; 
        }
        if( sessionStorage.getItem('t5')==='1' && sessionStorage.getItem('t5')!== null){
            document.getElementById("p6").style.visibility = 'visible'; 
            document.getElementById("v6").style.visibility = 'hidden'; 
        }
    }
    else if(document.title==='PLAY'){
        if( sessionStorage.getItem('t1')==='1' && sessionStorage.getItem('t1')!== null){
            document.getElementById("v2").style.visibility = 'visible'; 
            document.getElementById("vv2").style.visibility = 'hidden'; 
        }   
        if( sessionStorage.getItem('t2')==='1' && sessionStorage.getItem('t2')!== null){
            document.getElementById("v3").style.visibility = 'visible'; 
            document.getElementById("vv3").style.visibility = 'hidden'; 
        }
        if( sessionStorage.getItem('t3')==='1' && sessionStorage.getItem('t3')!== null){
            document.getElementById("v4").style.visibility = 'visible'; 
            document.getElementById("vv4").style.visibility = 'hidden'; 
        }
        if( sessionStorage.getItem('t4')==='1' && sessionStorage.getItem('t4')!== null){
            
            document.getElementById("v5").style.visibility = 'visible'; 
            document.getElementById("vv5").style.visibility = 'hidden'; 
        }
        if( sessionStorage.getItem('t5')==='1' && sessionStorage.getItem('t5')!== null){
            document.getElementById("v6").style.visibility = 'visible'; 
            document.getElementById("vv6").style.visibility = 'hidden'; 
        }   
    }
    else if(document.title==='GAME'){
        if( sessionStorage.getItem('t1')==='1'){
             document.getElementById("p").src='anapa.gif'
             document.getElementById("p").style.width ='160px'; 
        }
        if( sessionStorage.getItem('t2')==='1'){
            document.getElementById("p").src='kosmo.gif'
            document.getElementById("p").style.width ='230px'; 
            document.getElementById("p").style.left='20px'; 
       }
       if( sessionStorage.getItem('t3')==='1'){
            document.getElementById("p").src='sherlok3.gif'
            document.getElementById("p").style.width ='180px'; 
            document.getElementById("p").style.top ='210px'; 
        }
        if( sessionStorage.getItem('t4')==='1' ){
            document.getElementById("p").src='super2.gif'
            document.getElementById("p").style.width ='230px'; 
            document.getElementById("p").style.left='20px'; 
        }
        if( sessionStorage.getItem('t5')==='1' ){
            document.getElementById("p").src='chch3.gif'
            document.getElementById("p").style.width ='190px'; 
            document.getElementById("p").style.top ='220px'; 
        }
    }
    else{
        alert('ddd');
        if( sessionStorage.getItem('t1')==='1'){
            document.getElementById("pan").src='anapa.gif'
            document.getElementById("pan").style.width ='160px'; 
       }
       if( sessionStorage.getItem('t2')==='1'){
           document.getElementById("p").src='kosmo.gif'
           document.getElementById("p").style.width ='230px'; 
           document.getElementById("p").style.left='20px'; 
      }
      if( sessionStorage.getItem('t3')==='1'){
           document.getElementById("p").src='sherlok3.gif'
           document.getElementById("p").style.width ='180px'; 
           document.getElementById("p").style.top ='210px'; 
       }
       if( sessionStorage.getItem('t4')==='1' ){
           document.getElementById("p").src='super2.gif'
           document.getElementById("p").style.width ='230px'; 
           document.getElementById("p").style.left='20px'; 
       }
       if( sessionStorage.getItem('t5')==='1' ){
           document.getElementById("p").src='chch3.gif'
           document.getElementById("p").style.width ='190px'; 
           document.getElementById("p").style.top ='220px'; 
       }
    }
}
//document.getElementById("p2").style.visibility = 'visible'; 