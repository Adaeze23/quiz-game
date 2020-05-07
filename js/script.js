// all questions
const questions = [
	{
		question: `Who is president of United State?`,
		options: ["Benny", "Mike", "Trump", "Obama"],
		answer: `Trump`
	},
	{
		question: `What continent is Nigeria located?`,
		options: ["Africa", "Asia", "Europe", "North America"],
		answer: `Africa`
	},
	{
		question: `What is a CPU?`,
		options: ["Centeral Processing Unit", "Cost Production Unit", "Cost Present Unit", "Cat Plant United"],
		answer: `Centeral Processing Unit`
	}
]

var start_test = false;

if(start_test == false){
	// load all questions
	loadAllQuestion(questions);
	showCurrentQuestion(id = 1);
}else{
	// show intro

}

function loadAllQuestion(questions){

	$("#all-questions").html("");
	var sn = 0;

	$.each(questions, function(index, val) {
		sn++;

		console.log(index);
		console.log(val);

		$("#all-questions").append(`
			<ul class="list-group" id="question_${sn}" style="display: none;">
				<li class="list-group-item active">${val.question}</li>
			</ul>
			<ul class="list-group" id="question_${sn}"></ul>
	        <br />
		`);

		$.each(val.options, function(key, option){
			$(`#question_${sn}`).append(`
				<li class="list-group-item"><input type="radio" name="">${option}</li>
			`)
		});
	});

	$("#next-btn-div").html(`
		<a href="javascript:void(0);" onclick="showNextQuestion()" class="btn btn-primary"> Next </a>
	`);
}

function showCurrentQuestion(id) {
	$(`#question_${id}`).show();	
}

function showNextQuestion() {
	// body...
	var prev = 1;
	var next = prev + 1;

	$(`#question_${prev}`).hide();
	$(`#question_${next}`).show();
	// showCurrentQuestion(id);
}