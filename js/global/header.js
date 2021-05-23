document.write(
    `
        <header>

            <img id="logo" src="sources/images/global/header-logo.svg"></div>

            <nav>
                <ul id="nav-items-container">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="delivery-costs.html">Delivery costs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="blog.html">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
            </nav>

            <button id="nav-button" onclick="toggleNav()">
                <div id="nav-button-top-bar"></div>
                <div id="nav-button-bottom-bar"></div>
            </button>

        </header>
    `
);