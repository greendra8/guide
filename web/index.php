<!DOCTYPE html>
<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/head.php"); ?>

<body>
    <?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/nav.php"); ?>
    <div class="container menu">
        <div class="row">
            <li class="active"><a href="/"><i class="fas fa-home"></i> General</a></li>
            <li><a href="/pages/adventures/index"><i class="fas fa-hiking"></i> Adventures</a></li>
            <li><a href="/items"><i class="fas fa-th"></i> Items</a></li>
        </div>
    </div>
    <div class="container main">
        <hr>
        <div class="clearfix" id="google_translate_element"></div>
        <a href="/pages/general/introduction.php">
            <div class="row listing">
                <img src="/img/earth.png" class="rounded float-left icon" alt="...">
                <h3 id="introduction">Introduction</h3>
                <p>A simple, short and sweet introduction to Minecraft Earth! Everything you need to know.</p>
                <button>Learn More</button>
            </div>
        </a>
        <a href="/pages/general/tappables.php">
            <div class="row listing">
                <img src="/img/stone-tappable.png" class="rounded float-left icon" alt="...">
                <h3 id="tappables">Tappables</h3>
                <p>What are tappables and how can you collect them? Plus what do tappable rarities mean?</p>
                <button>Learn More</button>
            </div>
        </a>
        <a href="/pages/general/inventory.php">
            <div class="row listing">
                <img src="/img/backpack.png" class="rounded float-left icon" alt="...">
                <h3 id="inventory">Inventory</h3>
                <p>How does your inventory work in Minecraft Earth and how can you access it?</p>
                <button>Learn More</button>
            </div>
        </a>
        <a href="/pages/general/profile.php">
            <div class="row listing">
                <img src="/img/profile.png" class="rounded float-left icon" alt="...">
                <h3 id="profile">Profile</h3>
                <p>What does your profile tell you and how can you view it in Minecraft Earth.</p>
                <button>Learn More</button>
            </div>
        </a>
        <a href="/pages/general/.php">
            <div class="row listing">
                <img src="/img/adventure_crystals.png" class="rounded float-left icon" alt="...">
                <h3 id="adventures">Adventures</h3>
                <p>What are adventures and adventure crystals and how you can play them in Minecraft Earth.</p>
                <button>Learn More</button>
            </div>
        </a>
        <a href="/pages/general/.php">
            <div class="row listing">
                <img src="/img/journal.png" class="rounded float-left icon" alt="...">
                <h3 id="journal">Journal</h3>
                <p>What is the journal and how can you use it in Minecraft Earth.</p>
                <button>Learn More</button>
            </div>
        </a>
        <div class="row listing soon">
            <img src="/img/purple_cat.png" class="rounded float-left icon" alt="...">
            <h3>More Coming Soon!</h3>
            <p>Stay tuned for more Minecraft Earth guides coming soon!</p>
        </div>
    </div>

    <div class="container menu footer">
        <div class="row">
            <li><a href="/about.php">About</a></li>
            <li><a href="/">Terms</a></li>
            <li><a href="mailto:greendra8@hotmail.co.uk">Contact</a></li>
        </div>
    </div>
</body>

</html>