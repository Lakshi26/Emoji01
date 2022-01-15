const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".opened");

closedFace.addEventListener('click', emojiClose);
function emojiClose(){
    openFace.classList.add('active');
    closedFace.classList.remove('active');
}
openFace.addEventListener('click', emojiOpen);
function emojiOpen(){
    closedFace.classList.add('active');
    openFace.classList.remove('active');
}
