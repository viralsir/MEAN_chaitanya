if(!localStorage.getItem("all_student")){
  localStorage.setItem("all_student",JSON.stringify([]));
}
document.getElementById("addbtn").onclick=function (){

  student={}
  student["rollno"]=document.getElementById("rno").value;
  student["name"]=document.getElementById("name").value;
  student["maths"]=document.getElementById("maths").value;
  student["sci"]=document.getElementById("sci").value;
  student["eng"]=document.getElementById("eng").value;

  let allstudent=JSON.parse(localStorage.getItem("all_student"));
  allstudent.push(student);
  localStorage.setItem("all_student",JSON.stringify(allstudent));

  alert("student is added");
  document.getElementById("rno").value="";
  document.getElementById("name").value="";
  document.getElementById("maths").value="";
  document.getElementById("sci").value="";
  document.getElementById("eng").value="";



}
