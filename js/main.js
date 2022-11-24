$(document).ready(function () {
    // wow.js
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    // pop-up
    $('.popup-img').magnificPopup({
        type: 'image'
    });

    // slider
    $('.slider').slick({
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    arrows: false
                },
            },
        ],
    });

    // accordion
    $(".accordion").accordion();

    // Валидация формы
    let input = $('.input-form');
    let inputIndex = input.eq(4);

    // Валидация формы
    inputIndex.keypress(function (i) {
        let result = parseInt(i.originalEvent.key);
        if (isNaN(result)) {
            i.preventDefault();
            alert("В поле индекс можно вводить только цифры");
        }
        if (inputIndex.val().length >= 6) {
            i.preventDefault();
            alert("Индекс должен содержать 6 символов");
        }

    });

    $('.button').click(function () {
        for (let i = 0; i < input.length; i++) {
            if (!input[i].value) {
                alert("Заполните поле " + input[i].previousElementSibling.innerHTML + "!");
                return;
            } else if (i === 4) {
                if (inputIndex.val().length < 6) {
                    alert("Индекс должен содержать 6 символов");
                    return;
                }
            }
        }
        $('#forms').hide();
        $('#success').removeClass('d-none');
    })

})
