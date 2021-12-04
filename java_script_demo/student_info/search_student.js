document.getElementById("searchbtn").onclick=function (){

  let sr_rno=document.getElementById("sr_rno").value;
  let table=document.getElementById("result");
  let tableheading=` <tr>
    <th>Roll No</th>
    <th> Name </th>
    <th> Maths</th>
    <th> Science</th>
    <th> English</th>
  </tr>`;
  table.innerHTML=tableheading;
  let allstudent=JSON.parse(localStorage.getItem("all_student"));
  let std=allstudent.find((student)=>student.rollno==sr_rno);

  console.log(std);
  if(std==undefined)
  {
    table.innerHTML='<tr><td colspan="5">Invalid Roll No </td></tr>';
  }
  else{
         let tr=document.createElement("tr");
          let rno_td=document.createElement("td");
          let name_td=document.createElement("td");
          let maths_td=document.createElement("td");
          let sci_td=document.createElement("td");
          let eng_td=document.createElement("td");

          rno_td.innerHTML=std.rollno;
          name_td.innerHTML=std.name;
          maths_td.innerHTML=std.maths;
          sci_td.innerHTML=std.sci;
          eng_td.innerHTML=std.eng;

          tr.append(rno_td);
          tr.append(name_td);
          tr.append(maths_td);
          tr.append(sci_td);
          tr.append(eng_td);

          table.append(tr);

  }

  /*for (const student of allstudent)
  {
      if(sr_rno==student.rollno)
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

  }
*/
}
