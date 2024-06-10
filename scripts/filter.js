function openFilter() {
    filter = document.getElementById('dropdown-content')
    if (filter.className === "dropdown-content") {
        filter.className += " dropdown-visable"
    } else {
        filter.className = "dropdown-content"
    }
}

var form = document.getElementById('form');
var html = document.getElementById('HTML').checked;
var css = document.getElementById('CSS').checked;
var js = document.getElementById('JavaScript').checked;
var php = document.getElementById('PHP').checked;
var front_end = document.getElementById('front-end').checked;
var back_end = document.getElementById('back-end').checked;

form.addEventListener('input', function (e) {
    html = document.getElementById('HTML').checked;
    css = document.getElementById('CSS').checked;
    js = document.getElementById('JavaScript').checked;
    front_end = document.getElementById('front-end').checked;
    if (!html&&!css&&!js&&!front_end) {
        var cards = document.getElementsByClassName('project-card');
        for (i=0;i<cards.length;i++) {
            cards[i].style.display = "block";
        }
    } else {
        var cards = document.getElementsByClassName('project-card');
        for (i=0;i<cards.length;i++) {
            cards[i].style.display = "none";
        }
        if (html) {
            var html_cards = document.getElementsByClassName('HTML');
            for (i=0;i<html_cards.length;i++) {
                html_cards[i].style.display = "block";
            }
        }
        if (css) {
            var css_cards = document.getElementsByClassName('CSS');
            for (i=0;i<css_cards.length;i++) {
                css_cards[i].style.display = "block";
            }
        }
        if (js) {
            var js_cards = document.getElementsByClassName('JavaScript');
            for (i=0;i<js_cards.length;i++) {
                js_cards[i].style.display = "block";
            }
        }
        if (php) {
            var php_cards = document.getElementsByClassName('PHP');
            for (i=0;i<php_cards.length;i++) {
                php_cards[i].style.display = "block";
            }
        }
        if (front_end) {
            var front_end_cards = document.getElementsByClassName('front-end');
            for (i=0;i<front_end_cards.length;i++) {
                front_end_cards[i].style.display = "block";
            }
        }
        if (back_end) {
            var back_end_cards = document.getElementsByClassName('back-end');
            for (i=0;i<back_end_cards.length;i++) {
                back_end_cards[i].style.display = "block";
            }
        }
    }
})