/* <table>
<tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
</tr>
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
</table> */

const div = document.querySelector(".container");
const table = document.createElement("table");
div.appendChild(table);
const tr = document.createElement("tr");
table.appendChild(tr);
table.className="table table-bordered border-primary text-light bg-dark border-3"

/*thead */
let head = ["St Nr", "First Name", "Last Name", "Location", "Path"];

for (let i = 0; head.length > i; i++) {
  const th = document.createElement("th");
  th.innerHTML = head[i];
  tr.appendChild(th);
}
/*---------td -------------*/
let students = [
  "C1234 - John Doe, London, Full-Stack",
  "C2345 - Jane Doe, London, Data-Science",
  "C2346 - Mary Ann, Paris, AWS-Devops",
  "C2347 - Adam Smith, Texas, AWS-Devops",
  "C2444 - Michael Great, Arizona, Full-Stack",
  "C2555 - William Cash, Manchester, Data-Science",
  "C2455 - Patrick Jane, Madrid, Full-Stack",
];
let result;
for (let i = 0; i < students.length; i++) {
  result = students[i].split(" ");
  

  result.splice(1, 1);

  // console.log(result);

  let stNr = result[0];

  let firstName = result[1];
  let lastName = result[2].split(",")[0];
  let location1 = result[3].split(",")[0];
  let path = result[4];

  // *************row*************
  let row = document.createElement("tr");

  // Create cells
  let stNrCell = document.createElement("td");
  stNrCell.innerHTML = stNr;
  let firstNameCell = document.createElement("td");
  firstNameCell.innerHTML = firstName;
  let lastNameCell = document.createElement("td");
  lastNameCell.innerHTML = lastName;
  let locationCell = document.createElement("td");
  locationCell.innerHTML = location1;
  let pathCell = document.createElement("td");
  pathCell.innerHTML = path;

  // Append the cells to the row
  row.appendChild(stNrCell);
  row.appendChild(firstNameCell);
  row.appendChild(lastNameCell);
  row.appendChild(locationCell);
  row.appendChild(pathCell);
  table.appendChild(row);
  
}


