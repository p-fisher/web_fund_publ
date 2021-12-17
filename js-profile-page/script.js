// allows user to edit their name shown on profile incl. prompt for what they want 
function editProfile(id){
    var name = prompt("What name would you like on your profile?");
    document.getElementById(id).innerText = name;
}

// removes the request PER DIV ROW whether clicking either button
function removeRequest(id) {
    document.getElementById(id).remove();
}

// decreases count on requests upon clicking either button
var countNum = document.querySelector("#request-count").innerText;
var currentCount = document.querySelector("#request-count")
function decreaseCount(id) {    
    countNum--;
    currentCount.innerText = countNum;
}

// remove div row and decrease count
function requestsCleanupMinus() {
    var arr = ['request01','request-count']
    removeRequest(arr[0]);
    decreaseCount(arr[1]);
}

// add to count of total connections upon accepting request
var countConnNum = document.querySelector("#connections-count").innerText;
var currentConnCount = document.querySelector("#connections-count")
function increaseConnCount(id) {    
    countConnNum++;
    currentConnCount.innerText = countConnNum;
}

// removes div row and count in requests while adding to total count of connections
function requestsCleanupPlus() {
    var arr2 = ['request01','request-count','connections-count']
    removeRequest(arr2[0]);
    decreaseCount(arr2[1]);
    increaseConnCount(arr2[2]);
}