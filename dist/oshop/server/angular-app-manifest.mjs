
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
      "chunk-NLZDH4CU.js",
      "chunk-ZSM7BGRJ.js",
      "chunk-KRTYPQXB.js",
      "chunk-YWVRHP4W.js"
    ],
    "route": "/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-X43YQV6B.js",
      "chunk-KRTYPQXB.js",
      "chunk-YWVRHP4W.js"
    ],
    "route": "/product-detail/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TXFQ2L7S.js"
    ],
    "route": "/shopping-cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DV5OYPSQ.js",
      "chunk-YWVRHP4W.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AKUTEQZU.js",
      "chunk-YWVRHP4W.js"
    ],
    "route": "/check-out"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3ODMI6E4.js",
      "chunk-YVCYX2AE.js",
      "chunk-KRTYPQXB.js",
      "chunk-YWVRHP4W.js"
    ],
    "route": "/admin/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WYMGI6A5.js",
      "chunk-YVCYX2AE.js",
      "chunk-ZSM7BGRJ.js",
      "chunk-KRTYPQXB.js",
      "chunk-YWVRHP4W.js"
    ],
    "route": "/admin/products/new"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WYMGI6A5.js",
      "chunk-YVCYX2AE.js",
      "chunk-ZSM7BGRJ.js",
      "chunk-KRTYPQXB.js",
      "chunk-YWVRHP4W.js"
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
    'index.csr.html': {size: 25308, hash: '0590bbac6d27c6d0261b5f18f485b0ea5baa4fdc9c161139ff0c9cce2838007a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17739, hash: '263cf47026d186a8b7905f523468e3c7ae07a9f2d2a53595f20fefaddec2187c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'admin/products/index.html': {size: 330, hash: 'accd9874a3c036f70aea1d23c559f9d84a608d3b656f7c55efd13ddaeebdb3f0', text: () => import('./assets-chunks/admin_products_index_html.mjs').then(m => m.default)},
    'check-out/index.html': {size: 309, hash: '4248983475857f7f4383c234547863214f0889f36ed16ff7fdb0607c2e7f9027', text: () => import('./assets-chunks/check-out_index_html.mjs').then(m => m.default)},
    'shopping-cart/index.html': {size: 28143, hash: '520b0c7dc75deacc57cf574579b63fa3026cd065178a21c61445a01927e21c12', text: () => import('./assets-chunks/shopping-cart_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28033, hash: '0ced5016b5724169f2ded868ef6b5540da62ecfc662389c8c621e81867b070b9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 29230, hash: '51e81d3e98c7b4981a287032321d6d98f17d0dda1f32001a9297346f97c62b69', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 29418, hash: '1202523845406d693365d532bc2e55160448d2a790dca2ef24b5503b9f48166d', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-B5OOBF2U.css': {size: 267560, hash: '/WJJCaSgIxQ', text: () => import('./assets-chunks/styles-B5OOBF2U_css.mjs').then(m => m.default)}
  },
};
