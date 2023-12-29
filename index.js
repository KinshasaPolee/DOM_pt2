let mainEl = document.querySelector('main');
let topMenuEl = document.getElementById('top-menu');
let subMenuEl = document.getElementById('sub-menu');

var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];

for (var link of menuLinks) {
    let newElt = document.createElement('a');
    newElt.setAttribute('href', link.href);
    newElt.textContent = link.text;
    topMenuEl.appendChild(newElt);
}
let linksArray = [...document.querySelectorAll('a')]
let subLinks
linksArray.forEach(link => {
    link.addEventListener('click', function (e) {
        for (let i = 0; i < menuLinks.length; i++) {
            if (e.target.textContent === menuLinks[i].text) {
                subLinks = menuLinks[i].subLinks
                break;
            }
        }
        if (subLinks) {
            subMenuEl.style.top = '100%';
            subMenuEl.innerHTML = ''
            subLinks.forEach(link => {
                let aEl = document.createElement('a')
                aEl.href = link.href
                aEl.textContent = link.text
                subMenuEl.append(aEl)
                subMenuEl.classList.add('flex-around');
            })
        } else {
            subMenuEl.style.top = '0';

        }
    })
})

if (mainEl) {
    var mainBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg');
    mainEl.style.backgroundColor = mainBackgroundColor;
    mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
    mainEl.classList.add('flex-ctr');
} else {
    console.error('Element with id "main" not found.');
}

if (topMenuEl) {
    topMenuEl.style.height = '100%';
    topMenuEl.classList.add('flex-around');
    var topBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg').trim();
} else {
    console.error('Element with id "topMenuEl" not found.');
}
// sub Menu
// stuck at Pt.3 creating submenu
if (subMenuEl) {
    subMenuEl.style.height = '100%';
    subMenuEl.style.position = 'absolute';
    subMenuEl.style.top = '0';
    // subMenuEl.classList.add('flex-around');
    var subBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--sub-menu-bg').trim();

} else {
    console.error('Element with id "subMenuEl" not found.');
}
// problem lies here
function buildSubmenu(subLinks) {
    subMenuEl.innerHTML = '';
    menuLinks.subLinks.forEach(link => {
        const subLinkElement = document.createElement('a');
        subLinkElement.setAttribute('href', link.href);
        subLinkElement.textContent = link.text;
        subMenuEl.appendChild(subLinkElement);
        console.log(buildSubmenu);
    });
}

topMenuEl.addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target.tagName === 'a') {

        const clickedLink = event.target;
        const linkObject = getLinkObject(clickedLink);

        const isAlreadyActive = clickedLink.classList.contains('active');

        const topMenuLinks = topMenuEl.querySelectorAll('a');
        topMenuLinks.forEach(link => {
            if (link !== clickedLink) {
                link.classList.remove('active');
            }
        });

        if (!isAlreadyActive) {
            clickedLink.classList.add('active');

            if (linkObject.subLinks) {
                subMenuEl.style.top = '100%';
                buildSubmenu(linkObject.subLinks);
            } else {
                subMenuEl.style.top = '0';
            }
        } else {
            clickedLink.classList.remove('active');
        }
        console.log(clickedLink.textContent);
    }
});

subMenuEl.addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.tagName === 'a') {
        return;
    }
    console.log(event.target.textContent);
    subMenuEl.style.top = '0';

    topMenuLinks.forEach(function (link) {
        link.classList.remove('active');
    });

    mainEl.innerHTML = '<h1>' + event.target.textContent + '</h1>';
    if (event.target.textContent === 'About') {
        mainEl.innerHTML.subMenuEl = '<h1>About</h1>';
    }
    console.log(event.target.tagName)
});