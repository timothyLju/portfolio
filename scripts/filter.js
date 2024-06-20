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
var front_end = document.getElementById('front-end').checked;
var python = document.getElementById('Python').checked;
var ml_ai = document.getElementById('ml_ai').checked;

form.addEventListener('input', function (e) {
    html = document.getElementById('HTML').checked;
    css = document.getElementById('CSS').checked;
    js = document.getElementById('JavaScript').checked;
    front_end = document.getElementById('front-end').checked;
    python = document.getElementById('Python').checked;
    ml_ai = document.getElementById('ml_ai').checked;
    if (!html&&!css&&!js&&!front_end&&!python&&!ml_ai) {
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
        if (front_end) {
            var front_end_cards = document.getElementsByClassName('front-end');
            for (i=0;i<front_end_cards.length;i++) {
                front_end_cards[i].style.display = "block";
            }
        }
        if (python) {
            var python_cards = document.getElementsByClassName('python');
            for (i=0;i<python_cards.length;i++) {
                python_cards[i].style.display = "block";
            }
        }
        if (ml_ai) {
            var ml_ai_cards = document.getElementsByClassName('ml_ai');
            for (i=0;i<ml_ai_cards.length;i++) {
                ml_ai_cards[i].style.display = "block";
            }
        }
    }
})