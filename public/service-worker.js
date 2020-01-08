self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.74111ef3688dd1c56c62.js",
    "revision": "932aac8211e622a958bf"
  },
  {
    "url": "/_next/static/chunks/styles.b314d5a56ab2e9ea3b68.js",
    "revision": "7e2a8f3a00e6aa556050"
  },
  {
    "url": "/_next/static/css/styles.4a20bb81.chunk.css",
    "revision": "7e2a8f3a00e6aa556050"
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
    "url": "/_next/static\\UKHVPYYrWAQW8o1dIuEzT\\pages\\_app.js",
    "revision": "0e7a74bc0e054d06dcae"
  },
  {
    "url": "/_next/static\\UKHVPYYrWAQW8o1dIuEzT\\pages\\_error.js",
    "revision": "0433234168cec848411f"
  },
  {
    "url": "/_next/static\\UKHVPYYrWAQW8o1dIuEzT\\pages\\index.js",
    "revision": "50bf00a095ed5eb369cd"
  },
  {
    "url": "/_next/static\\UKHVPYYrWAQW8o1dIuEzT\\pages\\repositories.js",
    "revision": "aee68f7b53cdbaa1ce16"
  },
  {
    "url": "/_next/static\\UKHVPYYrWAQW8o1dIuEzT\\pages\\users.js",
    "revision": "ecfa749a9d593e029b1b"
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
