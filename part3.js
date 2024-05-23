/*
Your task is to write a script that accomplishes the following:
Loop through the characters of a given CSV string.
Store each “cell” of data in a variable.
When you encounter a comma, move to the next cell.
When you encounter the “\r\n” sequence, move to the next “row.”
Log each row of data.
You do not need to format the data, the following works well.
console.log(cell1, cell2, cell3, cell4);
You can make the following assumptions:
There will only be 4 cells per row.
There will be no escaped characters other than “\n”.
Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.
*/

const csv =
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

const rows = csv.split('\n');

for (row of rows) {
  const cells = row.split(',');

  const cell1 = cells[0];
  const cell2 = cells[1];
  const cell3 = cells[2];
  const cell4 = cells[3];

  console.log(cell1, cell2, cell3, cell4);
}
