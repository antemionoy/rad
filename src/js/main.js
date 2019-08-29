//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js


"use strict";



function yaMap() {

    if($('#map').length){

        ymaps.ready(init);
        var myMap,
        myPlacemark = [];

        function init(){
            myMap = new ymaps.Map("map", {
                center: [59.930519, 30.313552],
                zoom: 13,
                controls: ['zoomControl'],
                behaviors: ['drag']
            });

            myPlacemark[0] = new ymaps.Placemark([59.930519, 30.313552], {
                hintContent: 'Москва',
                balloonContentHeader: 'Санкт-Петербург, пер. Гривцова д. 5, лит. В',
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'https://auction-house.ru/static/img/logo.svg',
                iconImageSize: [90, 90],
                iconImageOffset: [-45, -45]
            });


            for (var i = 0; i < myPlacemark.length; i++) {
                myMap.geoObjects.add(myPlacemark[i]);
            };

        }

    }

}


function tabsChange() {

    var tabTriggerBtns = document.querySelectorAll('.menu__btn-js');

    tabTriggerBtns.forEach(function(tabTriggerBtn, index) {

        tabTriggerBtn.addEventListener('click', function(e) {
            e.preventDefault();

            var currentTabData = document.querySelector('.content-js[data-tab-content="' + this.dataset.tabCategory + '"]');

            console.log(this.dataset.tabCategory);

            if(currentTabData){
                // remove classess
                document.querySelector('.content-js.is-open').classList.remove('is-open');
                document.querySelector('.menu__btn-js.is-active').classList.remove('is-active');
                // add classes
                currentTabData.classList.add('is-open');
                this.classList.add('is-active');
            }


        });
    });

}

function scrollToElement(classItem) {
        jQuery(classItem).on("click", function(t) {
            t.preventDefault();
            var e = jQuery(jQuery(this).attr("href"));

            jQuery("body,html").animate({ scrollTop: e.offset().top }, 800);
    });
}


$(function() {

    scrollToElement('.tags__link');

    tabsChange();

    yaMap();

    $('.digest__carousel').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        dots: false,
        margin: 20,
        slideBy: 1,
        items: 1,
        center: false,
        responsiveClass: true,
        responsive: {

            320: {
                items: 2,
            },

            480: {
                items: 3,
            },

            768: {
                items: 4,

            },

            1023: {
                items: 5,
            }
        }
    });

});




















