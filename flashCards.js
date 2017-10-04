//simple array containing a bunch of objects with a question and answer property
var questions = [
    { q: "What JS data type always goes in quotes?", a: "string" },
    { q: "What does it mean if a variable is undefined?", a: "It has not been assigned a value" },
    { q: "An object contains ____:____ pairs to represent its properties", a: "key:value" },
    { q: "If you used jQuery to target a div tag with the id of 'myDiv', how would you do it?", a: "$('#myDiv')" },
    { q: "What will the outcome of 4 % 2 be?", a: "0--modulus represents the remainder after dividing the 2 numbers" },
    { q: "Who is the Queen of the Universe?", a: "Jennifer Moen" }
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