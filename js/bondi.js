var myLinks = document.getElementsByClassName('link');
var myAct = document.getElementById('act');

// Iterate over each element with the class 'link'
for (var i = 0; i < myLinks.length; i++) {
    myLinks[i].onclick = function () {
        myAct.classList.remove('active');
    };
}
