const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19",
        area: 45800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
    },
    {
        templeName: "Bahía Blanca Argentina",
        location: "Bahía Blanca, Argentina",
        dedicated: "2025, November, 23",
        area: 23400,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bahia-blanca-argentina-temple/bahia-blanca-argentina-temple-65191-main.jpg"
    },
    {
        templeName: "Bangkok Thailand",
        location: "Bangkok, Thailand",
        dedicated: "2023, October, 22",
        area: 48525,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
    },
    // Add more temple objects here...
];
const menuButton = document.querySelector('#menu');
const navOptions = document.querySelector('.navigation__options');
const album = document.querySelector('.album-wrapper');
const filterOpt = document.querySelectorAll('.nav_opt');

menuButton.addEventListener('click', () => {

    navOptions.classList.toggle('show');

    if (navOptions.classList.contains('show')) {
        menuButton.innerHTML = '&times;';
    } else {
        menuButton.innerHTML = '&#9776;';
    }
});

const troughTemples = function (temples) {
    let temple_cards = ""
    temples.forEach(temple => {
        temple_cards += `
                    <div class="temple-card">
                        <h3>${temple.templeName}</h3>
                        <p><span class="card-label">Location:</span> ${temple.location}</p>
                        <p><span class="card-label">Dedicated:</span> ${temple.dedicated}</p>
                        <p><span class="card-label">Size:</span> ${temple.area}sq ft</p>
                        <img src="${temple.imageUrl}" alt="${temple.templeName}" width="400" height="250" loading="lazy">
                    </div>`
    });

    return album.innerHTML = temple_cards
}

function filteredTemples(temples) {
    troughTemples(temples);
    let temples_filtered = [];
    filterOpt.forEach((opt) => {
        opt.addEventListener(('click'), (e) => {
            e.preventDefault();
            let filterBy = opt.textContent.trim();
            if (filterBy === 'Old') {
                temples_filtered = temples.filter(temple => {
                    let date = parseInt(temple.dedicated.split(' ')[0]);
                    return  date < 1900;
                })
            }
            else if (filterBy === 'New') {
                temples_filtered = temples.filter(temple => {
                    let date = parseInt(temple.dedicated.split(' ')[0]);
                    return  date > 2000;
                })
            }
            else if (filterBy === 'Large') {
                temples_filtered = temples.filter(temple => {
                    let area = temple.area;
                    return  area > 90000;
                })
            }
            else if (filterBy === 'Small') {
                temples_filtered = temples.filter(temple => {
                    let area = temple.area;
                    return  area < 10000;
                })
            } 
            else {
                temples_filtered = temples;
            }
            troughTemples(temples_filtered);
        })
    }) 
}

filteredTemples(temples);