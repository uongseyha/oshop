
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
    'index.csr.html': {size: 25308, hash: 'fdd345d159a0a5f946504c105b4c72241a5c33170aef687ac881f0807e098124', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17739, hash: 'fee5353097cb8adfa2e33137c6e47bd205efeaf58486fc2891e3c56c958350c4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'admin/products/index.html': {size: 330, hash: 'accd9874a3c036f70aea1d23c559f9d84a608d3b656f7c55efd13ddaeebdb3f0', text: () => import('./assets-chunks/admin_products_index_html.mjs').then(m => m.default)},
    'check-out/index.html': {size: 309, hash: '4248983475857f7f4383c234547863214f0889f36ed16ff7fdb0607c2e7f9027', text: () => import('./assets-chunks/check-out_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28033, hash: '8a98bf670bc3b477ab25e851fec8a9f6f70e2cd1653c62266b80efcee92e5c70', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'shopping-cart/index.html': {size: 28143, hash: '9537621fd3ea5e30fa1ee04e7cd1bb28cd14c91d0a3aa873ab32b60973f7aadc', text: () => import('./assets-chunks/shopping-cart_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 29230, hash: '55ba9d7784e542ed688f88c83b48e598d11b749ba4437c29325bc965486613d2', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 29418, hash: 'f72183a646146804a326249d3a147fe59b3155eabaaabc0b938cdfbe8cb7cd13', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-B5OOBF2U.css': {size: 267560, hash: '/WJJCaSgIxQ', text: () => import('./assets-chunks/styles-B5OOBF2U_css.mjs').then(m => m.default)}
  },
};
