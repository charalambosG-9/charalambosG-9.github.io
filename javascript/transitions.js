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

function resetHeight(oldPage,currentPage){
    let index = pages.indexOf(currentPage);

    for(let  i = index + 1; i < pages.length; i++ ){
        document.getElementById(pages[i]).style.animation = "slideIn 0.0s linear forwards";
        document.getElementById(pages[i]).style.animation = "breath 20.0s linear infinite";
        document.getElementById(texts[i]).style.animation = "fadeIn 0.0s linear forwards";
    }

}

// Changes static colors of links
function changeNavLinkStaticColor(currentLink){

    for(let i = 0; i < navLinks.length; i++ ){
        if (navLinks[i] == currentLink)
            document.getElementById(navLinks[i]).style.color = "red";
        else
            document.getElementById(navLinks[i]).style.color = "white";
    }

}

//state of the site when loading in 

let pages = ['homePage', 'aboutMePage', 'myWorkPage', 'servicesPage','contactMePage'];
let texts = ['homePageText', 'aboutMeText', 'myWorkText', 'servicesText','contactMeText'];
let navLinks = ["homePageNavLink", "aboutMeNavLink", "myWorkNavLink", "servicesNavLink", "contactMeNavLink"]

let currentPage = "homePage";
let currentText = "homePageText";
let oldPage = "";
let oldText = "";

displayChange(oldPage, currentPage)

changeNavLinkStaticColor("homePageNavLink");

document.getElementById("aboutMeNavLink").addEventListener('mouseenter', () => document.getElementById("aboutMeNavLink").style.color = 'red');
document.getElementById("aboutMeNavLink").addEventListener('mouseleave', () => document.getElementById("aboutMeNavLink").style.color = 'white');

document.getElementById("myWorkNavLink").addEventListener('mouseenter', () => document.getElementById("myWorkNavLink").style.color = 'red');
document.getElementById("myWorkNavLink").addEventListener('mouseleave', () => document.getElementById("myWorkNavLink").style.color = 'white');

document.getElementById("servicesNavLink").addEventListener('mouseenter', () => document.getElementById("servicesNavLink").style.color = 'red');
document.getElementById("servicesNavLink").addEventListener('mouseleave', () => document.getElementById("servicesNavLink").style.color = 'white');

document.getElementById("contactMeNavLink").addEventListener('mouseenter', () => document.getElementById("contactMeNavLink").style.color = 'red');
document.getElementById("contactMeNavLink").addEventListener('mouseleave', () => document.getElementById("contactMeNavLink").style.color = 'white');

function clickEvent(event) {
    if (event.clientY > (document.documentElement.clientHeight - document.documentElement.clientHeight/5)){
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

    displayChange(oldPage, currentPage)
    
    changeNavLinkStaticColor("homePageNavLink");

    if(oldPage.localeCompare(currentPage) != 0){
        document.getElementById(currentPage).style.animation = "slideIn 1s linear forwards";
        document.getElementById(currentText).style.animation = "fadeIn 0.5s linear forwards";
        setTimeout(function(){document.getElementById(currentPage).style.animation = ''; document.getElementById(currentPage).classList.add("breathAnimation");},1000)
    }

    resetHeight(oldPage,currentPage)

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
        if (event.clientY > (document.documentElement.clientHeight - document.documentElement.clientHeight/5)){
            changeToAboutMePage()
            document.getElementById("homePage").removeEventListener("click", clickEvent);
        }
    }
  
    document.getElementById("homePage").addEventListener("click", clickEvent);
}

function changeToAboutMePage(){

    oldPage = currentPage;
    oldText = currentText;

    currentPage = "aboutMePage";
    currentText = "aboutMeText";

    displayChange(oldPage, currentPage)
    
    changeNavLinkStaticColor("aboutMeNavLink");

    if(oldPage.localeCompare(currentPage) != 0){
        if(oldPage.localeCompare("homePage") == 0){
            document.getElementById(oldPage).style.animation = "slideOut 1s linear forwards";
            document.getElementById(oldText).style.animation = "fadeOut 0.5s linear forwards";
        }else{
            document.getElementById(currentText).style.animation = "fadeIn 0.5s linear forwards";
            document.getElementById(currentPage).style.animation = "slideIn 1s linear forwards";
            setTimeout(function(){document.getElementById(currentPage).style.animation = ''; document.getElementById(currentPage).classList.add("breathAnimation");},1000)
        }
    }

    resetHeight(oldPage,currentPage)
    
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
        if (event.clientY > (document.documentElement.clientHeight - document.documentElement.clientHeight/5)){ // document.getElementById("homePage")
            changeToMyWorkPage();
            document.getElementById("aboutMePage").removeEventListener("click", clickEvent);
        }else if(event.clientY < document.documentElement.clientHeight/5){
            changeToHomePage();
            document.getElementById("aboutMePage").removeEventListener("click", clickEvent); 
        }
    }
      
    document.getElementById("aboutMePage").addEventListener("click", clickEvent);

}

