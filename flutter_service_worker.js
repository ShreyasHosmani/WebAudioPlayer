'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "94c3c22907658f9053806a2726165a1d",
"/": "94c3c22907658f9053806a2726165a1d",
"main.dart.js": "8f89a13326abce1cdddb9c2697851c1d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6c79a9ff2c990fe4afe8ba3e1c2a88ea",
"assets/LICENSE": "b3a1f5b466bb323e642035f25e233e62",
"assets/AssetManifest.json": "d92035bf6dafa8d2cac3c2e12ec3e2e3",
"assets/FontManifest.json": "df4c5735f5a4cc54a0f8d17b240d6307",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/8.jpg": "4a7f09e7f720f3934e55ecef1c0d0763",
"assets/assets/images/9.jpg": "6503b1d5cfb0affae3b834cc39683ca9",
"assets/assets/images/Screenshot.png": "9083ce09a164155cd87d2e126aaadc70",
"assets/assets/images/4.jpg": "6ac89449d4678f2979bd8f73163043de",
"assets/assets/images/5.jpg": "f723468be2fe43488a5aac915a8b0f17",
"assets/assets/images/6.jpg": "d93e6bd62fee9f3cc894d2ef1fb9fcba",
"assets/assets/images/2.jpg": "9dcf7ddf5f7b7b02c897597c600d8ad2",
"assets/assets/images/3.jpg": "73dc793f5a2acb666ca3c9d28b8643ad",
"assets/assets/images/1.jpg": "dc37596a62d48b3911f1efcf79e0f666",
"assets/assets/images/0.jpg": "1b0b8d4cfc3302800ee96b81f5adf726",
"assets/assets/fonts/Poppins-ExtraLight.otf": "4918ffef121897b111a9cd50fa23ba34",
"assets/assets/fonts/Poppins-Light.otf": "02c5a7af5427f03f93cd9094334ee181",
"assets/assets/fonts/Poppins-Medium.otf": "f88c443f02135a3ba091560e76ed767f",
"assets/assets/fonts/Poppins-SemiBold.otf": "b0b3d360d13a9649222edd1d844dfc9c",
"assets/assets/fonts/Poppins-Bold.otf": "e47421f9b8cec2661620743c53475c8d",
"assets/assets/fonts/Poppins-Regular.otf": "de2dd9339ae7636475fcd91b3ed0e24f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
