
let mainColors = localStorage.getItem("color_option");

console.log(mainColors);

if(mainColors !== null){
    //console.log('local storage is not empty you can set it on root now');
document.documentElement.style.setProperty('--main--color',localStorage.getItem("color_option"));

document.querySelectorAll(".colors-list li").forEach(element => {
    element.classList.remove("active");

    if (element.dataset.color === mainColors){
        element.classList.add("active");
    }
})
}



 let backgroundOption = true;

 let backgroundInterval;

 let backgroundLocalItem = localStorage.getItem("background_option");

 if(backgroundLocalItem !== null){
 console.log(backgroundLocalItem);
 console.log(typeof(backgroundLocalItem));

 if (backgroundLocalItem === 'true'){
    backgroundOption = true;
 }else{
    backgroundOption = false;
 }
 document.querySelectorAll(".random-backgrounds span").forEach(element => {
    element.classList.remove("active")
 });
 if(backgroundLocalItem === "true"){
    document.querySelector(".random-backgrounds .yes").classList.add("active");
 } else{
    document.querySelector(".random-backgrounds .no").classList.add("active");
 }
 }

document.querySelector(".toggle .fa-gear").onclick = function(){
    this.classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("open");
};

const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach(li => {
    li.addEventListener("click",(e) => {
        console.log(e.target.dataset.color);

        document.documentElement.style.setProperty('--main--color',e.target.dataset.color);

        localStorage.setItem("color_option",e.target.dataset.color);
     
        handleActive(e);
    });
});

const randomBackgrounds = document.querySelectorAll(".random-backgrounds span");

randomBackgrounds.forEach(span => {
    span.addEventListener("click",(e) => {
       
        handleActive(e);

        if (e.target.dataset.background === "yes"){
         backgroundOption = true;
         radomizeImgs();

         localStorage.setItem("background_option",true);
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option",false);
        }
    });
});


let landingPage = document.querySelector(".landing-page");

let imgArray = ["./download .jfif","./download (2).jfif","./download (3).jfif","./download (4).jfif"];

 landingPage.style.backgroundImage = 'url("./download (2).jfif")';

 

 function radomizeImgs(){

 if(backgroundOption === true){

 setInterval(() => {
  let randomNumber = Math.floor(Math.random() * imgArray.length);

  landingPage.style.backgroundImage = 'url("./' + imgArray[randomNumber] + '")'
 },3000)}

}

radomizeImgs();


let ourSkills = document.querySelector(".skills");

window.onscroll = function(){
 
    let skillsOffsetTop = ourSkills.offsetTop;

//this.console.log(skillsOffsetTop);

let skillsOuterHeight = ourSkills.offsetHeight;

//this.console.log(skillsOuterHeight);

let windowHieght = this.innerHeight;

//this.console.log(windowHieght);

let windowScrollTop = this.pageYOffset;

//this.console.log(windowScrollTop);

if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHieght)){
    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

allSkills.forEach(skill => {
    skill.style.width = skill.dataset.progress;
})
}
};


let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
 img.addEventListener('click', (e) => {
    let overlay = document.createElement("div");

    overlay.className = 'popup-overlay';

    document.body.appendChild(overlay);

    let popupBox = document.createElement("div");

    popupBox.className = 'popup-box';

    
    if(img.alt !== null){
   let imageHeading = document.createElement("h3");
   let imgText = document.createTextNode(img.alt)

   imageHeading.appendChild(imgText);

   popupBox.appendChild(imageHeading);
    }

    let popupImage = document.createElement("img");

    popupImage.src = img.src;

    popupBox.appendChild(popupImage);

    document.body.appendChild(popupBox);

  let closeButton = document.createElement("span");

  let closeButtonText = document.createTextNode("X");

  closeButton.appendChild(closeButtonText);

  closeButton.className = "close-button";

  popupBox.appendChild(closeButton);

 })
});


document.addEventListener("click",function(e){
    if(e.target.className == "close-button"){
        e.target.parentNode.remove();

        document.querySelector(".popup-overlay").remove();
    }
})


const allBullets = document.querySelectorAll(".nav-bullets .bullet");

const allLinks= document.querySelectorAll(".links a");

 


function scrollToSomeWhere(elements){
    

elements.forEach(ele => {

    ele.addEventListener("click",(e) => {

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'
        })
    })
})

}

scrollToSomeWhere(allBullets);
scrollToSomeWhere(allLinks);

function handleActive(ev){
    
        ev.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });

        ev.target.classList.add("active");
    
    }

     let bulletsSpan = document.querySelectorAll(".bullets-option span");

     let bulletsContainer = document.querySelector(".nav-bullets");

     let bulletLocalItem = localStorage.getItem("bullets_option");

     if(bulletLocalItem !== null){
     bulletsSpan.forEach(span =>{
        span.classList.remove("active");
     })
     if(bulletLocalItem === 'block'){
        bulletsContainer.style.display = 'block';

        document.querySelector(".bullets-option .yes").classList.add("active");
     } else{
        bulletsContainer.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active")
     }
     }

     bulletsSpan.forEach(span => {
        span.addEventListener("click",(e) => {
            if (span.dataset.bullet === 'yes'){
                bulletsContainer.style.display = 'block';

                localStorage.setItem("bullets_option",'block')
            }else{
                bulletsContainer.style.display = 'none';
                localStorage.setItem("bullets_option",'none');
            }

            handleActive(e);
        })
     })

     document.querySelector(".reset-options").onclick = function (){

        localStorage.clear();

        window.location.reload();
     }

     let toggleBtn = document.querySelector(".toggle-menu");
     let tLinks = document.querySelector(".links");

     toggleBtn.onclick = function (e){

        e.stopPropagation();
        this.classList.toggle("menu-active");

        tLinks.classList.toggle("open");

     }

     document.addEventListener("click",(e)=>{
        if(e.target !== toggleBtn && e.target !== tLinks){
         if(tLinks.classList.contains("open")){
            toggleBtn.classList.toggle("menu-active");

            tLinks.classList.toggle("open");
         }
        }
     })
     tLinks.onclick = function(e){
        e.stopPropagation();
     }