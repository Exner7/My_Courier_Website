var isExpanded = false;

function expand() {

    
    const articleInFocus = document.getElementById("focus");

    if (isExpanded) {
        articleInFocus.style.animationName = "revert";
        document.querySelector("#article-content-1").style.whiteSpace = "nowrap";
        isExpanded = false;
        document.querySelector("#the-button").innerHTML = "expand";
    } else {
        articleInFocus.style.animationName = "expand";
        document.querySelector("#article-content-1").style.whiteSpace = "normal";
    //    document.querySelector(".article-content").style.overflow = "clip";
        isExpanded = true;
        document.querySelector("#the-button").innerHTML = "collapse";
    }

    console.log("isExpanded: " + isExpanded);
}