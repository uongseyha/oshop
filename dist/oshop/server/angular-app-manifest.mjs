
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-3AU7LBQ7.js"
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
    'index.csr.html': {size: 25308, hash: 'ecf28775f71363f73040be5d55732943186b0f8eb74ad459d65e8f452ce93f32', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17739, hash: 'f17e162d918c02ca7477bb388e1da32b5037f731906c64c708460d42c6c54644', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'admin/products/index.html': {size: 330, hash: 'accd9874a3c036f70aea1d23c559f9d84a608d3b656f7c55efd13ddaeebdb3f0', text: () => import('./assets-chunks/admin_products_index_html.mjs').then(m => m.default)},
    'check-out/index.html': {size: 309, hash: '4248983475857f7f4383c234547863214f0889f36ed16ff7fdb0607c2e7f9027', text: () => import('./assets-chunks/check-out_index_html.mjs').then(m => m.default)},
    'index.html': {size: 29988, hash: '3057d14465e31789c67037dbdec8db40295f4882c25704647d4c330c9f4c271e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 29393, hash: '2c0ce9ca36a883987edf50022e6f135c34614db5ac2a8b6b4d44ccd83d2e7f5a', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 29205, hash: 'dd4bd0269d4110e446bdc049cd03773e17f6c167d914a3cea963011435d55d38', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'shopping-cart/index.html': {size: 28118, hash: '71ae42fc9dd440b58485bc999cac90ca78c727a6e5d03ab483e0a98c878100c4', text: () => import('./assets-chunks/shopping-cart_index_html.mjs').then(m => m.default)},
    'styles-B5OOBF2U.css': {size: 267560, hash: '/WJJCaSgIxQ', text: () => import('./assets-chunks/styles-B5OOBF2U_css.mjs').then(m => m.default)}
  },
};
