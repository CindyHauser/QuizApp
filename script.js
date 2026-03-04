let questions = [
    {
        "question": "Was bedeutet der Begriff Calisthenics?",
        "answer_1": "Training mit Maschinen",
        "answer_2": "Kraftraining mit eigenem Körpergewicht",
        "answer_3": "Olympisches Gewichtheben",
        "answer_4": "Sprinttraining",
        "right_answer": 2
    },
    {
        "question": "Welche Übung gilt als klassische Push-Übung im Calisthenics?",
        "answer_1": "Klimmzug",
        "answer_2": "Plank",
        "answer_3": "Liegestütz",
        "answer_4": "Hanging Leg Raises",
        "right_answer": 3
    },
    {
        "question": "Welche Muskelgruppe wird bei einem Klimmzug hauptsächlich trainiert?",
        "answer_1": "Brust",
        "answer_2": "Latissimus",
        "answer_3": "Waden",
        "answer_4": "Schulter",
        "right_answer": 2
    },
    {
        "question": "Welche Übung ist eine typische Core-Übung im Calisthenics?",
        "answer_1": "Handstand",
        "answer_2": "Pistol Squat",
        "answer_3": "Dips",
        "answer_4": "Plank",
        "right_answer": 4
    },
    {
        "question": "Was ist ein 'Muscle-Up'?",
        "answer_1": "Ein explosiver Übergang von einem Klimmzug in den Dip",
        "answer_2": "Ein besonders langsamer Liegestütz",
        "answer_3": "Einbeinige Kniebeuge",
        "answer_4": "Eine schwere Bauchmuskelübung",
        "right_answer": 1
    },
    {
        "question": "Welche Übung erfordert besonders viel Gleichgewicht?",
        "answer_1": "Handstand",
        "answer_2": "Crunch",
        "answer_3": "Squat",
        "answer_4": "Ausfallschritt",
        "right_answer": 1
    },
    {
        "question": "Was ist ein 'Pistol Squat'?",
        "answer_1": "Eine explosive Sprungkniebeuge",
        "answer_2": "Eine Kniebeuge mit Zusatzgewicht",
        "answer_3": "Eine einbeinige Kniebeuge",
        "answer_4": "Eine Kniebeuge an der Wand",
        "right_answer": 3
    },
    {
        "question": "Was braucht man im Calisthenics mindestens?",
        "answer_1": "Hantelset",
        "answer_2": "Gute Geräte",
        "answer_3": "Einen Trainer",
        "answer_4": "Das eigene Körpergewicht",
        "right_answer": 4
    }
];

let currentQuestion = 0;

function init() {
    questionsLenght();
    showQuestion()
}

function questionsLenght() {
    let questionsAmountRef = document.getElementById('questionsAmount');
    questionsAmountRef.innerHTML = questions.length;
};

function showQuestion() {
    let question = questions[currentQuestion];
    let questiontextRef = document.getElementById('questiontext');
    let answer_1Ref = document.getElementById('answer_1');
    let answer_2Ref = document.getElementById('answer_2');
    let answer_3Ref = document.getElementById('answer_3');
    let answer_4Ref = document.getElementById('answer_4');

    questiontextRef.innerHTML = question['question'];
    answer_1Ref.innerHTML = question['answer_1'];
    answer_2Ref.innerHTML = question['answer_2'];
    answer_3Ref.innerHTML = question['answer_3'];
    answer_4Ref.innerHTML = question['answer_4'];
}

function answer(selectAnswer) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selectAnswer.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selectAnswer).parentNode.classList.add('bg-success');  // 'parentNode'-> to give the parent element this class
    } else {
        document.getElementById(selectAnswer).parentNode.classList.add('bg-danger');          
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');          
    }
    // console.log('That is the Number of the answer', selectedQuestionNumber);
    // console.log('select is', selectAnswer);
    // console.log('Right answer:', question['right_answer']);
}