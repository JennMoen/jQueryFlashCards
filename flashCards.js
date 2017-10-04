//simple array containing a bunch of objects with a question and answer property
var questions = [
    { q: "question1", a: "answer1" },
    { q: "question2", a: "answer2" },
    { q: "question3", a: "answer3" },
    { q: "question4", a: "answer4" },
    { q: "question5", a: "answer5" },
    { q: "question6", a: "answer6" }
];

$(document).ready(function() {

    //click on the button with the id of 'start-button' to display flash card questions
    $('#start-button').on('click', function() {

        //this just empties out the display div every time you start over so it can re-display the cards
        $('#display').empty();

        /*loop over the array of questions and assign the 'q' property of each
		question object to the card; also, I added the 'card' class, which is
		the styling that gives it the border and makes it look like a flash card.
		In addition, I added an "answer" attribute whose value is the answer property of each
		object, then I appended all these cards to the display div.*/
        for (var i = 0; i < questions.length; i++) {
            var card = $('<div>').addClass('card').text(questions[i].q).attr("answer", questions[i].a);
            $('#display').append(card);
        }

        /*each time you click on a card, it will change the text of the card to the answer value of each object
        (notice I'm calling on the "answer" attribute I added above to fetch that answer value);
        the reason I passed 'this' in is because it needs to target the specific card you click on--but don't worry, we'll 
        go over using 'this' in class later!*/
        $('.card').on('click', function() {
            var answer = ($(this).attr("answer"));
            $(this).text(answer);
        });

    });

});