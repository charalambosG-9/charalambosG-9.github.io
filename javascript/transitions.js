// Reset display property of all pages
function resetPages(){
    for(let i = 0; i < pages.length; i++)
        document.getElementById(pages[i]).style.display = "none";
}

// Disable links for 1 second
function timerForLinks(){
    for(let i = 0; i < navLinks.length; i++)
        document.getElementById(navLinks[i]).setAttribute("onclick", "#");

    setTimeout(function(){document.getElementById("homePageNavLink").setAttribute("onclick", "changeEverything(0)")}, 1000);
    setTimeout(function(){document.getElementById("aboutMeNavLink").setAttribute("onclick", "changeEverything(1)")}, 1000);
    setTimeout(function(){document.getElementById("myWorkNavLink").setAttribute("onclick", "changeEverything(2)")}, 1000);
    setTimeout(function(){document.getElementById("servicesNavLink").setAttribute("onclick", "changeEverything(3)")}, 1000);
    setTimeout(function(){document.getElementById("contactMeNavLink").setAttribute("onclick", "changeEverything(4)")}, 1000);   
}

// Changes display property of old and current pages to block
function displayChange(oldPage, currentPage){
    resetPages()
    for(let i = 0 ; i <  pages.length; i++){
        if(pages[i] == oldPage || pages[i] == currentPage)
            document.getElementById(pages[i]).style.display = "block";
    }
}

function resetHeight(oldPage,currentPage){
    let index = pages.indexOf(currentPage);

    for(let  i = index + 1; i < pages.length; i++ ){
        document.getElementById(pages[i]).style.animation = "slideIn 0.0s linear forwards";
        document.getElementById(pages[i]).style.animation = "breath 20.0s linear infinite";
        document.getElementById(texts[i]).style.animation = "fadeIn 0.0s linear forwards";
    }

}

// Change static color of links
function changeNavLinkStaticColor(currentLink){
    for(let i = 0; i < navLinks.length; i++ ){
        if (navLinks[i] == currentLink)
            document.getElementById(navLinks[i]).style.color = "red";
        else
            document.getElementById(navLinks[i]).style.color = "white";
    }
}

// Change hover color of links
function changeNavHoverColor(currentLink){
    for(let i = 0; i < navLinks.length; i++ ){
        if (navLinks[i] != currentLink){
            document.getElementById(navLinks[i]).addEventListener('mouseenter', () => document.getElementById(navLinks[i]).style.color = 'red');
            document.getElementById(navLinks[i]).addEventListener('mouseleave', () => document.getElementById(navLinks[i]).style.color = 'white');
        }else
            document.getElementById(navLinks[i]).addEventListener('mouseleave', () => document.getElementById(navLinks[i]).style.color = 'red');
    }
}

function resetHeight(currentPage){
    let index = pages.indexOf(currentPage);

    // for(let  i = 0; i < index; i++ ){
    //     document.getElementById(pages[i]).style.animation = "breath 20.0s linear infinite";
    // }

    for(let  i = index + 1; i < pages.length; i++ ){
        document.getElementById(pages[i]).style.animation = "slideIn 0.0s linear forwards";
        document.getElementById(pages[i]).style.animation = "breath 20.0s linear infinite";
        document.getElementById(texts[i]).style.animation = "fadeIn 0.0s linear forwards";
    }

}

// State of the site when loading in 

let pages = ['homePage', 'aboutMePage', 'myWorkPage', 'servicesPage','contactMePage'];
let texts = ['homePageText', 'aboutMeText', 'myWorkText', 'servicesText','contactMeText'];
let navLinks = ["homePageNavLink", "aboutMeNavLink", "myWorkNavLink", "servicesNavLink", "contactMeNavLink"]

let currentPage = "homePage";
let currentText = "homePageText";
let oldPage = "";
let oldText = "";

displayChange(oldPage, currentPage)

changeNavLinkStaticColor("homePageNavLink");

changeNavHoverColor("homePageNavLink")

function clickEvent(event) {

    let index = pages.indexOf(currentPage);
   
    if (document.documentElement.clientWidth < 95000){
        if (event.clientY > (document.documentElement.clientHeight - document.documentElement.clientHeight/5)){
            console.log("here");
            if(index < pages.length - 1)
                changeEverything(index+1);
        }

        if (event.clientY < document.documentElement.clientHeight/5){
            if(index > 0) 
                changeEverything(index-1);
        }
    }
}

document.getElementById("homePage").addEventListener("click", clickEvent);

// Loading screen
onReady(function () {
    show('main', true);
    show('loading', false);
});

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

function changeEverything(index){

    oldPage = currentPage;
    oldText = currentText;

    currentPage = pages[index];
    currentText = texts[index];

    displayChange(oldPage, currentPage)

    changeNavLinkStaticColor(navLinks[index]);
    changeNavHoverColor(navLinks[index]);

    found = false;

    for(let i = 0; i <= index; i++){
        if(oldPage.localeCompare(pages[i]) == 0){
            found = true;
        }
    }

    if(found){
        document.getElementById(oldText).style.animation = "fadeOut 0.5s linear forwards";
        document.getElementById(oldPage).style.animation = "slideOut 1s linear forwards";
    }else{
        document.getElementById(currentPage).style.animation = "slideIn 1s linear forwards";
        document.getElementById(currentText).style.animation = "fadeIn 0.5s linear forwards";
    }

    timerForLinks();
      
    setTimeout(function(){document.getElementById(currentPage).addEventListener("click", clickEvent);}, 1000); 

    resetHeight(currentPage);

}