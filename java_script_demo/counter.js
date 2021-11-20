 let cnt=0;   // globle variable
    function counter(){
      //let cnt=0; // local variable
      document.getElementById("result").innerHTML=`count is ${cnt}`;
      //alert(`count is  ${cnt}`);
      cnt++;
    }
    document.addEventListener('DOMContentLoaded',()=>{
        document.getElementById("cntbtn").onclick=counter;
    });
