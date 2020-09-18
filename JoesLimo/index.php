<html>
<!-- CSS only -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

<!-- JS, Popper.js, and jQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>
<script type="text/javascript"src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>

<style>
    body{background-color: #191919;
         color: white;}
    p{color:white;}
    a{color:black;}
    a:hover{color:black;}
    h1 {text-align: center;
        background-color: white;
        color: black;
        padding-top: 30px;
        padding-bottom: 30px;
        font-size: 60px;
    }
    nav {background-color: #191919;
         font-family: Impact;}
    #topheader{color:white;
               font-size: 50px;}
    img {width: 10%}
    .hidden {display: none;}
    #aboutUsInfo {text-align: center;}
    #servicesInfo {text-align: center;}
    @media (min-width: 600px) {
    .container{
        max-width: 1000px;
    }}
    #list-group-flush{background-color: black;}
   
</style>
<body>
    <?php 
    include 'test.php';
    $a = 'Hello World';
    str_replace('World','Jon',$a);
    echo $a
    ?>
<form class = 'contact-form'action= "functions.php" method = 'post'>
    <input type="text" name="name" placeholder="Full Name">
    <input type="text" name="mail" placeholder="Your Email">
    <input type="text" name="subject" placeholder="subject">
    <textarea name ='message' placeholder ="Message"></textarea>
    <button type ='Submit' name ='Submit'> Send Mail</button>
</form>
<div id = 'aboutUSInfo' class = 'hidden'>
<div class = 'container'>
    <div class = col-sm>
        <p>This is a smaple of what you would put in your About Us section</p>
    </div>
    </div>
</div>
<div id = 'servicesInfo' class = 'hidden'>
<div class = 'container'>
    <div class = col-sm>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">WEDDINGS</li>
    <li class="list-group-item">PROMS</li>
    <li class="list-group-item">AIRPORT PICKUP/DROP OFF</li>
    <li class="list-group-item">PARTIES</li>
    <li class="list-group-item">CONCERTS</li>
    <li class="list-group-item">NIGHT OUT</li>
        </ul>
        <br>
    </div>
    </div>

</div>
   <!--  <div class = 'container'>
        <div class = 'row'>
            <div class = 'col'>
                    <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src='concert.jpg' alt="First slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="party.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="airPort.jpg" alt="Third slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="toronto.jpg" alt="Third slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="wedding.jpg" alt="Third slide">
                    </div>
                    </div>
                </div></div></div></div> -->
   

    </body>
<script>

$("#aboutUS").on("click", function(){
    $("#servicesInfo").hide();
    $("#contactInfo").hide()
    $('#aboutUSInfo').fadeIn().removeClass('hidden');
});
$("#ourServices").on("click", function(){
    $("#aboutUSInfo").hide();
    $("#contactInfo").hide()
    $('#servicesInfo').fadeIn().removeClass('hidden');
    ;
});
$('.carousel').carousel({
  interval: 2000
})
</script>
           
</html>
