// boolean flag isExpanded to keep track of whether an article is expanded or not
var isExpanded = false;

// get the article buttons and add to each one an event-listener

document.querySelectorAll(".article-btn").forEach( button => {

    button.addEventListener( "click", event => {
        // get the parent article of the button
        const article = button.parentElement;
        // get the unique id number of the article
        const articleNumber = article.id[article.id.length - 1];

        // get the device screen width
        const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

        // determine trasformation values
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

        // set trasformation values
        document.documentElement.style.setProperty("--translateY-value", translateYValue);
        document.documentElement.style.setProperty("--translateX-value", translateXValue);

        // select the appropriate article content (i.e. the "in focus" article's paragraph)
        const articleContent = document.querySelector("#article-content-" + articleNumber);
        
        if (isExpanded) {

            article.style.animationName = "collapse";
            articleContent.style.whiteSpace = "nowrap";
            articleContent.style.overflow = "hidden";
            button.innerHTML = "expand";

            isExpanded = false;

            setTimeout(() => {
                article.className = "pocus";
            }, 1000);

        } else {
            
            article.className = "focus";

            article.style.animationName = "expand";
            articleContent.style.whiteSpace = "normal";
            button.innerHTML = "collapse";

            isExpanded = true;

            setTimeout(() => {
                articleContent.style.overflow = "scroll";
            }, 1000);
        }

    } );

} );