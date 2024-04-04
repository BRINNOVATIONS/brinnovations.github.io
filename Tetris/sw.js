var CACHE_NAME = 'fill-the-gap-appcreator24-v1';
var GAME_CACHE_NAME = 'fill-the-gap-appcreator24-cache';
var urlsToCache = [
  'index.html',
  'game.css',
  'game.js',
  'sw.js',
  
  'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/bgm.mp3',
  'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/clear.mp3',
  'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/click.mp3',
  'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/coin.mp3',
  'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/drop.mp3',
  'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/opening/kittyopening.mp3',
  'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/opening/opening.mp3',
  'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/play/static.mp3',
  'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/slide-up.mp3',
  'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/fonts/acrom-bold.ttf',
  'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/fonts/acrom-bold.eot',

'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/bgm.ogg',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/clear.ogg',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/click.ogg',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/coin.ogg',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/drop.ogg',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/opening/kittyopening.ogg',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/opening/opening.ogg',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/play/static.ogg',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/audio/slide-up.ogg',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/fonts/acrom-bold.woff',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/background.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/bg.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/block-base.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/blocks/blue.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/blocks/green.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/blocks/orange.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/blocks/pink.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/blocks/purple.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/blocks/small/blue.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/blocks/small/green.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/blocks/small/orange.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/blocks/small/pink.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/blocks/small/purple.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/blocks/small/yellow.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/blocks/yellow.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/border-over.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/border-score.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/border-up.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/btn-blue.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/btn-home.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/btn-pause.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/btn-pink.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/btn-purple.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/light.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/music.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/pop-border.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/sound.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/volume-bar.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/volume-base.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/game/volume-slide.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/loading/ajax-loader.gif',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/orientate/rotate.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/promo/icons/128x128.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/splash/mobile/cover-start.jpg',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/sprites/cash-panel.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/sprites/coin.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/sprites/hand-pointer.png',
'https://games.e-droid.net/en/fill-the-gap-appcreator24/media/graphics/sprites/tutorial-highlight.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache: ' + CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener('activate', function(event) {

  var cacheWhitelist = [CACHE_NAME];
  var gameCacheName = GAME_CACHE_NAME;

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1 && cacheName.includes(gameCacheName)) {
            console.log('deleted cache: ' + cacheName);  
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

