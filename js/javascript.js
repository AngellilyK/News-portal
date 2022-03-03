/*Page Home*/
    /*переключатель новостей в разделе Hot news*/
const tabNav= document.querySelectorAll(".link-category");
const tabPanes= document.querySelectorAll(".section-category");

for (var i=0; i<tabNav.length; i++){
    tabNav[i].addEventListener("click", function(e){
        e.preventDefault();
        var activeTabAttr= e.target.getAttribute("data-tab");

        for(var j=0; j<tabNav.length; j++){
            var contentAttr= tabPanes[j].getAttribute("data-tab-content");

            if(activeTabAttr === contentAttr){
                tabNav[j].classList.add("link-category-active");
                tabPanes[j].classList.add("section-category-active");
            } else{
                tabNav[j].classList.remove("link-category-active");
                tabPanes[j].classList.remove("section-category-active"); 
            }
        };

    });
}


/*Page About*/
    /*переключатель Наша команда-Наша миссия*/

const tabNavPageAbout= document.getElementsByClassName("link-about-nav");
const tabPanesPageAbout= document.getElementsByClassName("block-our");

for (let i=0; i<tabNavPageAbout.length; i++){
    tabNavPageAbout[i].addEventListener("click", function(e){
        e.preventDefault();
        let activeTabAttr= e.target.getAttribute("data-tab");

        for(let j=0; j<tabNavPageAbout.length; j++){
            let contentAttr= tabPanesPageAbout[j].getAttribute("data-tab-content");

            if(activeTabAttr === contentAttr){
                tabNavPageAbout[j].classList.add("link-about-nav_active");
                tabPanesPageAbout[j].classList.add("show-block");
            } else{
                tabNavPageAbout[j].classList.remove("link-about-nav_active");
                tabPanesPageAbout[j].classList.remove("show-block"); 
            }
        };

    });
}

/*Page Post*/
    /*кнопка Reply*/
    const formReply= document.getElementsByClassName("form-comment-reply");
    console.log(formReply);

    function showForm(i){
        formReply[i].classList.toggle("block-hidden");
    }