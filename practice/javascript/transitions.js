//function pou allasi metavlites pou einai to current page etc

function resetPages(){
    document.getElementById("homePage").style.display = "none";
    document.getElementById("aboutMePage").style.display = "none";
    document.getElementById("myWorkPage").style.display = "none";
    document.getElementById("servicesPage").style.display = "none";
    document.getElementById("contactMePage").style.display = "none";
}

function timerForLinks(){
    document.getElementById("homePageNavLink").setAttribute("onclick", "#");
    document.getElementById("aboutMeNavLink").setAttribute("onclick", "#");
    document.getElementById("myWorkNavLink").setAttribute("onclick", "#");
    document.getElementById("servicesNavLink").setAttribute("onclick", "#");
    document.getElementById("contactMeNavLink").setAttribute("onclick", "#");

    setTimeout(function(){document.getElementById("homePageNavLink").setAttribute("onclick", "changeToHomePage()")}, 1000);
    setTimeout(function(){document.getElementById("aboutMeNavLink").setAttribute("onclick", "changeToAboutMePage()")}, 1000);
    setTimeout(function(){document.getElementById("myWorkNavLink").setAttribute("onclick", "changeToMyWorkPage()")}, 1000);
    setTimeout(function(){document.getElementById("servicesNavLink").setAttribute("onclick", "changeToServicesPage()")}, 1000);
    setTimeout(function(){document.getElementById("contactMeNavLink").setAttribute("onclick", "changeToContactMe()")}, 1000);
    
}

function displayChange(oldPage, currentPage){
    resetPages()
    for(let i = 0 ; i < 5 ; i++){
        if(pages[i] == oldPage || pages[i] == currentPage)
            document.getElementById(pages[i]).style.display = "block";
    }
}

//state of the site when loading in 

let pages = ['homePage', 'aboutMePage', 'myWorkPage', 'servicesPage','contactMePage'];

let currentPage = "homePage";
let currentText = "homePageText";
let oldPage = "";
let oldText = "";

document.getElementById("homePage").style.display = "block";
document.getElementById("aboutMePage").style.display = "none";
document.getElementById("myWorkPage").style.display = "none";
document.getElementById("servicesPage").style.display = "none";
document.getElementById("contactMePage").style.display = "none";

document.getElementById("homePageNavLink").style.color = "red";
document.getElementById("aboutMeNavLink").style.color = "white";
document.getElementById("myWorkNavLink").style.color = "white";
document.getElementById("servicesNavLink").style.color = "white";
document.getElementById("contactMeNavLink").style.color = "white";

document.getElementById("aboutMeNavLink").addEventListener('mouseenter', () => document.getElementById("aboutMeNavLink").style.color = 'red');
document.getElementById("aboutMeNavLink").addEventListener('mouseleave', () => document.getElementById("aboutMeNavLink").style.color = 'white');

document.getElementById("myWorkNavLink").addEventListener('mouseenter', () => document.getElementById("myWorkNavLink").style.color = 'red');
document.getElementById("myWorkNavLink").addEventListener('mouseleave', () => document.getElementById("myWorkNavLink").style.color = 'white');

document.getElementById("servicesNavLink").addEventListener('mouseenter', () => document.getElementById("servicesNavLink").style.color = 'red');
document.getElementById("servicesNavLink").addEventListener('mouseleave', () => document.getElementById("servicesNavLink").style.color = 'white');

document.getElementById("contactMeNavLink").addEventListener('mouseenter', () => document.getElementById("contactMeNavLink").style.color = 'red');
document.getElementById("contactMeNavLink").addEventListener('mouseleave', () => document.getElementById("contactMeNavLink").style.color = 'white');

function clickEvent(event) {
    if (event.clientY > document.documentElement.clientHeight/2){
        changeToAboutMePage()
        document.getElementById("homePage").removeEventListener("click", clickEvent);
    }
}
  
document.getElementById("homePage").addEventListener("click", clickEvent);

//loading screen
onReady(function () {
    show('main', true);
    show('loading', false);
});


