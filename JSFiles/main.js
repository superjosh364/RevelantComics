function getImage(numIn) {
 num = numIn;
 document.getElementById('image').src ='/RevelantComics/Images/TestImage' + num +'.png';
};
function getRollOverText(numIn) {
 document.getElementById('image').title = MouseText['comic' + num].rollOver;
};
function getTitle(numIn) {
 document.getElementById('comicTitle').innerHtml = titles['comic' + num].Title;
}; 
