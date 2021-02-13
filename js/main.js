document.addEventListener('DOMContentLoaded', function ()
{
    const nav = document.querySelector('.navbar')

    function addShadow()
    {
        if(window.scrollY >= 30)
            {
                nav.classList.add('shadow-bg')
            }
        else
            {
                nav.classList.remove('shadow-bg')
            }
    }
    window.addEventListener('scroll', addShadow)

    // skrypt odpowiadający za zamykanie się po kliknięciu w cokolwiek na urządzeniach mobilnych nawigacji
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

    // slickjs
    $('.guarantee-carousel').slick({
    //   setting-name: setting-value
        autoplay: true, 
        autoplaySpeed: 3500, 
        mobileFirst: true,  
        slidesToShow: 1, 
        slidesToScroll: 1, 
        responsive: [
            {
                breakpoint: 767, 
                settings: {
                    slidesToShow: 2
                }
            }, 
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 3
                }
            }, 
            {
                breakpoint: 1600, 
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });
});