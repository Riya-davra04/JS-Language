let like = localStorage.getItem("like") || 0 ;
document.getElementById("like").innerHTML = like;

const HandleInstaLike = () =>
{
    like++;

    document.getElementById("like").innerHTML = like;
    document.getElementById("l").style.color = 'red';
    localStorage.setItem("like",like)
}   

document.getElementById("l").addEventListener("click",HandleInstaLike)


let comment = sessionStorage.getItem("comment") || 0 ;
document.getElementById("comment").innerHTML = comment;

const HandleInstaComment = () => {
    comment++;

    document.getElementById("comment").innerHTML = comment;

    sessionStorage.setItem("comment",comment)

}
document.getElementById("c").addEventListener("click",HandleInstaComment)


let share = localStorage.getItem("share") || 0 ;
document.getElementById("share").innerHTML = share;

const HandleInstashare = () => {
    share++;

    document.getElementById("share").innerHTML = share;

    localStorage.setItem("share",share)

}
document.getElementById("sh").addEventListener("click",HandleInstashare)


let save = sessionStorage.getItem("save") || 0 ;
document.getElementById("save").innerHTML = save;

const HandleInstasave = () => {
    save++;

    document.getElementById("save").innerHTML = save;

    sessionStorage.setItem("save",save)

}
document.getElementById("s").addEventListener("click",HandleInstasave)