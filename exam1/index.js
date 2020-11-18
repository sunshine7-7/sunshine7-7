function Popup__init(no) {
    $('.btn-show-popup-' + no).click(function () {
        $('.popup-' + no).addClass('active');

        $('html').addClass('popup-' + no + '-actived');
    });

    $('.popup-' + no + ' .content-box > .head > .btn-close, .popup-' + no).click(function () {
        $('.popup-' + no).removeClass('active');

        $('html').removeClass('popup-' + no + '-actived');
    });

    $('.popup-' + no + ' > .content-box').click(function (e) {
        e.stopPropagation();
    });
}

Popup__init(1);
Popup__init(2);