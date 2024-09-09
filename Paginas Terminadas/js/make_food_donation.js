document.addEventListener('DOMContentLoaded', function () {
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');

    option1.addEventListener('click', function () {
        option1.classList.add('selected');
        changeCSS(option1, option2);
        option2.classList.remove('selected');
    });

    option2.addEventListener('click', function () {
        option2.classList.add('selected');
        changeCSS(option2, option1);
        option1.classList.remove('selected');
    });
});

function changeCSS(optionA, optionB) {
    optionA.style.backgroundColor = '#5F44F6';
    optionB.style.backgroundColor = '#bea8a8';
    document.getElementById('img-option1').style.fill = 'white';
}



