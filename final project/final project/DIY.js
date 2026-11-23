$("#easel").click(function() {
    window.location.href = "painting.html";
});

$("#table").click(function() {
    window.location.href = "sculpting.html";
});


 // light turns on and off

let lightsOn = true;


// hover over light

$("#light").hover(

    function() {

        if (lightsOn === true) {
            $("#hover-text").text("Turn Off the Lights");
        } else {
            $("#hover-text").text("Turn On the Lights");
        }

        $(this).css("filter", "brightness(1)");

    },

    function() {

        $("#hover-text").text("");

        $(this).css("filter", "");

    }

);


// click light

$("#light").click(function() {

    lightsOn = !lightsOn;

    $("#darkness").toggle();

    if (lightsOn === true) {
        $("#hover-text").text("Turn Off the Lights");
    } else {
        $("#hover-text").text("Turn On the Lights");
    }

});


 // hover over first easel

$("#easel").hover(

    function() {

        $("#hover-text").text("Paint");

        $(this).css("filter", "brightness(1) drop-shadow(0 0 15px white)");

    },

    function() {

        $("#hover-text").text("");

        $(this).css("filter", "");

    }

);

// hover over second easel

$("#easel2").hover(

    function() {

        $("#hover-text").text("Draw");

        $(this).css("filter", "brightness(1) drop-shadow(0 0 15px white)");

    },

    function() {

        $("#hover-text").text("");

        $(this).css("filter", "");

    }

);


// hover over table

$("#table").hover(

    function() {

        $("#hover-text").text("Smush clay");

        $(this).css("filter", "brightness(1) drop-shadow(0 0 15px white)");

    },

    function() {

        $("#hover-text").text("");

        $(this).css("filter", "");

    }

);