function changeToMyWorkPage(){

    oldPage = currentPage;
    oldText = currentText;

    currentPage = "myWorkPage";
    currentText = "myWorkText";
    
    //resetPages();

    displayChange(oldPage, currentPage)
    
    changeNavLinkStaticColor("myWorkNavLink");

    if(oldPage.localeCompare(currentPage) != 0){
        if(oldPage.localeCompare("homePage") == 0 || oldPage.localeCompare("aboutMePage") == 0){
            document.getElementById(oldText).style.animation = "fadeOut 0.5s linear forwards";
            document.getElementById(oldPage).style.animation = "slideOut 1s linear forwards";
        }else{
            document.getElementById(currentPage).style.animation = "slideIn 1s linear forwards";
            document.getElementById(currentText).style.animation = "fadeIn 0.5s linear forwards";
            setTimeout(function(){document.getElementById(currentPage).style.animation = ''; document.getElementById(currentPage).classList.add("breathAnimation");},1000)
        }
    }

    resetHeight(oldPage,currentPage)

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
        if (event.clientY > (document.documentElement.clientHeight - document.documentElement.clientHeight/5)){
            changeToServicesPage();
            document.getElementById("myWorkPage").removeEventListener("click", clickEvent);
        }else if(event.clientY < document.documentElement.clientHeight/5){
            changeToAboutMePage();
            document.getElementById("myWorkPage").removeEventListener("click", clickEvent); 
        }
    }
      
    document.getElementById("myWorkPage").addEventListener("click", clickEvent);

}

function changeToServicesPage(){

    oldPage = currentPage;
    oldText = currentText;

    currentPage = "servicesPage";
    currentText = "servicesText";
    
    //resetPages();

    displayChange(oldPage, currentPage)
    
    changeNavLinkStaticColor("servicesNavLink");

    if(oldPage.localeCompare(currentPage) != 0){
        if(oldPage.localeCompare("homePage") == 0 || oldPage.localeCompare("aboutMePage") == 0 || oldPage.localeCompare("myWorkPage") == 0){
            document.getElementById(oldText).style.animation = "fadeOut 0.5s linear forwards";
            document.getElementById(oldPage).style.animation = "slideOut 1s linear forwards";
        }else{
            document.getElementById(currentPage).style.animation = "slideIn 1s linear forwards";
            document.getElementById(currentText).style.animation = "fadeIn 0.5s linear forwards";
            setTimeout(function(){document.getElementById(currentPage).style.animation = ''; document.getElementById(currentPage).classList.add("breathAnimation");},1000)
        }
    }

    resetHeight(oldPage,currentPage)

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
        if (event.clientY > (document.documentElement.clientHeight - document.documentElement.clientHeight/5)){
            changeToContactMe();
            document.getElementById("servicesPage").removeEventListener("click", clickEvent);
        }else if(event.clientY < document.documentElement.clientHeight/5){
            changeToMyWorkPage();
            document.getElementById("servicesPage").removeEventListener("click", clickEvent); 
        }
    }
      
    document.getElementById("servicesPage").addEventListener("click", clickEvent);
}

function changeToContactMe(){

    oldPage = currentPage;
    oldText = currentText;

    currentPage = "contactMePage";
    currentText = "contactMeText";
    
    //resetPages();

    displayChange(oldPage, currentPage)
    
    changeNavLinkStaticColor("contactMeNavLink");

    if(oldPage.localeCompare(currentPage) != 0){
        if(oldPage.localeCompare("homePage") == 0 || oldPage.localeCompare("aboutMePage") == 0 || oldPage.localeCompare("myWorkPage") == 0 || oldPage.localeCompare("servicesPage") == 0){
            document.getElementById(oldText).style.animation = "fadeOut 0.5s linear forwards";
            document.getElementById(oldPage).style.animation = "slideOut 1s linear forwards";
        }else{
            document.getElementById(currentPage).style.animation = "slideIn 1s linear forwards";
            document.getElementById(currentText).style.animation = "fadeIn 0.5s linear forwards";
            setTimeout(function(){document.getElementById(currentPage).style.animation = ''; document.getElementById(currentPage).classList.add("breathAnimation");},1000)
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
        if(event.clientY < document.documentElement.clientHeight/5){
            changeToServicesPage();
            document.getElementById("contactMePage").removeEventListener("click", clickEvent); 
        }
    }
      
    document.getElementById("contactMePage").addEventListener("click", clickEvent);
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