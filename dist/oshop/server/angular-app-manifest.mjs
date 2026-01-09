
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-UPDSA43Q.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2GVFIDXP.js",
      "chunk-O34KHLTV.js",
      "chunk-WHIYIW6I.js",
      "chunk-GMDAFGEK.js"
    ],
    "route": "/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6I4XC7VF.js",
      "chunk-WHIYIW6I.js",
      "chunk-GMDAFGEK.js"
    ],
    "route": "/product-detail/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IERD53IV.js"
    ],
    "route": "/shopping-cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CZMJRG6D.js",
      "chunk-GMDAFGEK.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5OONTEOM.js",
      "chunk-GMDAFGEK.js"
    ],
    "route": "/check-out"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IU3GUZN4.js",
      "chunk-V6GH7Z4G.js",
      "chunk-WHIYIW6I.js",
      "chunk-GMDAFGEK.js"
    ],
    "route": "/admin/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EVQ65HRZ.js",
      "chunk-V6GH7Z4G.js",
      "chunk-O34KHLTV.js",
      "chunk-WHIYIW6I.js",
      "chunk-GMDAFGEK.js"
    ],
    "route": "/admin/products/new"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EVQ65HRZ.js",
      "chunk-V6GH7Z4G.js",
      "chunk-O34KHLTV.js",
      "chunk-WHIYIW6I.js",
      "chunk-GMDAFGEK.js"
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
    'index.csr.html': {size: 25308, hash: '337357b9a3946a514cfaab833af6befea782ee15b31bf2e2d957b086225fa206', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17739, hash: '00d3431258333e0435e93644174c68f96523ff6deef3841252fe50caec8f5868', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'admin/products/index.html': {size: 330, hash: 'accd9874a3c036f70aea1d23c559f9d84a608d3b656f7c55efd13ddaeebdb3f0', text: () => import('./assets-chunks/admin_products_index_html.mjs').then(m => m.default)},
    'check-out/index.html': {size: 309, hash: '4248983475857f7f4383c234547863214f0889f36ed16ff7fdb0607c2e7f9027', text: () => import('./assets-chunks/check-out_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28033, hash: '217f88ab1c55e6a80e2b4c6762ac58018a7186a71a212ada3d97b6ca0bab081e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'shopping-cart/index.html': {size: 28143, hash: 'bb4347438113777ea1dca850204cc6965f52d4c06c121f8e6285c9afc1be80bc', text: () => import('./assets-chunks/shopping-cart_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 29230, hash: '872d954d2bfb1977facf03abf18e73f3426c815849bde3051bc0d8f64c859930', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 29418, hash: 'ddb87e6a7154f700a14f99691c3efb1331ae47167b0a30ebc6765a56b3db9ced', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-B5OOBF2U.css': {size: 267560, hash: '/WJJCaSgIxQ', text: () => import('./assets-chunks/styles-B5OOBF2U_css.mjs').then(m => m.default)}
  },
};
