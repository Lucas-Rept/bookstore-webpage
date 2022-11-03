buttonKnowMore = document.getElementById("knowMore");

buttonKnowMore.onclick = rolar;


function rolar() {
    let efectFrase = document.getElementById("efectFrase");
    efectFrase.style.animationName = "Text";
    let options = document.getElementsByClassName('option');
    for (var option of options) {
        option.classList.add("optionAnimation");
    }
}

const observerText = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationName = "Text";
            let options = document.getElementsByClassName('option');
            for (var option of options) {
                option.classList.add("optionAnimation");
            }
        }
    })
});


observerText.observe(document.getElementById("efectFrase"));