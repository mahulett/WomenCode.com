// Put all your page JS here

$(function () {
    $('#slickQuiz').slickQuiz();
});

//Change background color when quiz option is selected.
$('.quizArea').on('click', '.quizLabel', function() {
	$('.quizLabel').not(this).removeClass('label-highlight');
	$(this).addClass('label-highlight');
});