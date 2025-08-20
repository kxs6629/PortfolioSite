let collection = document.getElementsByClassName("skillCard");

for (let i = 0; i < collection.length; i++) {
    collection[i].addEventListener("click",function(){
        flipCard(this);
    })
};
function flipCard(e){
    //get the element that was clicked
    console.log(e)
    console.log(e.classList) 
    console.log(e.classList.DOMTokenList)
    console.log(e.classList.children)

    let daycare = e.children;
    for(let i = 0;  i < daycare.length; i++){
        console.log(daycare[i])
        daycare[i].classList.toggle('cardFront')
        daycare[i].classList.toggle('cardBack')

        // daycare[i].toggle()
    }

    // e.classList.DOMTokenList.toggle('cardFront');
    // e.classList.DOMTokenList.toggle('cardBack');
    console.log('these should be toggled by now')

    //change the styling so that the visibility toggles between card front/back
}