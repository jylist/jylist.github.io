$(document).ready(function(){
    setTimeout(function(){
        $("#fade-black").fadeTo(300, 1);
        $('#title').delay(300).queue(function (next) { $(this).css("background-image", "url('gifpause.png'"); next(); });
        $("#fade-black").fadeOut(300, 0);
    }, 5400);
});