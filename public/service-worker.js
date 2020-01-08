self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.15f77f440d9cb825fc79.js",
    "revision": "f6e87b92c79c0324a0f8"
  },
  {
    "url": "/_next/static/chunks/styles.799103358b1605d5256a.js",
    "revision": "938e3aa55ea5fdb7dc92"
  },
  {
    "url": "/_next/static/css/styles.d02f5ae9.chunk.css",
    "revision": "938e3aa55ea5fdb7dc92"
  },
  {
    "url": "/_next/static/runtime/main-7dade8777a133b1f5386.js",
    "revision": "3d27ebea42a4a9020fb0"
  },
  {
    "url": "/_next/static/runtime/polyfills-f5af81b00d12d923ec0f.js",
    "revision": "c133b2cadab912d169ad"
  },
  {
    "url": "/_next/static/runtime/webpack-4b444dab214c6491079c.js",
    "revision": "71726f334912f74c262a"
  },
  {
    "url": "/_next/static\\xlQbthPWPV0twmuxISBs5\\pages\\_app.js",
    "revision": "ea9a5d5100410cebc591"
  },
  {
    "url": "/_next/static\\xlQbthPWPV0twmuxISBs5\\pages\\_error.js",
    "revision": "63626268d74fa93ab04c"
  },
  {
    "url": "/_next/static\\xlQbthPWPV0twmuxISBs5\\pages\\index.js",
    "revision": "26f4d4e9e3f7144f7123"
  },
  {
    "url": "/_next/static\\xlQbthPWPV0twmuxISBs5\\pages\\lists.js",
    "revision": "57fa41d69f7139d962c3"
  },
  {
    "url": "/_next/static\\xlQbthPWPV0twmuxISBs5\\pages\\repositories.js",
    "revision": "9771d38af7a4f79b8e4b"
  },
  {
    "url": "/_next/static\\xlQbthPWPV0twmuxISBs5\\pages\\users.js",
    "revision": "33badc149c381dc1c9ab"
  }
];

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

importScripts(
  
);

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"OfflineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/api.github.com\//, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"api-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ], headers: { 'x-test': 'true' } })] }), 'GET');
workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/(results | question)/, new workbox.strategies.NetworkFirst({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ], headers: { 'x-test': 'true' } })] }), 'GET');
