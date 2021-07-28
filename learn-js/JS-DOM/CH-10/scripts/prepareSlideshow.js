function prepareSlideshow() {
    //make sure the browser understands the DOM methods
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementById) {
        return false;
    }
    //make sure the elements exist
    if (!document.getElementById("linklist")) {
        return false;
    }
    //使用js生成prieview
    /*
    if (!document.getElementById("preview")) {
        return false;
    }
    */
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id", "slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("src", "topics.gif");
    preview.setAttribute("alt", "building blocks of web design");
    preview.setAttribute("id", "preview")
    slideshow.appendChild(preview);


    //Apply styles to the preview image
    //var preview = document.getElementById("preview");
    //preview.style.position = "absolute";
    //preview.style.left = "0px";
    //preview.style.top = "0px";
    //Get all the links in the list
    var list = document.getElementById("linklist");
    insertAfter(slideshow, list);
    var links = list.getElementsByTagName("a");
    //Attach the animation behavior to the mouseover event
    console.log(links[0])
    links[0].onmouseover = function() {
        console.log("move links 0")
        moveElement("preview", -100, 0, 10);
    }
    links[1].onmouseover = function() {
        moveElement("preview", -200, 0, 10);
    }
    links[2].onmouseover = function() {
        moveElement("preview", -300, 0, 10);
    }
}

addLoadEvent(prepareSlideshow)