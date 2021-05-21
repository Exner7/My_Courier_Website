
var isExpanded = false;

// get the article buttons and add to each one an event-listener

document.querySelectorAll(".article-btn").forEach( element => {

    element.addEventListener( "click", event => {

        const article = element.parentElement;

        const articleNumber = article.id[article.id.length - 1];

        // get the device screen width
        const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

        console.log(typeof width + ":" + width)

        switch (articleNumber) {
            case "1":
                translateYValue = (width < 768) ? "37.5%" : "25%";
                translateXValue = "25%";
                break;
            case "2":
                translateYValue = (width < 768) ? "12.5%" : "25%";
                translateXValue = "-25%";
                break;
            case "3":
                translateYValue = (width < 768) ? "-12.5%": "-25%";
                translateXValue = "25%";
                break;
            case "4":
                translateYValue = (width < 768) ? "-37.5%" : "-25%";
                translateXValue = "-25%";
                break;
            default: console.log("Something went wrong in the switch statement");
        }

        document.documentElement.style.setProperty("--translateY-value", translateYValue);
        document.documentElement.style.setProperty("--translateX-value", translateXValue);

        const articleContent = document.querySelector(
                "#article-content-" + articleNumber);
        
        if (isExpanded) {

            article.style.animationName = "collapse";
            articleContent.style.whiteSpace = "nowrap";
            articleContent.style.overflow = "hidden";
            element.innerHTML = "expand";

            isExpanded = false;

            setTimeout(() => {
                article.className = "pocus";
            }, 1000);

        } else {
            
            article.className = "focus";

            article.style.animationName = "expand";
            articleContent.style.whiteSpace = "normal";
            element.innerHTML = "collapse";

            isExpanded = true;

            setTimeout(() => {
                articleContent.style.overflow = "scroll";
            }, 1000);
        }

    } );

} );
