$("#bastard").click(function(e){
    var firstNameA = ["Terri", "Terre", "Terro", "Tele", "Tech", "Titty", "Toots", "Teen", "Tear", "Tella", "Tackle", "Trance", "Turn", "Turtle", "Tetra", "Tweako"];
    var firstNameB = ["tosh", "fuck", "ass", "train", "anus", "mance", "scoots", "rave", "pence", "pants", "tubby", "box", "adactyl", "duck", "vibe", "moncule", "crotch", "dance"];

    var lastNameA = ["McPickle", "McDongle", "McMushroom", "McAss", "McDildo", "McBoner", "McFuck", "McScrotum", "McNBOMB", "McStonedApe", "McDingDong", "McSmart", "McDog"];
    var lastNameB = ["Shit", "Buttlicker", "Fuck", "DiMiTri", "Cunt", "Queef", "Bartard", "Face", "Antenna", "Testicle"];

    var name = "";
    name += firstNameA[Math.floor(Math.random()*firstNameA.length)];
    name += firstNameB[Math.floor(Math.random()*firstNameB.length)];
    name += " ";
    name += lastNameA[Math.floor(Math.random()*lastNameA.length)];
    name += lastNameB[Math.floor(Math.random()*lastNameB.length)];
    
    $("#name").fadeOut(250, function(e){
        $("#name").html(name);
        $("#name").fadeIn(250);
    });

    //$("#name").html(name);
});


$(document).ready(function() {
     $( "#main-content" ).addClass("intro");
    
});