function changeToHomePage(){
    
    oldPage = currentPage;
    oldText = currentText;

    currentPage = "homePage";
    currentText = "homePageText";

    //console.log("old Text :" + oldText);
    //console.log("new Text :" + currentText);
    console.log("old Page :" + oldPage);
    console.log("new Page :" + currentPage);

    //resetPages();

    displayChange(oldPage, currentPage)
    
    document.getElementById("homePageNavLink").style.color = "red";
    document.getElementById("aboutMeNavLink").style.color = "white";
    document.getElementById("myWorkNavLink").style.color = "white";
    document.getElementById("servicesNavLink").style.color = "white";
    document.getElementById("contactMeNavLink").style.color = "white";

    if(oldPage.localeCompare(currentPage) != 0){
        document.getElementById(currentPage).style.animation = "slideIn 1s linear forwards";
        document.getElementById(currentText).style.animation = "fadeIn 0.5s linear forwards";
    }

    document.getElementById("homePageNavLink").addEventListener('mouseleave', () => document.getElementById("homePageNavLink").style.color = 'red');

    document.getElementById("aboutMeNavLink").addEventListener('mouseenter', () => document.getElementById("aboutMeNavLink").style.color = 'red');
    document.getElementById("aboutMeNavLink").addEventListener('mouseleave', () => document.getElementById("aboutMeNavLink").style.color = 'white');
    
    document.getElementById("myWorkNavLink").addEventListener('mouseenter', () => document.getElementById("myWorkNavLink").style.color = 'red');
    document.getElementById("myWorkNavLink").addEventListener('mouseleave', () => document.getElementById("myWorkNavLink").style.color = 'white');
    
    document.getElementById("servicesNavLink").addEventListener('mouseenter', () => document.getElementById("servicesNavLink").style.color = 'red');
    document.getElementById("servicesNavLink").addEventListener('mouseleave', () => document.getElementById("servicesNavLink").style.color = 'white');
    
    document.getElementById("contactMeNavLink").addEventListener('mouseenter', () => document.getElementById("contactMeNavLink").style.color = 'red');
    document.getElementById("contactMeNavLink").addEventListener('mouseleave', () => document.getElementById("contactMeNavLink").style.color = 'white');

    timerForLinks()

    function clickEvent(event) {
        if (event.clientY > document.documentElement.clientHeight/2){
            changeToAboutMePage()
            document.getElementById("homePage").removeEventListener("click", clickEvent);
        }
    }

    
      
    document.getElementById("homePage").addEventListener("click", clickEvent);
    
    setTimeout(function hideOldPage() { document.getElementById(oldPage).style.display = "none"; },1100) // hide old page

}

function changeToAboutMePage(){

    oldPage = currentPage;
    oldText = currentText;

    currentPage = "aboutMePage";
    currentText = "aboutMeText";

    //console.log("old Text :" + oldText);
    //console.log("new Text :" + currentText);
    console.log("old Page :" + oldPage);
    console.log("new Page :" + currentPage);

    //resetPages();

    displayChange(oldPage, currentPage)
    
    document.getElementById("homePageNavLink").style.color = "white";
    document.getElementById("aboutMeNavLink").style.color = "red";
    document.getElementById("myWorkNavLink").style.color = "white";
    document.getElementById("servicesNavLink").style.color = "white";
    document.getElementById("contactMeNavLink").style.color = "white";

    
    if(oldPage.localeCompare(currentPage) != 0){
        if(oldPage.localeCompare("homePage") == 0){
            document.getElementById(oldPage).style.animation = "slideOut 1s linear forwards";
            document.getElementById(oldText).style.animation = "fadeOut 0.5s linear forwards";
        }else{
            document.getElementById(currentText).style.animation = "fadeIn 0.5s linear forwards";
            document.getElementById(currentPage).style.animation = "slideIn 1s linear forwards";
            
        }
    }
    
    document.getElementById("aboutMeNavLink").addEventListener('mouseleave', () => document.getElementById("aboutMeNavLink").style.color = 'red');

    document.getElementById("homePageNavLink").addEventListener('mouseenter', () => document.getElementById("homePageNavLink").style.color = 'red');
    document.getElementById("homePageNavLink").addEventListener('mouseleave', () => document.getElementById("homePageNavLink").style.color = 'white');

    document.getElementById("myWorkNavLink").addEventListener('mouseenter', () => document.getElementById("myWorkNavLink").style.color = 'red');
    document.getElementById("myWorkNavLink").addEventListener('mouseleave', () => document.getElementById("myWorkNavLink").style.color = 'white');

    document.getElementById("servicesNavLink").addEventListener('mouseenter', () => document.getElementById("servicesNavLink").style.color = 'red');
    document.getElementById("servicesNavLink").addEventListener('mouseleave', () => document.getElementById("servicesNavLink").style.color = 'white');

    document.getElementById("contactMeNavLink").addEventListener('mouseenter', () => document.getElementById("contactMeNavLink").style.color = 'red');
    document.getElementById("contactMeNavLink").addEventListener('mouseleave', () => document.getElementById("contactMeNavLink").style.color = 'white');    

    timerForLinks()

    function clickEvent(event) {
        if (event.clientY > document.documentElement.clientHeight/2){ // document.getElementById("homePage")
            changeToMyWorkPage();
            document.getElementById("aboutMePage").removeEventListener("click", clickEvent);
        }else if(event.clientY < document.documentElement.clientHeight/2){
            changeToHomePage();
            document.getElementById("aboutMePage").removeEventListener("click", clickEvent); 
        }
    }
      
    document.getElementById("aboutMePage").addEventListener("click", clickEvent);

    setTimeout(function hideOldPage() { document.getElementById(oldPage).style.display = "none"; },1100) // hide old page
}

