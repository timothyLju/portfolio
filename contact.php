<!DOCTYPE html>
<html>
    <head>
        <title>Email sent</title>
        <meta charset="utf-8">
        <meta name="description" content="Portfolio Website of Timothy Ljunggren">
        <meta name="keywords" content=""> <!--Add keywords later-->
        <meta name="author" content="Timothy Ljunggren">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="./styles/style.css">
        <link rel="stylesheet" href="./styles/contact.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    </head>
    <body>
        <div class="topnav" id="topnav">
            <div class="nav-content logo">
                <a href="./index.html">Portfolio</a>
            </div>
            <div class="nav-content mobile-menu">
                <span class="material-symbols-outlined notranslate" onclick="openMenu()">
                    menu
                </span>
            </div>
            <div class="nav-content links">
                <a href="./index.html">Home</a>
                <a href="./cv.html">CV</a>
                <a href="./projects.html">Projects</a>
                <a href="./contact.html" class="active">Contact</a>
            </div>
        </div>
        <?php
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $msg = wordwrap($message, 70);

        mail("timothy@antimala.de", "Contact from webpage", "$name ($email):\n$msg");
        ?>
        <div class="first-container">
            <div class="confirmation">
                <img src='./media/check_circle.svg' height="250px"/>
                <?php echo "<p>Thanks for the Email, $name!</p>" ?>
            </div>
        </div>
        <script src="./scripts/navbar.js"></script>
    </body>
</html>