var likeNum=0;
var likeString = document.querySelector("#likeCount")
//
// console.log(likeString);
//
function addLike() {
    likeNum++;
    likeString.innerText = likeNum + " Like(s)"
    // console.log(likeNum);
}