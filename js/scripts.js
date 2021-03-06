$(document).ready(function() {
    document.getElementById("form1").onsubmit = function() {
        window.scrollTo(500, 0);
        q1 = parseInt(document.querySelector('input[name = "q1"]:checked').value);
        q2 = parseInt(document.querySelector('input[name = "q2"]:checked').value);
        q3 = parseInt(document.querySelector('input[name = "q3"]:checked').value);
        q4 = parseInt(document.querySelector('input[name = "q4"]:checked').value);
        q5 = parseInt(document.querySelector('input[name = "q5"]:checked').value);
        q6 = parseInt(document.querySelector('input[name = "q6"]:checked').value);
        total = q1 + q2 + q3 + q4 + q5 + q6;

        if (total < 10) {
            event.preventDefault();
            $("#answer1, #form1, #back").toggle();
        } else if (total >= 10 && total < 14) {
            event.preventDefault();
            $("#answer2, #form1, #back").toggle();
        } else if (total >= 14) {
            event.preventDefault();
            $("#answer3, #form1, #back").toggle();
        }
    }
    document.getElementById("back").onclick = function() {
        $("#form1, #back").toggle();
        $("#answer1, #answer2, #answer3").hide();
        $('input[type="radio"]').prop('checked', false);
        window.scrollTo(0, 0);
    }
});