//http://api.cfl.ca/v1/transactions/2020?key=8vQxQpKGwMo8BWaLj22HcxTtaCcfMOR3&page[number]=1&page[size]=100
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
         transactions = '<thead class = "thead-dark"><tr><th >First</th><th>Last</th><th>From</th><th>To</th><th>Transaction Date<th>School</th></tr></thead>'
         for(i = 1; i < 100; i++){
        transactions += '<tr><td>' +obj.data[i].first_name 
                    + '</td><td>' + obj.data[i].last_name 
                    + '</td><td>' +obj.data[i].from_team_abbreviation
                    +'</td><td>'+ obj.data[i].to_team_abbreviation
                    + '</td><td>'+ obj.data[i].transaction_date 
                    + '</td><td>' + obj.data[i].school_name 
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