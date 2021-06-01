$(document).ready(function() {


    $(".owl-container .owl-carousel").owlCarousel({
        items: 6,
        rtl: false,
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        mouseDrag: true,
        touchDrag: true,
        autoplayTimeout: 1500,
        responsive: {
            320: {
                items: 1,
            },
            425: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
        },
    });
})

function increase() {
    var a = 1;
    var textBox = document.getElementById("text");
    textBox.value++;

}

function decrease() {
    var textBox = document.getElementById("text");
    textBox.value--;
}

$(document).ready(function() {
    var $textbox = $("#incdec input");

    $("#up").click(function() {
        var value = parseInt($textbox.val(), 10);

        $textbox.val(value + 1);
    });

    $("#down").click(function() {
        var value = parseInt($textbox.val(), 10);

        if (value > 0) {
            $textbox.val(value - 1);
        }
    });
});