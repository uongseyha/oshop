
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-3SF4JHF5.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IYXCCL5J.js",
      "chunk-HRB7WYVG.js",
      "chunk-ZNH2Z6XP.js",
      "chunk-GXUFPSS2.js"
    ],
    "route": "/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AQE6N7QE.js",
      "chunk-ZNH2Z6XP.js",
      "chunk-GXUFPSS2.js"
    ],
    "route": "/product-detail/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WBDGR2L6.js"
    ],
    "route": "/shopping-cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4OIHXEB6.js",
      "chunk-GXUFPSS2.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DHOUWJGY.js",
      "chunk-GXUFPSS2.js"
    ],
    "route": "/check-out"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZVGXABMY.js",
      "chunk-GZ4HRG7L.js",
      "chunk-ZNH2Z6XP.js",
      "chunk-GXUFPSS2.js"
    ],
    "route": "/admin/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GCZJ3HPL.js",
      "chunk-GZ4HRG7L.js",
      "chunk-HRB7WYVG.js",
      "chunk-ZNH2Z6XP.js",
      "chunk-GXUFPSS2.js"
    ],
    "route": "/admin/products/new"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GCZJ3HPL.js",
      "chunk-GZ4HRG7L.js",
      "chunk-HRB7WYVG.js",
      "chunk-ZNH2Z6XP.js",
      "chunk-GXUFPSS2.js"
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
    'index.csr.html': {size: 25308, hash: '0d8090b89cf6686e8efcd2653a2452ad514f949c1a13bb6801125f6bc7ef70e9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17739, hash: '5bc043bbe74f5e9071f10a20122f4bc89e041f6895aa7dbcc98400ae789b1c3f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'admin/products/index.html': {size: 330, hash: 'accd9874a3c036f70aea1d23c559f9d84a608d3b656f7c55efd13ddaeebdb3f0', text: () => import('./assets-chunks/admin_products_index_html.mjs').then(m => m.default)},
    'check-out/index.html': {size: 309, hash: '4248983475857f7f4383c234547863214f0889f36ed16ff7fdb0607c2e7f9027', text: () => import('./assets-chunks/check-out_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 29205, hash: '579f6dc842b90d949c10a7cc636ead32cdb2755a6dbd6f8cad312ea68075ef24', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'shopping-cart/index.html': {size: 28118, hash: '16b8644dc0305ebc404d6273d525c6882e79f131a939c7d39094d0e751178232', text: () => import('./assets-chunks/shopping-cart_index_html.mjs').then(m => m.default)},
    'index.html': {size: 29815, hash: '8aa26a97143fed217e2cefd3494e6d304b88f498d84632a92ae3b942e8707fe2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 29393, hash: '67a4188dbf6aa89073f476826be2cecb1f9198e5f6d45a0878998fccba513976', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-B5OOBF2U.css': {size: 267560, hash: '/WJJCaSgIxQ', text: () => import('./assets-chunks/styles-B5OOBF2U_css.mjs').then(m => m.default)}
  },
};
