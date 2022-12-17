const { Product } = require('../models');

const productData = [

    {
        "title": "Tales of Arise",
        "category": "RPG",
        "studio": "Bandai Namco",
        "release_date": "September 9, 2021",
        "review_link": "https://www.metacritic.com/game/playstation-5/tales-of-arise",
        "price":60
    },
    {
        "title": "Final Fantasy VII",
        "category": "RPG",
        "studio": "Square Enix",
        "release_date": "April 10, 2020",
        "review_link": "https://www.metacritic.com/game/playstation-4/final-fantasy-vii-remake",
        "price":60
    },
    {
        "title": "Cyberpunk 2077",
        "category": "RPG",
        "studio": "CD Projekt Red",
        "release_date": "December 10, 2020",
        "review_link": "https://www.metacritic.com/game/playstation-4/final-fantasy-vii-remake",
        "price":60
    },
    {
        "title": "Kingdom Hearts 3",
        "category": "RPG",
        "studio": "Square Enix",
        "release_date": "January 25, 2019",
        "review_link": "https://www.ign.com/articles/2019/01/24/kingdom-hearts-3-review-ps4-xbox-one",
        "price":60
    },
    {
        "title": "Elden Ring",
        "category": "RPG",
        "studio": "FromSoftware",
        "release_date": "February 25, 2022",
        "review_link": "https://www.metacritic.com/game/playstation-5/elden-ring",
        "price":60
    },
    {
        "title": "The Witcher 3",
        "category": "RPG",
        "studio": "CD Projekt Red",
        "release_date": "May 18, 2015",
        "review_link": "https://www.metacritic.com/game/playstation-4/the-witcher-3-wild-hunt",
        "price":60
    },
    {
        "title": "Monster Hunter Rise",
        "category": "RPG",
        "studio": "Capcom",
        "release_date": "March 26, 2021",
        "review_link": "https://www.metacritic.com/game/switch/monster-hunter-rise",
        "price":60
    },
    {
        "title": "Destiny 2",
        "category": "RPG",
        "studio": "Bungie",
        "release_date": "September 6, 2017",
        "review_link": "https://www.metacritic.com/game/playstation-4/destiny-2",
        "price":60
    },
    {
        "title": "God of War: Ragnarok",
        "category": "RPG",
        "studio": "Santa Monica Studios",
        "release_date": "November 9, 2022",
        "review_link": "https://www.metacritic.com/game/playstation-5/god-of-war-ragnarok",
        "price":60
    },
    {
        "title": "Pokemon: Scarlet",
        "category": "RPG",
        "studio": "Game Freak",
        "release_date": "November 18, 2022",
        "review_link": "https://www.metacritic.com/game/switch/pokemon-scarlet",
        "price":60
    },
    {
        "title": "Star Wars: Fallen Order",
        "category": "RPG",
        "studio": "Respawn Entertainment",
        "release_date": "November 15, 2019",
        "review_link": "https://www.metacritic.com/game/playstation-4/star-wars-jedi-fallen-order",
        "price":60
    },
    {
        "title": "Bendy and the Dark Revival",
        "category": "Horror",
        "studio": "Joey Drew Studios",
        "release_date": "November 15, 2022",
        "review_link": "https://www.metacritic.com/game/pc/bendy-and-the-dark-revival",
        "price":60
    },
    {
        "title": "Resident Evil 2 (Remake)",
        "category": "Horror",
        "studio": "Capcom",
        "release_date": "January 24, 2019",
        "review_link": "https://www.metacritic.com/game/playstation-4/resident-evil-2/trailers/12454001",
        "price":60
    },
    {
        "title": "Dead Space",
        "category": "Horror",
        "studio": "EA Redwood Shores",
        "release_date": "October 14, 2008",
        "review_link": "https://www.metacritic.com/game/pc/dead-space-2008",
        "price":60
    },
    {
        "title": "Outlast",
        "category": "Horror",
        "studio": "Red Barrels",
        "release_date": "September 4, 2013",
        "review_link": "https://www.metacritic.com/game/pc/outlast",
        "price":60
    },
    {
        "title": "The Evil Within",
        "category": "Horror",
        "studio": "Tango Gameworks",
        "release_date": "October 13, 2014",
        "review_link": "https://www.metacritic.com/game/playstation-4/the-evil-within",
        "price":60
    },
    {
        "title": "Alien Isolation",
        "category": "Horror",
        "studio": "Creative Assembly",
        "release_date": "October 6, 2014",
        "review_link": "https://www.metacritic.com/game/playstation-4/alien-isolation",
        "price":60
    },
    {
        "title": "Little Nightmares",
        "category": "Horror",
        "studio": "Tarsier Studios",
        "release_date": "August 17, 2017",
        "review_link": "https://www.metacritic.com/game/playstation-4/little-nightmares",
        "price":60
    },
    {
        "title": "Phasmophobia",
        "category": "Horror",
        "studio": "Kinetic Games",
        "release_date": "September 18, 2020",
        "review_link": "https://store.steampowered.com/app/739630/Phasmophobia/",
        "price":60
    },
    {
        "title": "Soma",
        "category": "Horror",
        "studio": "Frictional Games",
        "release_date": "September 21, 2015",
        "review_link": "https://www.gamespot.com/reviews/soma-review/1900-6416245/",
        "price":60
    },
    {
        "title": "Dead by Daylight",
        "category": "Horror",
        "studio": "Behaviour Interactive",
        "release_date": "June 14, 2016",
        "review_link": "https://www.ign.com/articles/dead-by-daylight-review",
        "price":60
    },
    {
        "title": "Enter the Gungeon",
        "category": "Rogue-Like",
        "studio": "Dodge Roll",
        "release_date": "April 5, 2016",
        "review_link": "https://www.ign.com/articles/2016/04/05/enter-the-gungeon-review",
        "price":60
    },
    {
        "title": "Streets of Rogue",
        "category": "Rogue-Like",
        "studio": "tinyBuild",
        "release_date": "March 10, 2017",
        "review_link": "https://www.pcgamer.com/streets-of-rogue-review/",
        "price":60
    },
    {
        "title": "Slay the Spire",
        "category": "Rogue-Like",
        "studio": "MegaCrit",
        "release_date": "November 14, 2017",
        "review_link": "https://www.pcgamer.com/slay-the-spire-review/https://www.pcgamer.com/slay-the-spire-review/",
        "price":60
    },
    {
        "title": "Spelunky 2",
        "category": "Rogue-Like",
        "studio": "Mossmouth",
        "release_date": "September 15, 2020",
        "review_link": "https://www.nintendolife.com/reviews/switch-eshop/spelunky_2",
        "price":60
    },
    {
        "title": "Noita",
        "category": "Rogue-Like",
        "studio": "Nolla Games",
        "release_date": "September 24, 2019",
        "review_link": "https://www.pcgamer.com/noita-review/",
        "price":60
    },
    {
        "title": "The Binding of Isaac",
        "category": "Rogue-Like",
        "studio": "Edmund McMillen",
        "release_date": "September 28, 2011",
        "review_link": "https://store.steampowered.com/agecheck/app/250900/",
        "price":60
    },
    {
        "title": "Dead Cells",
        "category": "Rogue-Like",
        "studio": "Motion Twin",
        "release_date": "May 10, 2017",
        "review_link": "https://store.steampowered.com/app/588650/Dead_Cells/",
        "price":60
    },
    {
        "title": "Inscryption",
        "category": "Rogue-Like",
        "studio": "Daniel Mullins Games",
        "release_date": "October 19, 2021",
        "review_link": "https://www.ign.com/articles/inscryption-review",
        "price":60
    },
    {
        "title": "Risk of Rain 2",
        "category": "Rogue-Like",
        "studio": "Hopoo Games",
        "release_date": "March 28, 2019",
        "review_link": "https://store.steampowered.com/app/632360/Risk_of_Rain_2/",
        "price":60
        
    },
    {
        "title": "Hades",
        "category": "Rogue-Like",
        "studio": "Supergiant Games",
        "release_date": "December 6, 2018",
        "review_link": "https://www.ign.com/articles/hades-review",
        "price":60
    },
];

module.exports = productData ;