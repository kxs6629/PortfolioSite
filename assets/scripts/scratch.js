let cardDeck = document.getElementsByClassName("skillCard");
let slideList = document.getElementsByClassName("projectSlide");
let slideCount = 0;

slideList[0].style.display = "inherit"

for (let i = 0; i < cardDeck.length; i++) {
    cardDeck[i].addEventListener("click",function(){
        flipCard(this);
    })
};

function flipCard(e){
    let daycare = e.children;
    for(let i = 0;  i < daycare.length; i++){
        console.log(daycare[i])
        daycare[i].classList.toggle('hide')
    }
}

function showSlide(index){
    slideList[slideCount].style.display = "none"
    if(slideCount+index > slideList.length-1){
        slideCount = 0
    }
    else if(slideCount+index < 0){
        slideCount = slideList.length-1
    
    }
    else{
        slideCount += index;
    }

    slideList[slideCount].style.display = "inherit"    
}