/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about.php",
    "revision": "83165769275103c2857a72cdf577ab15"
  },
  {
    "url": "css/font/Minecraft.ttf",
    "revision": "ba1c2708d8c4295804f8015026e8d7ea"
  },
  {
    "url": "css/font/MinecraftBIG.ttf",
    "revision": "9a402d6a80ceda873798bf79af582916"
  },
  {
    "url": "css/font/OpenSans.ttf",
    "revision": "3ed9575dcc488c3e3a5bd66620bdf5a4"
  },
  {
    "url": "css/font/OpenSansBold.ttf",
    "revision": "1025a6e0fb0fa86f17f57cc82a6b9756"
  },
  {
    "url": "css/font/OpenSansItalic.ttf",
    "revision": "f6238deb7f40a7a03134c11fb63ad387"
  },
  {
    "url": "css/fontawesome/css/all.min.css",
    "revision": "76cb46c10b6c0293433b371bae2414b2"
  },
  {
    "url": "css/fontawesome/webfonts/fa-brands-400.ttf",
    "revision": "13685372945d816a2b474fc082fd9aaa"
  },
  {
    "url": "css/fontawesome/webfonts/fa-regular-400.ttf",
    "revision": "db78b9359171f24936b16d84f63af378"
  },
  {
    "url": "css/fontawesome/webfonts/fa-solid-900.ttf",
    "revision": "1ab236ed440ee51810c56bd16628aef0"
  },
  {
    "url": "css/images/background_blurred.png",
    "revision": "39a7764a76c045a4ecabd7bbe7a09d74"
  },
  {
    "url": "css/images/logo.png",
    "revision": "b8ab568ea4416127f8cc54388904c728"
  },
  {
    "url": "css/style.css",
    "revision": "895dc4b8adf9856b9342cd7249fc35c4"
  },
  {
    "url": "favicon.ico",
    "revision": "09b2579732651b5d75dacce5ed243f83"
  },
  {
    "url": "img/adventure_chest_common.png",
    "revision": "6ae2982a8d5a0d5dedaf1f83780bcd0b"
  },
  {
    "url": "img/adventure_chest_legendary.png",
    "revision": "e9a740223f9517041c789d0560b2e53d"
  },
  {
    "url": "img/adventure_common.png",
    "revision": "77a47be6af3cffcc31072b2e1b8f04d9"
  },
  {
    "url": "img/adventure_crystal_common.png",
    "revision": "05a1eeac8e214702e7bf656214a24940"
  },
  {
    "url": "img/adventure_crystal_epic_0.png",
    "revision": "7bb411dc5142b041608def7d491c3e50"
  },
  {
    "url": "img/adventure_crystal_legendary_0.png",
    "revision": "e13b9d90c06a8d267e99be8454736099"
  },
  {
    "url": "img/adventure_crystal_rare_0.png",
    "revision": "f37b02e1b0dd0cd7a15d2e50a1e6610a"
  },
  {
    "url": "img/adventure_crystal_uncommon.png",
    "revision": "d81212eec0a4f017ad75deb4c2bdee77"
  },
  {
    "url": "img/adventure_crystals.png",
    "revision": "df025f82ab6b78e7386a6033349bb293"
  },
  {
    "url": "img/adventure_epic.png",
    "revision": "c503dc79092129142a9567859b4deb17"
  },
  {
    "url": "img/adventure_legendary.png",
    "revision": "ff21aae032cfc8369968dc6e0b6d8e01"
  },
  {
    "url": "img/adventure_rare.png",
    "revision": "88f62fac31159fabafdc23f03d561715"
  },
  {
    "url": "img/adventure_uncommon.png",
    "revision": "d49bda41b15765f539555e976baf3872"
  },
  {
    "url": "img/backpack.png",
    "revision": "cd7b08ec21ceb3d49dd67d64cb2ab55e"
  },
  {
    "url": "img/boosts.png",
    "revision": "31a012805490c88cfea8ae21aeb6b206"
  },
  {
    "url": "img/buildplate.png",
    "revision": "d72e893a0db7ef384cb87401c5782224"
  },
  {
    "url": "img/challenges_completed.png",
    "revision": "a7c684853acb6a6b6ff429afdf240add"
  },
  {
    "url": "img/challenges.png",
    "revision": "635c1fb4b6d625de18241aae373148d9"
  },
  {
    "url": "img/chest_open.png",
    "revision": "27afa71edb89b70721d7748ded01e674"
  },
  {
    "url": "img/chicken.png",
    "revision": "280b709f341a5c45cdf938fc0fd57796"
  },
  {
    "url": "img/cluckshroom.png",
    "revision": "ace8d26519f88a952dc804780151b75a"
  },
  {
    "url": "img/cow.png",
    "revision": "dc22d35aba9002be5d5166195c68d226"
  },
  {
    "url": "img/crafting.png",
    "revision": "52d38907b4f455753fe41d5eb222d787"
  },
  {
    "url": "img/creeper.png",
    "revision": "fce6b026ebf94412588579b12ca4c7d9"
  },
  {
    "url": "img/diamond_ore.png",
    "revision": "92d3af758086460175ab73acad90acb0"
  },
  {
    "url": "img/diamond_sword.png",
    "revision": "ae2f028a92da2baade9b0b789502f8b0"
  },
  {
    "url": "img/diamond.png",
    "revision": "35fabd8a03d4d38569078fedc23da658"
  },
  {
    "url": "img/earth.png",
    "revision": "2f3b1ca8868631f8baab9e25ae066e8e"
  },
  {
    "url": "img/fish.png",
    "revision": "8c0f691dc23881cb69a724f649d43a6a"
  },
  {
    "url": "img/food.png",
    "revision": "fea2b4a41564850ddc944e4be1ca43a8"
  },
  {
    "url": "img/friends.png",
    "revision": "c2a6e88d711c558ae2682b48c847ba63"
  },
  {
    "url": "img/grass-tappable.png",
    "revision": "1e6dfb99231c3450a670e525bb06f0ae"
  },
  {
    "url": "img/grass-water-tappable.png",
    "revision": "de11081305d647d18dac90bd0d611b68"
  },
  {
    "url": "img/grass.png",
    "revision": "2ebfb20bccebb6797e3387ecb69bc13a"
  },
  {
    "url": "img/horned_sheep.png",
    "revision": "81582f05b40900fc7b08a7deccb5522f"
  },
  {
    "url": "img/inventory.png",
    "revision": "e6df24a6b0321c7d98e1169773f2c3b1"
  },
  {
    "url": "img/jolly_lama.png",
    "revision": "973b1a1910aff222f6fb6b0eee49079e"
  },
  {
    "url": "img/journal.png",
    "revision": "8618601889ff1e8cbbd5c06d627e22e4"
  },
  {
    "url": "img/jumbo_rabbit.png",
    "revision": "1ea96a7df615d13ce6e5d5b6a2c4a861"
  },
  {
    "url": "img/log.png",
    "revision": "8850b976f6fbf0540ebf67cf5473e83e"
  },
  {
    "url": "img/logo_t.png",
    "revision": "47c23f688a46aa986dc3ed9cc3840493"
  },
  {
    "url": "img/logo.png",
    "revision": "4c529e6aa5446a1a70794c3a396c3b10"
  },
  {
    "url": "img/makinghub.png",
    "revision": "3f5bb889ce5b7344aa035c8cd35c1285"
  },
  {
    "url": "img/mining.png",
    "revision": "85ba6370e5efee10377ac82144296ed0"
  },
  {
    "url": "img/moobloom.png",
    "revision": "01a927f858acadf1d87d7907dde2b221"
  },
  {
    "url": "img/muddy_pig.png",
    "revision": "c25f3bb56adc478db1783cbf978fb301"
  },
  {
    "url": "img/obsidian.png",
    "revision": "b1f67d4d204476e105d22fc9adb46646"
  },
  {
    "url": "img/ocelot.png",
    "revision": "c98952ecd4f11df01c21b3e23826e17b"
  },
  {
    "url": "img/parrot.png",
    "revision": "e370d14cad9cb81c3e9369e09bf0b659"
  },
  {
    "url": "img/pig_black.png",
    "revision": "cd49268d557b452754beacc298b258c6"
  },
  {
    "url": "img/pig.png",
    "revision": "101a632566010711fd9212cc785dd9a8"
  },
  {
    "url": "img/planks.png",
    "revision": "986a1b1ac1be349d5a5ebf38a783c64d"
  },
  {
    "url": "img/polarbear.png",
    "revision": "b0fca374d75659bec9a20660a0e49ef2"
  },
  {
    "url": "img/profile.png",
    "revision": "ac443697472dff9900736c1883e1ed44"
  },
  {
    "url": "img/purple_cat.png",
    "revision": "e0ecab9918779a7feec92083d30755eb"
  },
  {
    "url": "img/rabbit.png",
    "revision": "914293d5a8b7f4a8832ed5f92a4f973c"
  },
  {
    "url": "img/ruby.png",
    "revision": "fd39a21d69ed227cb6f8b3b86e906ef4"
  },
  {
    "url": "img/scan_code.png",
    "revision": "8a10f841ef8e43417e3bfcf5ed1bec68"
  },
  {
    "url": "img/seasons.png",
    "revision": "73a3b057ba5755f60cf954a53f075d3b"
  },
  {
    "url": "img/settings.png",
    "revision": "1d77999e73be0f7c8085593ed35c6d6f"
  },
  {
    "url": "img/sheep.png",
    "revision": "fba7d056ebe6840fd51b1e0ef9009fba"
  },
  {
    "url": "img/sign.png",
    "revision": "84550962c9f519d5e71b0482a968c4d4"
  },
  {
    "url": "img/skeleton.png",
    "revision": "19bae11a54e9caeb682d1c8765bdf003"
  },
  {
    "url": "img/skins.png",
    "revision": "e7c2dbe080726093adadb0434ca7eb26"
  },
  {
    "url": "img/smelting.png",
    "revision": "5d8d7da8d2f236420f04d5c173d87ca9"
  },
  {
    "url": "img/spawn_egg_111.png",
    "revision": "3cedd7dc6d7e3fb0dd69f3e21d4acf95"
  },
  {
    "url": "img/spawn_egg_112.png",
    "revision": "0d62244ef1f1e5671942e70fcad3bade"
  },
  {
    "url": "img/spawn_egg_5006.png",
    "revision": "553de1e46cf97b424c2237cf26ea56cc"
  },
  {
    "url": "img/spawn_egg_5007.png",
    "revision": "f0fbdef2c20d280d5c6e8f848e340520"
  },
  {
    "url": "img/spawn_egg_5008.png",
    "revision": "724a909ccedf11a5b1d952174f798903"
  },
  {
    "url": "img/spawn_egg_5009.png",
    "revision": "30abd263b5a2c1b072f5b45dc805cdd4"
  },
  {
    "url": "img/spawn_egg_5011.png",
    "revision": "8a01662a65de49f215c51ce41bb99028"
  },
  {
    "url": "img/spawn_egg_5012.png",
    "revision": "79f0d4dd83aece9da6100e0fbd18a82d"
  },
  {
    "url": "img/spawn_egg_5013.png",
    "revision": "06428fb241589ee7eae7b39ab7b8b049"
  },
  {
    "url": "img/spawn_egg_5014.png",
    "revision": "18aba027857e27c61a3d6908af0c5347"
  },
  {
    "url": "img/spawn_egg_5015.png",
    "revision": "847c5453d4e30c611c16cfdb73ca8ffe"
  },
  {
    "url": "img/spawn_egg_5020.png",
    "revision": "08814cc38b4273799ff6db1bd939a701"
  },
  {
    "url": "img/spawn_egg_5022.png",
    "revision": "5623fd7257f0c3344701d1fcdf7056eb"
  },
  {
    "url": "img/spawn_egg_5023.png",
    "revision": "e94e6831d9ef20fb4aa374e04400c284"
  },
  {
    "url": "img/spawn_egg_5026.png",
    "revision": "cf850afbc7421e7e7a7c22ee4289358c"
  },
  {
    "url": "img/spawn_egg_5028.png",
    "revision": "4bd566e140cbcc88b18646d9a341f043"
  },
  {
    "url": "img/spawn_egg_5031.png",
    "revision": "523616d2f2457d6d13b10192bfc99641"
  },
  {
    "url": "img/spawn_egg_5033.png",
    "revision": "7453ddcb23887719d1af4e618a933149"
  },
  {
    "url": "img/spawn_egg_5040.png",
    "revision": "6347b877cf2c8578d9f86dfade1bc827"
  },
  {
    "url": "img/spawn_egg_5041.png",
    "revision": "f35d260eb2a2ed43c4494f21b84051f8"
  },
  {
    "url": "img/spawn_egg_5047.png",
    "revision": "0fd0b0564644506e7023ca25f2a88689"
  },
  {
    "url": "img/spawn_egg_5049.png",
    "revision": "7aade87f3422569d24f3b17a73cc64a4"
  },
  {
    "url": "img/spawn_egg_9.png",
    "revision": "d7abe1d835efc133e55a798d45935758"
  },
  {
    "url": "img/spider.png",
    "revision": "8a8b8c1efd2312840bf6e5a134ab6fb0"
  },
  {
    "url": "img/spruce-tappable.png",
    "revision": "243eb79a53f1f19db57c28131b7dfa85"
  },
  {
    "url": "img/stone-tappable.png",
    "revision": "0a7d42e9bc2f7c0ebacc83d8eff191ae"
  },
  {
    "url": "img/store.png",
    "revision": "9729bc4412246d3647104662add088da"
  },
  {
    "url": "img/tappable_challenge_legendary.png",
    "revision": "9a9a9fdb11615de6e1a81244bcb8a627"
  },
  {
    "url": "img/wooden_sword.png",
    "revision": "688a5dd8d03242066ef32145b22c8e70"
  },
  {
    "url": "img/wooly_cow.png",
    "revision": "a987a2818a9705c64199a3649ee0fdba"
  },
  {
    "url": "img/xp.png",
    "revision": "ecece64ae4233702d0561dff29fd50b4"
  },
  {
    "url": "img/zombie.png",
    "revision": "49310484f8168020782c14c4f8e099ab"
  },
  {
    "url": "includes/head.php",
    "revision": "8a304bf1a471c0102fff3b9fa2dc7727"
  },
  {
    "url": "includes/nav.php",
    "revision": "5029611de3ff5612c95113b7fc255a7a"
  },
  {
    "url": "index.php",
    "revision": "6a9ee775919222338a925c12a9923e6f"
  },
  {
    "url": "items.php",
    "revision": "3560a761ef85424917b41ae136b68e14"
  },
  {
    "url": "pages/adventures/index.php",
    "revision": "77d828935e0a8dd8c59008a8c1fdd7ec"
  },
  {
    "url": "pages/adventures/squid_tank.php",
    "revision": "d0378c5beb3f4b25126a2c7294a4651f"
  },
  {
    "url": "pages/adventures/yin_yang.php",
    "revision": "6eb96aa30835fcdc485b0ed15b787716"
  },
  {
    "url": "pages/general/adventures.php",
    "revision": "ef3adca261c5793f5db31fb08bbb20c8"
  },
  {
    "url": "pages/general/challenges.php",
    "revision": "04809e93de43804412e874c2d529d226"
  },
  {
    "url": "pages/general/introduction.php",
    "revision": "83a1d857c7416e47e4f8da23419e55ab"
  },
  {
    "url": "pages/general/inventory.php",
    "revision": "d1ac80ded767f9398e01f11a10919efc"
  },
  {
    "url": "pages/general/journal.php",
    "revision": "0a5299c39f9e8161a2396d17225ef7d3"
  },
  {
    "url": "pages/general/profile.php",
    "revision": "e2edfbfab0c8cb19697cb6fa5a737441"
  },
  {
    "url": "pages/general/seasons.php",
    "revision": "3f74810617a0b677645e758a6f18be9b"
  },
  {
    "url": "pages/general/tappables.php",
    "revision": "4651aa79948ddd341c6b9849b512f748"
  },
  {
    "url": "pwa/app.js",
    "revision": "97fd1dd77a37c16a30751aa9add0968e"
  },
  {
    "url": "/",
    "revision": "a7055a96ae5e7563f0777c431c067ff3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
