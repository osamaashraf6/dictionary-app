var inpt = document.querySelector(".wrapper__input__inpt");
var times = document.querySelector(".fa-times");
var wrapper1 = document.querySelector(".wrapper__p");
var wrapper2 = document.querySelector(".wrapper__details");
var word = document.querySelector(".wrapper__details__detail__left");
var icon = document.querySelector(".wrapper__details__detail__right");

var adj = document.querySelector(".wrapper__details__detail__adjective__adj");
var phonetic = document.querySelector(
    ".wrapper__details__detail__adjective__phonetic"
);
var Meaning = document.querySelector(".wrapper__details__detail__Meaning");
var example = document.querySelector(".wrapper__details__detail__example");
var synonym = document.querySelector(".wrapper__details__detail__synonym");

times.addEventListener("click", function() {
    inpt.value = "";
    wrapper1.style.color = "black";
    wrapper2.style.display = "none";
});


inpt.addEventListener("keyup", function(e) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${e.target.value}`;
    if (e.key == "Enter" && e.target.value != " ") {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (data.title) {
                    wrapper1.innerHTML = `can\'t find the meaninf of :  <br/>" ${e.target.value} "`;
                    wrapper1.style.color = "black";

                } else {
                    wrapper1.style.color = "black";
                    wrapper1.innerHTML = `Searching The Meaning Of : <br/>" ${e.target.value} "`;
                    wrapper1.style.display = "none";
                    wrapper2.style.display = "block";
                    word.innerHTML = data[0].word;
                    adj.innerHTML = `${data[0].meanings[0].partOfSpeech} /`;
                    phonetic.innerHTML = data[0].phonetics[0].text;
                    Meaning.innerHTML = data[0].meanings[0].definitions[0].definition;
                    example.innerHTML = data[0].meanings[0].definitions[0].example;
                    synonym.innerHTML = data[0].meanings[0].definitions[0].synonyms;
                    audio = new Audio("https:" + data[0].phonetics[0].audio);
                    icon.addEventListener('click', function() {
                        audio.play();
                    })
                }

            });
    }
});