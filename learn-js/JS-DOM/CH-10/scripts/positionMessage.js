function positionMessage() {
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById("message")) {
        return false;
    }
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "50px";
    moveElement("message", 200, 100, 10);

    if (!document.getElementById("message2")) {
        return false;
    }
    var elem = document.getElementById("message2");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "50px";
    moveElement("message2", 125, 75, 10);
}

addLoadEvent(positionMessage);