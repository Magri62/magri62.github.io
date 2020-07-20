function searchFunction(x) {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("roster");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[x];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function searchPosition(x) {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("positionInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("roster");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

var text = ['Hello There', 
            'I\'m glad you found me',
            'I want to play a game..',
            'Are you ready to get started?']; //opening text

var teams = ['Toronto',
             'Hamilton',
             'Montreal',
             'Ottawa',
             'Winnipeg',
             'Edmonton',
             'Calgary',
             'Saskatchewan',
             'BC']; //team list 

var logos = {'Toronto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Argonauts_Logo.svg/600px-Argonauts_Logo.svg.png',
             'Hamilton': 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Hamilton_Tiger-Cats_logo.svg/1200px-Hamilton_Tiger-Cats_logo.svg.png',
              'Montreal': 'https://i.pinimg.com/originals/58/c6/50/58c65038c043895dee90db31176cf293.png',
              'Ottawa':'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Ottawa_Redblacks_logo.svg/1200px-Ottawa_Redblacks_logo.svg.png',
               'Winnipeg':'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Winnipeg_Blue_Bombers_Logo.svg/1200px-Winnipeg_Blue_Bombers_Logo.svg.png',
                'Edmonton':'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Edmonton_Eskimos_Logo.svg/1200px-Edmonton_Eskimos_Logo.svg.png',
                'Calgary':'https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Calgary_Stampeders_logo.svg/1200px-Calgary_Stampeders_logo.svg.png',
                'Saskatchewan':'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Saskatchewan_Roughriders_logo.svg/1200px-Saskatchewan_Roughriders_logo.svg.png',
                'BC':'https://upload.wikimedia.org/wikipedia/en/thumb/9/99/BC_Lions_logo.svg/1200px-BC_Lions_logo.svg.png'}; // logos

function team() {
var steams = "<option value ='0'>Select</option>";
for (i = 0; i < teams.length; i++){
    steams += "<option value = '"+teams[i]+"'>" + teams[i] + "</option>";
}
   document.getElementById('selectTeam').innerHTML = steams;
    console.log(steams);
    
}; //array of team names
function test(a){
    alert('you clicked me ' + a)
}
function roster(a) {

    switch (a) {

        case 1:
            x = '<thead class = "thead-dark"><tr><th data-attr="playerName">Name</th><th data-attr="status">Status</th><th data-attr="college">College</th><th data-attr="positon">Position</th><th data-attr="IMGt">Image</th></tr></thead>'
            for (i = 0; i < cflRoster.Argonauts.length; i++) {
                

                x += 
                    
                    '<tr>'
                    + '<td id = "playN">' +  cflRoster.Argonauts[i].NAME + "</td> "
                    + '<td>' + cflRoster.Argonauts[i]["A/N/G"] + "</td> "
                    + '<td>' + cflRoster.Argonauts[i].COLLEGE + '</td>'
                    + '<td>' + cflRoster.Argonauts[i].POS + '</td>'
                    + '<td>' + cflRoster.Argonauts[i].IMG + '</td>'
                    + '</tr>';
                
            } 
            break;
        case 2:
            x = '<thead class = "thead-dark"><tr><th data-attr="playerName">Name</th><th data-attr="status">Status</th><th data-attr="college">College</th><th data-attr="positon">Position</th><th data-attr="IMGt">Image</th></tr></thead>'
            for (i = 0; i < cflRoster.Eskimos.length; i++) {
                x += '<tr>'
                    + '<td>' + cflRoster.Eskimos[i].NAME + "</td> "
                    + '<td>' + cflRoster.Eskimos[i]["A/N/G"] + "</td> "
                    + '<td>' + cflRoster.Eskimos[i].COLLEGE + '</td>'
                    + '<td>' + cflRoster.Eskimos[i].POS + '</td>'
                    + '<td>' + cflRoster.Eskimos[i].IMG + '</td>'
                    + '</tr>';
                
            }
            break;
        case 3:
            x = '<thead class = "thead-dark"><tr><th data-attr="playerName">Name</th><th data-attr="status">Status</th><th data-attr="college">College</th><th data-attr="positon">Position</th><th data-attr="IMGt">Image</th></tr></thead>'
            for (i = 0; i < cflRoster.Montreal.length; i++) {
                x += '<tr>'
                    + '<td>' + cflRoster.Montreal[i].NAME + "</td> "
                    + '<td>' + cflRoster.Montreal[i]["A/N/G"] + "</td> "
                    + '<td>' + cflRoster.Montreal[i].COLLEGE + '</td>'
                    + '<td>' + cflRoster.Montreal[i].POS + '</td>'
                    + '<td>' + cflRoster.Montreal[i].IMG + '</td>'
                    + '</tr>';

            }
            break;
        case 4:
            x = '<thead class = "thead-dark"><tr><th data-attr="playerName">Name</th><th data-attr="status">Status</th><th data-attr="college">College</th><th data-attr="positon">Position</th><th data-attr="IMGt">Image</th></tr></thead>'
            for (i = 0; i < cflRoster.Ottawa.length; i++) {
                x += '<tr>'
                    + '<td>' + cflRoster.Ottawa[i].NAME + "</td> "
                    + '<td>' + cflRoster.Ottawa[i]["A/N/G"] + "</td> "
                    + '<td>' + cflRoster.Ottawa[i].COLLEGE + '</td>'
                    + '<td>' + cflRoster.Ottawa[i].POS + '</td>'
                    + '<td>' + cflRoster.Ottawa[i].IMG + '</td>'
                    + '</tr>';

            }
            break;
        case 5:
            x = '<thead class = "thead-dark"><tr><th data-attr="playerName">Name</th><th data-attr="status">Status</th><th data-attr="college">College</th><th data-attr="positon">Position</th><th data-attr="IMGt">Image</th></tr></thead>'
            for (i = 0; i < cflRoster.Calgary.length; i++) {
                x += '<tr>'
                    + '<td>' + cflRoster.Calgary[i].NAME + "</td> "
                    + '<td>' + cflRoster.Calgary[i]["A/N/G"] + "</td> "
                    + '<td>' + cflRoster.Calgary[i].COLLEGE + '</td>'
                    + '<td>' + cflRoster.Calgary[i].POS + '</td>'
                    + '<td>' + cflRoster.Calgary[i].IMG + '</td>'
                    + '</tr>';

            }
            break;
        case 6:
            x = '<thead class = "thead-dark"><tr><th data-attr="playerName">Name</th><th data-attr="status">Status</th><th data-attr="college">College</th><th data-attr="positon">Position</th><th data-attr="IMGt">Image</th></tr></thead>'
            for (i = 0; i < cflRoster.Winnipeg.length; i++) {
                x += '<tr>'
                    + '<td>' + cflRoster.Winnipeg[i].NAME + "</td> "
                    + '<td>' + cflRoster.Winnipeg[i]["A/N/G"] + "</td> "
                    + '<td>' + cflRoster.Winnipeg[i].COLLEGE + '</td>'
                    + '<td>' + cflRoster.Winnipeg[i].POS + '</td>'
                    + '<td>' + cflRoster.Winnipeg[i].IMG + '</td>'
                    + '</tr>';

            }
            break;
        
        case 7:
            x = '<thead class = "thead-dark"><tr><th data-attr="playerName">Name</th><th data-attr="status">Status</th><th data-attr="college">College</th><th data-attr="positon">Position</th><th data-attr="IMGt">Image</th></tr></thead>'
            for (i = 0; i < cflRoster.Saskatchewan.length; i++) {
                x += '<tr>'
                    + '<td>' + cflRoster.Saskatchewan[i].NAME + "</td> "
                    + '<td>' + cflRoster.Saskatchewan[i]["A/N/G"] + "</td> "
                    + '<td>' + cflRoster.Saskatchewan[i].COLLEGE + '</td>'
                    + '<td>' + cflRoster.Saskatchewan[i].POS + '</td>'
                    + '<td>' + cflRoster.Saskatchewan[i].IMG + '</td>'
                    + '</tr>';

            }
            break;
            

    
            case 8:
                    x = '<thead class = "thead-dark"><tr><th data-attr="playerName">Name</th><th data-attr="status">Status</th><th data-attr="college">College</th><th data-attr="positon">Position</th><th data-attr="IMGt">Image</th></tr></thead>'
                    for (i = 0; i < cflRoster.Hamilton.length; i++) {
                        x += '<tr>'
                            + '<td>' + cflRoster.Hamilton[i].NAME + "</td> "
                            + '<td>' + cflRoster.Hamilton[i]["A/N/G"] + "</td> "
                            + '<td>' + cflRoster.Hamilton[i].COLLEGE + '</td>'
                            + '<td>' + cflRoster.Hamilton[i].POS + '</td>'
                            + '<td>' + cflRoster.Hamilton[i].IMG + '</td>'
                            + '</tr>';

                    }
                    break;
            case 9:
                    x = '<thead class = "thead-dark"><tr><th data-attr="playerName">Name</th><th data-attr="status">Status</th><th data-attr="college">College</th><th data-attr="positon">Position</th><th data-attr="IMGt">Image</th></tr></thead>'
                    for (i = 0; i < cflRoster.BC.length; i++) {
                        x += '<tr>'
                            + '<td>' + cflRoster.BC[i].NAME + "</td> "
                            + '<td>' + cflRoster.BC[i]["A/N/G"] + "</td> "
                            + '<td>' + cflRoster.BC[i].COLLEGE + '</td>'
                            + '<td>' + cflRoster.BC[i].POS + '</td>'
                            + '<td>' + cflRoster.BC[i].IMG + '</td>'
                            + '</tr>';

                    }
                    break;


            }        
            $('myInput').fadeIn(300);
            $('#roster').show(3000).html(x);       
};

function main(){

    $('#selectTeam').fadeIn(300);
        $('#cflSubmit').show();
        $('#cflSubmit').click(function(){
        var cflTeam = document.getElementById('selectTeam').value;
        $('#next').hide();
        $('#title').hide(2000);
        $('#next').fadeIn(300).html('You picked ' + cflTeam);
           


        console.log(cflTeam);
            //var list = "";
            switch (cflTeam) {


            case 'Toronto':
                
                roster(1);
                $('#imgHeader').fadeIn(300).attr('src',logos.Toronto);
                break;

            case 'Hamilton':
                roster(8);
                $('#imgHeader').attr('src',logos.Hamilton);
                break;
            case 'Montreal':
                roster(3);
                $('#imgHeader').attr('src',logos.Montreal);
                break;
            case 'Ottawa':
                roster(4);
                $('#imgHeader').attr('src',logos.Ottawa);
                break;
            case 'Winnipeg':
                roster(6);
                $('#imgHeader').attr('src',logos.Winnipeg);
                break;
            case 'Edmonton':
                roster(2);
                $('#imgHeader').attr('src',logos.Edmonton);
                break;
            case 'Calgary':
                roster(5);
                $('#imgHeader').attr('src',logos.Calgary);
                break;
            case 'Saskatchewan':
                roster(7);
                $('#imgHeader').attr('src',logos.Saskatchewan);
                break;
            case 'BC':
                roster(9);
                $('#imgHeader').attr('src',logos.BC);
                break;};
                            
                           
                          
                         
    });
};

$('#title').html('Pick a team to get started');
                  

main();
team();

   