function getImage(numIn) {
 num = numIn;
 document.getElementById('image').src ='/RevelantComics/Images/TestImage' + num +'.png';
};
function getRollOverText(numIn) {
 document.getElementById('image').title = MouseText['comic' + num].rollOver;
};
function getTitle(numIn) {
 var currentState = document.getElementById('comic').innerHTML;
 document.getElementById('comic').innerHtml = titles['comic' + num].title + currentState;
}; 
