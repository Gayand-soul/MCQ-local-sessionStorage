
const questions = [
    {
        question: "Vad är localStorage i JavaScript?",
        answers: [
            {text:"Web APIs för att hämta/manipulera data", correct: false},
            {text:"Ett sätt att lagra data i webbläsaren som finns kvar även efter att sidan stängs", correct: true},
            {text:"Att spara lokalt i hårddisk", correct: false},
            {text:"En metod för att lagra cookies", correct: false},
        ]
    },
    {
        question: "Vad är sessionStorage i JavaScript?",
        answers: [
            {text:"Web APIs för att skicka data", correct: false},
            {text:"Ett sätt att lagra data i webbläsaren som bara finns kvar under aktuell session", correct: true},
            {text:"Ett API för att spara data i en databas", correct: false},
            {text:"Ett verktyg för att lagra data permanent i webbläsaren", correct: false},
        ]

    },
    {
        question: "Vilken metod används för att lagra data i localStorage?",
        answers: [
            {text:"storeItem()", correct: false},
            {text:"setItem()", correct: true},
            {text:"saveItem()", correct: false},
            {text:"putItem()", correct: false},
        ]

    },
    {
        question: "Hur hämtar du en sparad nyckel från localStorage?",
        answers: [
            {text:"localStorage.getItem('key')", correct: true},
            {text:"localStorage.fetchItem('key')", correct: false},
            {text:"localStorage.retrieveItem('key')", correct: false},
            {text:"localStorage.loadItem('key')", correct: false},
        ]

    },
    {
        question: "Vad händer om du försöker hämta en nyckel som inte finns i localStorage?",
        answers: [
            {text:"Det kastas ett fel (error)", correct: false},
            {text:"Returnerar undefined", correct: false},
            {text:"Returnerar en tom sträng ('')", correct: false},
            {text:"Returnerar null", correct: true},
        ]

    },
    {
        question: "Vilken metod används för att ta bort en specifik nyckel från localStorage?",
        answers: [
            {text:"localStorage.deleteItem('key')", correct: false},
            {text:"localStorage.clearItem('key')", correct: false},
            {text:"localStorage.removeItem('key')", correct: true},
            {text:"localStorage.eraseItem('key')", correct: false},
        ]

    },
    {
        question: "Vad gör localStorage.clear()?",
        answers: [
            {text:"Tar bort endast den angivna nyckeln", correct: false},
            {text:"Tar bort all data som sparats i localStorage", correct: true},
            {text:"Tar bort sessionStorage-data", correct: false},
            {text:"Tar bort endast data äldre än 24 timmar", correct: false},
        ]

    },
    {
        question: "Vilket av följande påståenden är sant om localStorage och sessionStorage?",
        answers: [
            {text:"localStorage sparar data mellan sidladdningar och sessionStorage raderas efter att fliken stängs", correct: true},
            {text:"sessionStorage sparar data permanent, medan localStorage raderas efter att fliken stängs", correct: false},
            {text:"sessionStorage är mer säker än localStorage", correct: false},
            {text:"localStorage har en större lagringskapacitet än sessionStorage", correct: false},
        ]

    },
    {
        question: "Vilken av följande situationer är bäst för att använda sessionStorage?",
        answers: [
            {text:"Lagra användarens autentiseringstoken", correct: false},
            {text:"Lagra en varukorg i en e-handelsapp", correct: false},
            {text:"Lagra tillfällig formdata under en session", correct: true},
            {text:"Lagra språkpreferenser för en webbplats", correct: false},
        ]

    },
    {
        question: "Vad är en begränsning för både localStorage och sessionStorage?",
        answers: [
            {text:" De kan endast lagra upp till 50MB data", correct: false},
            {text:"De kan endast lagra JSON-strukturer", correct: false},
            {text:"De kan inte användas i moderna webbläsare", correct: false},
            {text:"De kan endast lagra strängar", correct: true},
        ]

    },
    {
        question: "Hur kan du lagra ett JavaScript-objekt i localStorage?",
        answers: [
            {text:" localStorage.setItem('user', {name: 'Alice', age: 25});", correct: false},
            {text:"localStorage.storeItem('user', JSON.stringify({name: 'Alice', age: 25}));", correct: false},
            {text:"localStorage.setItem('user', JSON.stringify({name: 'Alice', age: 25}));", correct: true},
            {text:"localStorage.set('user', {name: 'Alice', age: 25});", correct: false},
        ]

    },
    {
        question: "Hur kan du hämta och använda ett objekt som sparats i localStorage?",
        answers: [
            {text:" let user = localStorage.getItem('user');", correct: false},
            {text:"let user = JSON.parse(localStorage.getItem('user'));", correct: true},
            {text:"let user = localStorage.fetchItem('user');", correct: false},
            {text:"let user = localStorage.getObject('user');", correct: false},
        ]

    },
    {
        question: "Vad är fetch och axios, vilket påstående är sant?",
        answers: [
            {text:" fetch och axios är båda verktyg för att hantera HTTP-förfrågningar i JavaScript.", correct: true},
            {text:"fetch är en tredjepartsbibliotek medan axios är en inbyggd webbfunktion", correct: false},
            {text:"axios är inbyggt i JavaScript, men fetch måste installeras som ett paket.", correct: false},
            {text:"axios fungerar endast i Node.js och fetch fungerar endast i webbläsaren.", correct: false},
        ]

    },
    {
        question: "Vilket alternativ beskriver en bra anledning att använda fetch istället för axios?",
        answers: [
            {text:" När man vill ha automatisk JSON-parsning.", correct: false},
            {text:"När man inte vill installera externa bibliotek.", correct: true},
            {text:"När man behöver bättre hantering av HTTP-fel.", correct: false},
            {text:"När man vill avbryta en pågående förfrågan enkelt.", correct: false},
        ]

    },
    {
        question: "Hur skiljer sig hantering av JSON-data mellan fetch och axios?",
        answers: [
            {text:" fetch returnerar JSON automatiskt, medan axios kräver .json()-metoden.", correct: false},
            {text:"fetch kan endast hantera JSON medan axios fungerar med alla dataformat.", correct: false},
            {text:"fetch returnerar en respons som behöver .json()-metoden, medan axios automatiskt omvandlar svaret till JSON.", correct: true},
            {text:"Det finns ingen skillnad – båda returnerar alltid JSON direkt.", correct: false},
        ]

    },
    {
        question:"Vilken av följande fetch-anrop är korrekt? ",
        code: `fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));`,
        answers: [
            {text:" fetch returnerar alltid en HTTP-felstatus i catch-blocket.", correct: false},
            {text:"Koden saknar .json() för att extrahera data.", correct: false},
            {text:"fetch måste ha headers för att fungera.", correct: false},
            {text:"Koden fungerar korrekt och returnerar JSON-data.", correct: true},
        ]

    },
    {
        question:"Vad är resultatet av följande Axios-anrop?",
        code: `axios.get("https://api.example.com/data")
                    .then(response => console.log(response.data))
                    .catch(error => console.error("Error:", error));`,
        answers: [
            {text:" undefined eftersom axios inte returnerar data.", correct: false},
            {text:"Ett objekt som innehåller data från API-svaret.", correct: true},
            {text:"En felstatus eftersom .data inte existerar i response.", correct: false},
            {text:"En synkron begäran som blockerar JavaScript-tråden.", correct: false},
        ]

    },
    {
        question: "Vilket av följande alternativ är en skillnad mellan fetch och axios?",
        answers: [
            {text:" fetch har inbyggd avbryt-funktionalitet medan axios inte har det.", correct: false},
            {text:" axios returnerar alltid en Promise, medan fetch returnerar direkt.", correct: false},
            {text:"fetch kastar endast fel vid nätverksproblem, medan axios kastar fel även vid HTTP-felstatus (t.ex. 404, 500).", correct: true},
            {text:"axios fungerar endast i backend, medan fetch fungerar både i frontend och backend.", correct: false},
        ]

    },
    {
        question:"Vad är fel i följande fetch-anrop?",
        code: `fetch("https://api.example.com/data")
                    .then(response => console.log(response))
                    .catch(error => console.error(error));`,
        answers: [
            {text:" fetch kan inte anropa en URL direkt.", correct: false},
            {text:"catch fungerar inte i fetch.", correct:false},
            {text:"etch behöver en method-parameter även vid GET-begäran.", correct: false},
            {text:".json() saknas, vilket gör att endast Response-objektet loggas istället för datan.", correct: true},
        ]

    },
    {
        question: "Vad händer om fetch får en 404-statuskod?",
        answers: [
            {text:" fetch kastar ett fel direkt och går till .catch().", correct: false},
            {text:"fetch returnerar en Response-objekt med ok: false, men går inte direkt till .catch().", correct: true},
            {text:"fetch avbryter automatiskt begäran vid en 404-status.", correct:false },
            {text:"fetch konverterar 404-svaren automatiskt till ett tomt JSON-objekt.", correct: false},
        ]

    },
    {
        question: "Hur hanteras headers i axios jämfört med fetch?",
        answers: [
            {text:" fetch kräver en headers-parameter i init-objektet, medan axios kan sätta headers globalt.", correct: true},
            {text:"fetch stöder inte headers, medan axios hanterar dem automatiskt.", correct: false},
            {text:"Både fetch och axios hanterar headers exakt på samma sätt.", correct:false },
            {text:"axios kräver att headers anges i varje begäran, medan fetch lagrar dem globalt.", correct: false},
        ]

    },
    {
        question:"Vilket av följande alternativ visar korrekt hur man gör en POST-begäran med axios? ",
        answers: [
            {text:`axios.post("https://api.example.com/data", JSON.stringify({ name: "John" }), 
                {headers: { "Content-Type": "application/json" }});`, correct: false},

            {text:`axios.post("https://api.example.com/data", { data: { name: "John" } })
                  .then(response => console.log(response));`, correct:false},

            {text:`axios({ method: "POST", url: "https://api.example.com/data", body: { name: "John" } })
                  .then(response => console.log(response));`, correct: false},

            {text:`axios.post("https://api.example.com/data", { name: "John" })
                  .then(response => console.log(response.data))
                  .catch(error => console.error(error));`, correct: true},
        ]

    },
    {
        question:"Vad händer när följande kod körs i webbläsaren?",
        code: `document.addEventListener("DOMContentLoaded", function () {
        let count = localStorage.getItem("counter") || 0;
        count++;
        localStorage.setItem("counter", count);
        console.log("Sidvisningar:", count);
            });`,
        answers: [
            {text:" Koden kommer att krascha eftersom localStorage inte stöds i webbläsaren.", correct: false},
            {text:" counter återställs till 1 vid varje sidladdning och loggas i konsolen.", correct: false},
            {text:"counter lagras endast i minnet och försvinner när sidan laddas om.", correct:false },
            {text:"counter ökar varje gång sidan laddas om och sparas i localStorage.", correct: true},
        ]

    },
    {
        question: "Vad är syftet med DOMContentLoaded i följande kod?",
        code: `document.addEventListener("DOMContentLoaded", function () {
                    if (!localStorage.getItem("visited")) {
                        alert("Välkommen! Detta är ditt första besök.");
                        localStorage.setItem("visited", "true");
                } else {
                        console.log("Du har besökt sidan tidigare.");
                }});`,
        answers: [
            {text:" Den väntar på att hela sidan, inklusive bilder och CSS, ska laddas innan den körs.", correct: false},
            {text:" Den rensar localStorage varje gång sidan laddas.", correct: false},
            {text:" Den används för att blockera sidinnehåll tills användaren klickar på en knapp.", correct:false },
            {text:"Den säkerställer att koden körs efter att HTML har laddats, men innan bilder och CSS", correct: true},
        ]

    }

];


