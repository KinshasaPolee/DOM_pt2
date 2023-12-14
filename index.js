// Menu Links
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

for (var link of menuLinks) {
    console.log('Link Text:', link.text);
    console.log('Link Href:', link.href);
}

let newElt = document.createElement('a');
newElt.setAttribute('Link Href:', 'link.href');
newElt.setAttribute('Link Text:', 'link.text');
document.topMenuEl.appendChild(newElt);
// End of Menu Links
let main = document.getElementById('mainEL');
if(main) {
    main.classList.add('flex-ctr');
} else {
    console.error('Element with id "mainEl" not found.');
}

let topMenuEl = document.getElementById('top-menu');
if(topMenuEl) {
    topMenuEl.style.height = '100%';
    topMenuEl.classList.add('flex-around');
    var backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg').trim();
} else {
    console.error('Element with id "topMenuEl" not found.');
}