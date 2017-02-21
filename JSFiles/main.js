function getImage(numIn) {
 num = numIn;
 document.getElementById('image').src ='/RevelantComics/Images/' + num +'.PNG';
};
function getRollOverText(numIn) {
 document.getElementById('image').title = MouseText['comic' + num].rollOver;
};
function getTitle(numIn) {
 document.getElementById('aboveComic').innerText = titles['comic' + num].Title;
}; 
