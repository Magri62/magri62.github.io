function sendEmail() {
Email.send({
    SecureToken : '89538345-ac4e-40d6-ad43-bae62046236d',
    Host : "smtp.elasticemail.com",
    Username : "jonathan.magri1@gmail.com",
    Password : "7356d6a8-aa62-4899-b94c-351e9f5f0756",
    To : 'jonathan.magri1@gmail.com',
    From : "jonathan.magri1@gmail.com",
    Subject : "Test email",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
}).then(message => alert(message));
}
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
async function transaction(){
proxy = 'https://cors-anywhere.herokuapp.com/';
ID = "key=8vQxQpKGwMo8BWaLj22HcxTtaCcfMOR3"
PAGE = 1//&page[number]=1&page[size]=100
SIZE = 100
fetch(proxy + 'http://api.cfl.ca/v1/transactions/2020?'+ ID +'&page[number]=' + PAGE + '&page[size]=' + SIZE )
    .then(function(resp){
    return (resp.json())
    .then(function(obj){
         console.log(obj.data[0].first_name);
         transactions = '<thead class = "thead-dark"><tr><th onclick = "sortTable(0)" >First</th><th onclick = "sortTable(1)">Last</th><th onclick = "sortTable(2)">From</th><th onclick = "sortTable(3)">To</th><th onclick = "sortTable(4)">Transaction Date<th onclick = "sortTable(5)">School</th><th onclick = "sortTable(6)">Status</th><th onclick = "sortTable(7)">Action</th></tr></thead>'
         for(i = 0; i < 100; i++){
        transactions += '<tr><td>' +obj.data[i].first_name 
                    + '</td><td>' + obj.data[i].last_name 
                    + '</td><td>' +obj.data[i].from_team_abbreviation
                    +'</td><td>'+ obj.data[i].to_team_abbreviation
                    + '</td><td>'+ obj.data[i].transaction_date 
                    + '</td><td>' + obj.data[i].school_name 
                    + '</td><td>' + obj.data[i].new_status_description
                    + '</td><td>' + obj.data[i].action_description
                    + '</td><td></tr>';

         }
        //}
       document.getElementById('table').innerHTML = transactions 
       //document.getElementById('outPut2').innerHTML = firstw + ' ' + '<br>' + secondw + '<br>' + thirdw + '<br>' + forthw
 
    })
    })

console.log('hello world')
}
transaction()