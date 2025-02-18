'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "54df2dd542c0c721344d813fa5528b29",
"version.json": "d30889ca45858d3eb96d0051c1f976f7",
"favicon.ico": "0768322063960f295f967208d97e43f6",
"index.html": "b0d6bdad8e6496943071f126517d26ad",
"/": "b0d6bdad8e6496943071f126517d26ad",
"main.dart.js": "fb6868bf9da4f238e3c49b93a5325ad6",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-192.png": "eebeb99928e904989177d8bf7e549883",
"icons/Icon-maskable-192.png": "eebeb99928e904989177d8bf7e549883",
"icons/Icon-maskable-512.png": "eebeb99928e904989177d8bf7e549883",
"icons/Icon-512.png": "eebeb99928e904989177d8bf7e549883",
"manifest.json": "dc73c5e792accfa76e4e9d5064e9037d",
"assets/AssetManifest.json": "c12fdb7e382e2728f7f5fcf9cdc963b8",
"assets/NOTICES": "86fb0aa6930f671737e9bed651034b28",
"assets/FontManifest.json": "0d648fbcad51ea4cd00cb983ddbccc17",
"assets/AssetManifest.bin.json": "3382998d0de4d4da8d608a2a4bc1e7d4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4c37758a84bfefd14ca4b7a4279d429d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9bda34a8f432119792fc0014d5f37359",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e7049ce97e1b1d999441238c2626bc94",
"assets/fonts/MaterialIcons-Regular.otf": "ef260b92f448200a932f8c8193633fcf",
"assets/assets/images/general/ship.png": "72fd06e0e83aaeca403d1a7c908076d1",
"assets/assets/images/general/colorful_circle.png": "be13e5e6b23635f907b26c47d64dca1e",
"assets/assets/images/general/2.0x/ship.png": "750a15fbedf62ad0b10df9413c9c0a29",
"assets/assets/images/general/3.0x/ship.png": "8e2915beb933ee951ed4ab0e332b1de3",
"assets/assets/images/logos/logo.png": "9472c327f6829dc7e3be61f2ab36f37c",
"assets/assets/images/onTheWayMap.png": "03e70b3c6e1c757ceca4d1b9efe9ff30",
"assets/assets/images/infocard.png": "6350462a2281e1c7cba7ece2e3e73580",
"assets/assets/images/onPortMap.png": "5ab73feced0d51a1e83d3cb5451ba452",
"assets/assets/images/completedMap.png": "e49ab426e48e13ee97b95bcfb6d22904",
"assets/assets/icons/dash.png": "24bbf0efd6b39ba7232aafcc7467b8d8",
"assets/assets/icons/settings.png": "8ed2d657478554dbe92ee28f30315489",
"assets/assets/icons/ship.png": "2170158721110d5ae4f34f2d80887349",
"assets/assets/icons/searchIcon.png": "03048ac429e5aad742eeacd64a3da5ab",
"assets/assets/icons/reports.png": "523bbb17fe52c5ebe367eb3b96ab1efd",
"assets/assets/icons/arrowDown.png": "42d1194e2111b5e62c1b3ea3cd6a0b40",
"assets/assets/icons/blue_fill.png": "814c08aeb373100dbf0b54306b00d294",
"assets/assets/icons/logout.png": "eaf1c77fc81089ad8c3ade03219ed103",
"assets/assets/icons/deleteArrow.png": "8d783f742d1d1d165bc10aab21493deb",
"assets/assets/icons/scanIcon.png": "91c813eaff0536b9c326145ef117a0a0",
"assets/assets/icons/point.png": "93ef5e76052fe9bff22bf54ae9437265",
"assets/assets/icons/truckMap.png": "76a9ab3273953e0925f7c4ea54f18be2",
"assets/assets/icons/man.png": "db548587033ee529d2f3625d84b15646",
"assets/assets/icons/deficit_icon.png": "d27837fa261b01d1175061db6c434f24",
"assets/assets/icons/mapStart.png": "89532b7d757bb5a974662b4dc59d8ff5",
"assets/assets/icons/dialog_close.png": "e063792e154b9ca307f03afe8a0bad11",
"assets/assets/icons/trip.png": "7121c907192855a75c4336bb485d8556",
"assets/assets/icons/drawerLogo.png": "cbcb77bd9a94755aa72fda85e4630edd",
"assets/assets/icons/orange_fill.png": "f56c62bec71187cea477bc3ee25fb3cc",
"assets/assets/icons/delete.png": "70f2bdb643db313cdd5f5a382d2a6818",
"assets/assets/icons/viajes_icon.png": "6aa41f9d3485f1bd22e967a34aab0efa",
"assets/assets/icons/truck.png": "1ef43019989d9e7ea8507ea09d99921c",
"assets/assets/icons/time_icon.png": "b17aa5b140139e941eeed361a2f5710c",
"assets/assets/icons/copy.png": "8655744878bf996c6352ca1f35486f6f",
"assets/assets/icons/arrowback.png": "7b002b350672b3ecb1fe4aaaf99c9065",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
