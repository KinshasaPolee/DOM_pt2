// Menu Links
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
    ]},
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

let subMenuEl = document.getElementById('sub-menu');
if(subMenuEl) {
    subMenuEl.style.height = '100%';
    subMenuEl.classList.add('flex-around');
    subMenuEl.style.position = 'absolute';
    subMenuEl.style.top = '0';
    var backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--sub-menu-bg').trim();
} else {
    console.error('Element with id "subMenuEl" not found.');
}