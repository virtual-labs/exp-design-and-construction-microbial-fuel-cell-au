importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"cd2a84a9d406609b6af31751adb582ca","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"40501fce1cc8f0bc6d59e403ce0898d8","url":"contributors.html"},{"revision":"6a46275ee38db93b5146d48a8815d0b1","url":"feedback.html"},{"revision":"d7cd00280b13dedfb16360ebf6ba624c","url":"images/1.png"},{"revision":"a2976f45bf6ef61991f0afbf1c5a5c50","url":"images/2.png"},{"revision":"be3d66f01f6e10aea29a05a801a4ae89","url":"images/p1.png"},{"revision":"854054b55e336ddd2a99bf5a9f775559","url":"images/p2.png"},{"revision":"051a8fe292a78d680e16d8cf9b2f7120","url":"images/p3.png"},{"revision":"bf6dea990d386eedf955a78b0cff27b1","url":"images/p4.png"},{"revision":"0e54d602dc6201c1a9c000920181a5dc","url":"images/p5.png"},{"revision":"5fa749d090a8cec26b96396327b39465","url":"images/p6.png"},{"revision":"cd1b9679235c713b78b5a73bb2b56107","url":"index.html"},{"revision":"76248d2ee3f3f256e8e3c439109dd4f8","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"934879b2b4a07f6bb9a755e49d529f56","url":"posttest.html"},{"revision":"cc065f82270336a155ff4d92fe3ee53e","url":"posttest.json"},{"revision":"e881bc69736a56899a050ed9ebb1d682","url":"pretest.html"},{"revision":"6f6f86c707d78931cf790147d4954a1c","url":"pretest.json"},{"revision":"19ef674729a4aaead8b2717fe96b376d","url":"procedure.html"},{"revision":"dff4eb542ae2ebda054e9c22f5b86520","url":"references.html"},{"revision":"0c267159e217c02026002ee5f30f3756","url":"simulation.html"},{"revision":"3008f051ff4a7db82e8a436136025e54","url":"simulation/css/main.css"},{"revision":"27b99b41af3fe320dc0cfbc57eec2403","url":"simulation/images/aluminium.png"},{"revision":"f1bb7d51f59ea0d8bd63a110baf1f6e6","url":"simulation/images/background_converted.png"},{"revision":"794f9e2b583deca68ca931fe6e4fdf53","url":"simulation/images/bulb_on.png"},{"revision":"48de312fadaefde766ed4bf96d06a986","url":"simulation/images/BULB1.png"},{"revision":"ddb711d670059981dbf81a518f34a6da","url":"simulation/images/copper.png"},{"revision":"7a5811ee40af25b9184b52ac1c95eee5","url":"simulation/images/graphite.png"},{"revision":"bd72e60cba1d2672365acedaf7b2e26b","url":"simulation/images/logo.png"},{"revision":"bc2dd794e5ed4df3a5377a8d93a5744c","url":"simulation/images/manganese.png"},{"revision":"61218c199ddb9c4d156fe883cf808132","url":"simulation/images/red_wire.png"},{"revision":"b4890350957c35a451d1bd2b800a4322","url":"simulation/images/stainlesssteel.png"},{"revision":"467973586f40575bd53e4124294212bd","url":"simulation/images/STAND.png"},{"revision":"3541f63c7b3a724446ff306b3b879968","url":"simulation/images/tabletop.png"},{"revision":"59fd3fae62598e7f3c6588ded5cb535f","url":"simulation/index.html"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"35ba4e64bc769abfc88bb88f86b6bc51","url":"theory.html"},{"revision":"21aad3c586b13e1a0ce68de4c6021957","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );