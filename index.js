function showSubMenu(subMenu, arrow) {
    var sb = document.getElementById(subMenu);
    var aw = document.getElementById(arrow);
    
    if(sb.style.opacity == 1) {
        sb.style.opacity = 0;
        aw.src = "images/icon-arrow-down.svg";
    }
    else {
        sb.style.opacity = 1;
        aw.src = "images/icon-arrow-up.svg";
    }
}

function showAccordionContent(content,arrow) {
    var ct = document.getElementById(content);
    var arr = document.getElementById(arrow);
    if(ct.style.maxHeight) {
        ct.style.maxHeight = null;
        arr.src = "images/icon-arrow-down.svg";
    }
    else {
        ct.style.maxHeight = ct.scrollHeight + "px";
        arr.src = "images/icon-arrow-up.svg";
    }
}

function openSub_Menu() {
    document.getElementById('sub_menu').style.width = "100%";
}

function closeSub_Menu() {
    document.getElementById('sub_menu').style.width = "0%";
}