const codeElement = document.getElementById("code-snippet"); // Kodblock deklareras

const questionElement = document.getElementById("question"); //frågan deklareras
const answerButtons = document.getElementById("answer-btn");//svarsalternativ deklareras
const nextBtn = document.getElementById("next-btn"); //next button deklareras

//skapa fråge-index
let currentQuestionIndex = 0; //startas från 0
let score = 0;

//funktion för starta quizzet
function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion(); //när ovan principer är OK, då kallas denna funktionen
}

function showQuestion(){
    //ta bort tidigare frågor o svar
    resetState();

    let currentQuestion = questions[currentQuestionIndex];// Hämtar den aktuella frågan
    let questionNumber = currentQuestionIndex + 1; //uppdatera frågans nr
    questionElement.innerHTML = questionNumber + ". "+ currentQuestion.question;

    // Om frågan innehåller en kodsnutt
    if (currentQuestion.code) { // Om det finns kod i frågan
        codeElement.style.display = "block"; // Visa kodblocket
        codeElement.innerText = currentQuestion.code; // Lägg in kod
    } else {
        codeElement.style.display = "none"; // Dölj kodblocket om det saknas kod
    }

    //visa svaren
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        //vid rätt svar
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        //eventlisten to select answer
        button.addEventListener("click", selectAnswer);
    });
}

function  resetState(){
    nextBtn.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

//välja svar
function selectAnswer(x){
    const selectedBtn = x.target; //valda svarsalternativ
    const isCorrect = selectedBtn.dataset.correct === "true";//kontroll= om svaret är korrekt
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    //efter rätt svar vad som sker...
   Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";//vida "next" button!

}

//score function
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again!";
    nextBtn.style.display = "block";
    codeElement.style.display = "none"; // Dölj kodblocket om det saknas kod
}

//visa nästa fråga eller invoke showscore funtion
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

//...gå till nästa=klicka på nästa button
nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

//invoke start quiz!
startQuiz();