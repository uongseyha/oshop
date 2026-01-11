
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-XMRGYQ2Z.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QYIYRO4Q.js",
      "chunk-YOMPV6CY.js",
      "chunk-XMP3FFNY.js",
      "chunk-YJJFARM2.js"
    ],
    "route": "/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LPKMVCJ2.js",
      "chunk-XMP3FFNY.js",
      "chunk-YJJFARM2.js"
    ],
    "route": "/product-detail/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J4WBRJNP.js"
    ],
    "route": "/shopping-cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OITIFS4R.js",
      "chunk-YJJFARM2.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UW7GDXVL.js",
      "chunk-YJJFARM2.js"
    ],
    "route": "/check-out"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IFV64VUM.js",
      "chunk-JXPPTWUF.js",
      "chunk-XMP3FFNY.js",
      "chunk-YJJFARM2.js"
    ],
    "route": "/admin/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GK5NNGAB.js",
      "chunk-JXPPTWUF.js",
      "chunk-YOMPV6CY.js",
      "chunk-XMP3FFNY.js",
      "chunk-YJJFARM2.js"
    ],
    "route": "/admin/products/new"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GK5NNGAB.js",
      "chunk-JXPPTWUF.js",
      "chunk-YOMPV6CY.js",
      "chunk-XMP3FFNY.js",
      "chunk-YJJFARM2.js"
    ],
    "route": "/admin/products/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25308, hash: '8a15676a420986428afac34d5ff1f20c3f92a5344149a55c13e0eabe488ab701', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17739, hash: '79e243db1e4689d54d4e7339b2a138e80f868a33c960561366f6d55a7461e14f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'shopping-cart/index.html': {size: 28143, hash: '74d37ae05e90136e285c2509234286106d071e40938aae498ae53189dcd564d6', text: () => import('./assets-chunks/shopping-cart_index_html.mjs').then(m => m.default)},
    'check-out/index.html': {size: 309, hash: '4248983475857f7f4383c234547863214f0889f36ed16ff7fdb0607c2e7f9027', text: () => import('./assets-chunks/check-out_index_html.mjs').then(m => m.default)},
    'index.html': {size: 30013, hash: '2829afe39c722f5bc26ee34f000afb22bbdf36a3d105bf0f7383caf592779232', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 29230, hash: '1d91859271aa99cb6d73121d073fdbd78ee7bc142472e1417655ca3ad04e8aa8', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 29418, hash: 'ba5e7b629d22f28124ffe24d1dd1d72b676173ba4ee547f1b6b1ce3da2441fd1', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'admin/products/index.html': {size: 330, hash: 'accd9874a3c036f70aea1d23c559f9d84a608d3b656f7c55efd13ddaeebdb3f0', text: () => import('./assets-chunks/admin_products_index_html.mjs').then(m => m.default)},
    'styles-B5OOBF2U.css': {size: 267560, hash: '/WJJCaSgIxQ', text: () => import('./assets-chunks/styles-B5OOBF2U_css.mjs').then(m => m.default)}
  },
};
