let allstudent=JSON.parse(localStorage.getItem("all_student"));

let table=document.getElementById("result");
for (const student of allstudent)
{
  let tr=document.createElement("tr");
  let rno_td=document.createElement("td");
  let name_td=document.createElement("td");
  let maths_td=document.createElement("td");
  let sci_td=document.createElement("td");
  let eng_td=document.createElement("td");

  rno_td.innerHTML=student.rollno;
  name_td.innerHTML=student.name;
  maths_td.innerHTML=student.maths;
  sci_td.innerHTML=student.sci;
  eng_td.innerHTML=student.eng;

  tr.append(rno_td);
  tr.append(name_td);
  tr.append(maths_td);
  tr.append(sci_td);
  tr.append(eng_td);

  table.append(tr);


}
