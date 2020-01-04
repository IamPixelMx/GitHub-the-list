self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.b0d04d7ce74a18213801.js",
    "revision": "c2e3cd2ff3fa40d4dd1d"
  },
  {
    "url": "/_next/static/chunks/styles.b314d5a56ab2e9ea3b68.js",
    "revision": "c7c19d0960f11db02ef9"
  },
  {
    "url": "/_next/static/css/styles.7dab86fc.chunk.css",
    "revision": "c7c19d0960f11db02ef9"
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
    "url": "/_next/static\\vu2mi1aIyiGu0tf2fBKY-\\pages\\_app.js",
    "revision": "ebe5c8ed9ff5f3f93a2e"
  },
  {
    "url": "/_next/static\\vu2mi1aIyiGu0tf2fBKY-\\pages\\_error.js",
    "revision": "de189305cb2085f6c8ba"
  },
  {
    "url": "/_next/static\\vu2mi1aIyiGu0tf2fBKY-\\pages\\index.js",
    "revision": "4a4573456a4bd850b5e0"
  },
  {
    "url": "/_next/static\\vu2mi1aIyiGu0tf2fBKY-\\pages\\repositories.js",
    "revision": "5f9a9be2d845d0b9d7b8"
  },
  {
    "url": "/_next/static\\vu2mi1aIyiGu0tf2fBKY-\\pages\\users.js",
    "revision": "607cd0480f51b987f00b"
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
