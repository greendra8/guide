<!DOCTYPE html>
<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/head.php"); ?>
<body>
    <?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/nav.php"); ?>
    <div class="container menu">
        <div class="row">
            <li><a href="/"><i class="fas fa-home"></i> General</a></li>
            <li class="active"><a href="/pages/adventures/index"><i class="fas fa-hiking"></i> Adventures</a></li>
            <li><a href="/items"><i class="fas fa-th"></i> Items</a></li>
        </div>
    </div>
    <div class="container main">
        <hr>
        <a href="/pages/general/introduction.php">
            <div class="row listing">
                <img src="/img/crafting.png" class="rounded float-left icon" alt="...">
                <h3>An Introduction</h3>
                <p>A simple, short and sweet introduction to Minecraft Earth! Everything you need to know.</p>
                <button>Learn More</button>
            </div>
        </a>

      </div>
    
</body>
</html>