function changeToMyWorkPage(){

    oldPage = currentPage;
    oldText = currentText;

    currentPage = "myWorkPage";
    currentText = "myWorkText";

    //console.log("old Text :" + oldText);
    //console.log("new Text :" + currentText);
    console.log("old Page :" + oldPage);
    console.log("new Page :" + currentPage);
    
    //resetPages();

    displayChange(oldPage, currentPage)
    
    document.getElementById("homePageNavLink").style.color = "white";
    document.getElementById("aboutMeNavLink").style.color = "white";
    document.getElementById("myWorkNavLink").style.color = "red";
    document.getElementById("servicesNavLink").style.color = "white";
    document.getElementById("contactMeNavLink").style.color = "white";

    if(oldPage.localeCompare(currentPage) != 0){
        if(oldPage.localeCompare("homePage") == 0 || oldPage.localeCompare("aboutMePage") == 0){
            document.getElementById(oldText).style.animation = "fadeOut 0.5s linear forwards";
            document.getElementById(oldPage).style.animation = "slideOut 1s linear forwards";
        }else{
            document.getElementById(currentPage).style.animation = "slideIn 1s linear forwards";
            document.getElementById(currentText).style.animation = "fadeIn 0.5s linear forwards";
        }
    }

    document.getElementById("myWorkNavLink").addEventListener('mouseleave', () => document.getElementById("myWorkNavLink").style.color = 'red');

    document.getElementById("homePageNavLink").addEventListener('mouseenter', () => document.getElementById("homePageNavLink").style.color = 'red');
    document.getElementById("homePageNavLink").addEventListener('mouseleave', () => document.getElementById("homePageNavLink").style.color = 'white');

    document.getElementById("aboutMeNavLink").addEventListener('mouseenter', () => document.getElementById("aboutMeNavLink").style.color = 'red');
    document.getElementById("aboutMeNavLink").addEventListener('mouseleave', () => document.getElementById("aboutMeNavLink").style.color = 'white');

    document.getElementById("servicesNavLink").addEventListener('mouseenter', () => document.getElementById("servicesNavLink").style.color = 'red');
    document.getElementById("servicesNavLink").addEventListener('mouseleave', () => document.getElementById("servicesNavLink").style.color = 'white');

    document.getElementById("contactMeNavLink").addEventListener('mouseenter', () => document.getElementById("contactMeNavLink").style.color = 'red');
    document.getElementById("contactMeNavLink").addEventListener('mouseleave', () => document.getElementById("contactMeNavLink").style.color = 'white');

    timerForLinks();

    function clickEvent(event) {
        if (event.clientY > document.documentElement.clientHeight/2){
            changeToServicesPage();
            document.getElementById("myWorkPage").removeEventListener("click", clickEvent);
        }else if(event.clientY < document.documentElement.clientHeight/2){
            changeToAboutMePage();
            document.getElementById("myWorkPage").removeEventListener("click", clickEvent); 
        }
    }
      
    document.getElementById("myWorkPage").addEventListener("click", clickEvent);

    setTimeout(function hideOldPage() { document.getElementById(oldPage).style.display = "none"; },1100) // hide old page

}

