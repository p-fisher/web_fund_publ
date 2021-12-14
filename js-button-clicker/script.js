
function changeText(element) {
    element.innerText = "Logout";
}

function hideOnClick(element) {
    element.remove();
}

function changeText2(element) {
    if (element.innerText === "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function alertNinja(id) {
        document.getElementById(id).innerText++;
        alert('Ninja was liked!');
}