
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
      "chunk-FKP2ZT7Q.js",
      "chunk-RHNATNZ3.js",
      "chunk-WKVNIU44.js",
      "chunk-4YWZW4XA.js"
    ],
    "route": "/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LIH26U3Z.js",
      "chunk-WKVNIU44.js",
      "chunk-4YWZW4XA.js"
    ],
    "route": "/product-detail/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NPUJCCSO.js"
    ],
    "route": "/shopping-cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BKRCY2YS.js",
      "chunk-4YWZW4XA.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PJRSCB4A.js",
      "chunk-4YWZW4XA.js"
    ],
    "route": "/check-out"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RUCCUF5K.js",
      "chunk-CZICDHBH.js",
      "chunk-WKVNIU44.js",
      "chunk-4YWZW4XA.js"
    ],
    "route": "/admin/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-P5XJUORA.js",
      "chunk-CZICDHBH.js",
      "chunk-RHNATNZ3.js",
      "chunk-WKVNIU44.js",
      "chunk-4YWZW4XA.js"
    ],
    "route": "/admin/products/new"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-P5XJUORA.js",
      "chunk-CZICDHBH.js",
      "chunk-RHNATNZ3.js",
      "chunk-WKVNIU44.js",
      "chunk-4YWZW4XA.js"
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
    'index.csr.html': {size: 25308, hash: '40f4ea0a3138a87c4be714a8513123db8e5e27ee2b9324f9f5f6e4d86362c418', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17739, hash: 'c42428d806e431c967413a22f49cd46e377097b1540b3ab3c3589f867bba59e4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'admin/products/index.html': {size: 330, hash: 'accd9874a3c036f70aea1d23c559f9d84a608d3b656f7c55efd13ddaeebdb3f0', text: () => import('./assets-chunks/admin_products_index_html.mjs').then(m => m.default)},
    'shopping-cart/index.html': {size: 28794, hash: '4837b98603800444144cb85307c4cb855a3225afb1de0787369b1214bff82d1e', text: () => import('./assets-chunks/shopping-cart_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 29782, hash: 'c7fd36f57f3347f416f7c6d1cd9e1f1474d1e383a0be8144b93f6254031eb006', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 56936, hash: '56cd3e8f2494cb0efdbc0ec335eb4144868dd06b079213760e9f1b1d00867d1f', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'check-out/index.html': {size: 309, hash: '4248983475857f7f4383c234547863214f0889f36ed16ff7fdb0607c2e7f9027', text: () => import('./assets-chunks/check-out_index_html.mjs').then(m => m.default)},
    'index.html': {size: 29960, hash: '28445ac06fc750169bfca12ac858f16165fa33cd000d0dee64e7dbfd659a021a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-B5OOBF2U.css': {size: 267560, hash: '/WJJCaSgIxQ', text: () => import('./assets-chunks/styles-B5OOBF2U_css.mjs').then(m => m.default)}
  },
};