function changeToServicesPage(){

    oldPage = currentPage;
    oldText = currentText;

    currentPage = "servicesPage";
    currentText = "servicesText";

    //console.log("old Text :" + oldText);
    //console.log("new Text :" + currentText);
    console.log("old Page :" + oldPage);
    console.log("new Page :" + currentPage);
    
    //resetPages();

    displayChange(oldPage, currentPage)
    
    document.getElementById("homePageNavLink").style.color = "white";
    document.getElementById("aboutMeNavLink").style.color = "white";
    document.getElementById("myWorkNavLink").style.color = "white";
    document.getElementById("servicesNavLink").style.color = "red";
    document.getElementById("contactMeNavLink").style.color = "white";

    if(oldPage.localeCompare(currentPage) != 0){
        if(oldPage.localeCompare("homePage") == 0 || oldPage.localeCompare("aboutMePage") == 0 || oldPage.localeCompare("myWorkPage") == 0){
            document.getElementById(oldText).style.animation = "fadeOut 0.5s linear forwards";
            document.getElementById(oldPage).style.animation = "slideOut 1s linear forwards";
        }else{
            document.getElementById(currentPage).style.animation = "slideIn 1s linear forwards";
            document.getElementById(currentText).style.animation = "fadeIn 0.5s linear forwards";
        }
    }

    document.getElementById("servicesNavLink").addEventListener('mouseleave', () => document.getElementById("servicesNavLink").style.color = 'red');

    document.getElementById("homePageNavLink").addEventListener('mouseenter', () => document.getElementById("homePageNavLink").style.color = 'red');
    document.getElementById("homePageNavLink").addEventListener('mouseleave', () => document.getElementById("homePageNavLink").style.color = 'white');

    document.getElementById("aboutMeNavLink").addEventListener('mouseenter', () => document.getElementById("aboutMeNavLink").style.color = 'red');
    document.getElementById("aboutMeNavLink").addEventListener('mouseleave', () => document.getElementById("aboutMeNavLink").style.color = 'white');

    document.getElementById("myWorkNavLink").addEventListener('mouseenter', () => document.getElementById("myWorkNavLink").style.color = 'red');
    document.getElementById("myWorkNavLink").addEventListener('mouseleave', () => document.getElementById("myWorkNavLink").style.color = 'white');

    document.getElementById("contactMeNavLink").addEventListener('mouseenter', () => document.getElementById("contactMeNavLink").style.color = 'red');
    document.getElementById("contactMeNavLink").addEventListener('mouseleave', () => document.getElementById("contactMeNavLink").style.color = 'white');

    timerForLinks();

    function clickEvent(event) {
        if (event.clientY > document.documentElement.clientHeight/2){
            changeToContactMe();
            document.getElementById("servicesPage").removeEventListener("click", clickEvent);
        }else if(event.clientY < document.documentElement.clientHeight/2){
            changeToMyWorkPage();
            document.getElementById("servicesPage").removeEventListener("click", clickEvent); 
        }
    }
      
    document.getElementById("servicesPage").addEventListener("click", clickEvent);

    setTimeout(function hideOldPage() { document.getElementById(oldPage).style.display = "none"; },1100) // hide old page
}

function changeToContactMe(){

    oldPage = currentPage;
    oldText = currentText;

    currentPage = "contactMePage";
    currentText = "contactMeText";

    //console.log("old Text :" + oldText);
    //console.log("new Text :" + currentText);
    console.log("old Page :" + oldPage);
    console.log("new Page :" + currentPage);
    
    //resetPages();

    displayChange(oldPage, currentPage)
    
    document.getElementById("homePageNavLink").style.color = "white";
    document.getElementById("aboutMeNavLink").style.color = "white";
    document.getElementById("myWorkNavLink").style.color = "white";
    document.getElementById("servicesNavLink").style.color = "white";
    document.getElementById("contactMeNavLink").style.color = "red";

    if(oldPage.localeCompare(currentPage) != 0){
        if(oldPage.localeCompare("homePage") == 0 || oldPage.localeCompare("aboutMePage") == 0 || oldPage.localeCompare("myWorkPage") == 0 || oldPage.localeCompare("servicesPage") == 0){
            document.getElementById(oldText).style.animation = "fadeOut 0.5s linear forwards";
            document.getElementById(oldPage).style.animation = "slideOut 1s linear forwards";
        }else{
            document.getElementById(currentPage).style.animation = "slideIn 1s linear forwards";
            document.getElementById(currentText).style.animation = "fadeIn 0.5s linear forwards";
        }
    }

    document.getElementById("contactMeNavLink").addEventListener('mouseleave', () => document.getElementById("contactMeNavLink").style.color = 'red');

    document.getElementById("homePageNavLink").addEventListener('mouseenter', () => document.getElementById("homePageNavLink").style.color = 'red');
    document.getElementById("homePageNavLink").addEventListener('mouseleave', () => document.getElementById("homePageNavLink").style.color = 'white');

    document.getElementById("aboutMeNavLink").addEventListener('mouseenter', () => document.getElementById("aboutMeNavLink").style.color = 'red');
    document.getElementById("aboutMeNavLink").addEventListener('mouseleave', () => document.getElementById("aboutMeNavLink").style.color = 'white');

    document.getElementById("myWorkNavLink").addEventListener('mouseenter', () => document.getElementById("myWorkNavLink").style.color = 'red');
    document.getElementById("myWorkNavLink").addEventListener('mouseleave', () => document.getElementById("myWorkNavLink").style.color = 'white');

    document.getElementById("servicesNavLink").addEventListener('mouseenter', () => document.getElementById("servicesNavLink").style.color = 'red');
    document.getElementById("servicesNavLink").addEventListener('mouseleave', () => document.getElementById("servicesNavLink").style.color = 'white');

    timerForLinks();

    function clickEvent(event) {
        if(event.clientY < document.documentElement.clientHeight/2){
            changeToServicesPage();
            document.getElementById("contactMePage").removeEventListener("click", clickEvent); 
        }
    }
      
    document.getElementById("contactMePage").addEventListener("click", clickEvent);

    setTimeout(function hideOldPage() { document.getElementById(oldPage).style.display = "none"; },1100) // hide old page
}

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