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

// add to count of total connections upon accepting request
var countConnNum = document.querySelector("#connections-count").innerText;
var currentConnCount = document.querySelector("#connections-count")
function increaseConnCount(id) {    
    countConnNum++;
    currentConnCount.innerText = countConnNum;
}


// remove div row and decrease count FOR FIRST REQUEST
function requests1CleanupMinus() {
    var arr = ['request01','request-count']
    removeRequest(arr[0]);
    decreaseCount(arr[1]);
}

// removes div row and count in requests while adding to total count of connections FOR FIRST REQUEST
function requests1CleanupPlus() {
    var arr2 = ['request01','request-count','connections-count']
    removeRequest(arr2[0]);
    decreaseCount(arr2[1]);
    increaseConnCount(arr2[2]);
}

// remove div row and decrease count FOR SECOND REQUEST
function requests2CleanupMinus() {
    var arr = ['request02','request-count']
    removeRequest(arr[0]);
    decreaseCount(arr[1]);
}

// removes div row and count in requests while adding to total count of connections FOR SECOND REQUEST
function requests2CleanupPlus() {
    var arr2 = ['request02','request-count','connections-count']
    removeRequest(arr2[0]);
    decreaseCount(arr2[1]);
    increaseConnCount(arr2[2]);
}