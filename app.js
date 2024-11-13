const transportsTable = document.querySelector(".transports-table");
const upcomingsArea = document.querySelector(".upcoming-list");
const changeUpcomingTypeBtn = document.querySelector(
    ".upcoming-type-change-btn"
);
const upcomingTypeText = document.querySelector(".upcoming-type");

const alertModal = document.querySelector(".alert-modal");
const dontShowAgainBtn = document.querySelector(".dont-show-again-area");
const dsaIcon = document.querySelector(".dsa-icon");
const closeModalBtn = document.querySelector(".close-modal-btn");
const approveModalBtn = document.querySelector(".modal-confirm-btn");

let alertModalDSA = "false";

if (!localStorage.getItem("alertModalDSA")) {
    localStorage.setItem("alertModalDSA", "false");
    alertModal.style.display = "flex";
} else {
    alertModalDSA = localStorage.getItem("alertModalDSA");

    if (alertModalDSA == "true") {
        alertModal.style.display = "none";
    } else {
        alertModal.style.display = "flex";
    }
}

let tableElements;

let rowBlocks;

let colorTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

document.body.className = colorTheme;

class Transports {
    transports = [
        {
            name: "Ring",
            other: "Gulbahce",
            departure: "IYTE",
            workText: "IYTE RING",
            price: 0,
            iyte_departures: [
                [
                    {
                        h: 8,
                        m: 40,
                    },
                    {
                        h: 9,
                        m: 0,
                    },
                    {
                        h: 9,
                        m: 30,
                    },
                    {
                        h: 10,
                        m: 0,
                    },
                    {
                        h: 10,
                        m: 30,
                    },
                    {
                        h: 11,
                        m: 0,
                    },
                    {
                        h: 11,
                        m: 30,
                    },
                    {
                        h: 12,
                        m: 15,
                        isVillage: true,
                    },
                    {
                        h: 13,
                        m: 0,
                    },
                    {
                        h: 14,
                        m: 0,
                    },
                    {
                        h: 14,
                        m: 30,
                    },
                    {
                        h: 15,
                        m: 0,
                    },
                    {
                        h: 15,
                        m: 30,
                    },
                    {
                        h: 16,
                        m: 0,
                    },
                    {
                        h: 16,
                        m: 30,
                    },
                    {
                        h: 17,
                        m: 15,
                        isVillage: true,
                    },
                ],
            ],
            faltay_departures: [
                [
                    {
                        h: 8,
                        m: 20,
                        isVillage: true,
                    },
                    {
                        h: 12,
                        m: 30,
                        isVillage: true,
                    },
                    {
                        h: 13,
                        m: 20,
                        isVillage: true,
                    },
                ],
            ],
        },
        {
            name: "Dolmuş",
            other: "F.ALTAY",
            departure: "IYTE",
            workText: "GULBAHCE - F.ALTAY",
            price: 40,
            iyte_departures: [
                [
                    {
                        h: 8,
                        m: 25,
                    },
                    {
                        h: 8,
                        m: 40,
                    },
                    {
                        h: 9,
                        m: 20,
                    },
                    {
                        h: 9,
                        m: 40,
                    },
                    {
                        h: 10,
                        m: 0,
                    },
                    {
                        h: 10,
                        m: 20,
                    },
                    {
                        h: 10,
                        m: 40,
                    },
                    {
                        h: 11,
                        m: 10,
                    },
                    {
                        h: 11,
                        m: 40,
                    },
                    {
                        h: 12,
                        m: 10,
                    },
                    {
                        h: 13,
                        m: 10,
                    },
                    {
                        h: 13,
                        m: 40,
                    },
                    {
                        h: 14,
                        m: 10,
                    },
                    {
                        h: 14,
                        m: 40,
                    },
                    {
                        h: 15,
                        m: 10,
                    },
                    {
                        h: 15,
                        m: 40,
                    },
                    {
                        h: 16,
                        m: 10,
                    },
                    {
                        h: 16,
                        m: 40,
                    },
                    {
                        h: 17,
                        m: 0,
                    },
                    {
                        h: 17,
                        m: 20,
                    },
                    {
                        h: 17,
                        m: 40,
                    },
                    {
                        h: 18,
                        m: 10,
                    },
                    {
                        h: 18,
                        m: 40,
                    },
                    {
                        h: 19,
                        m: 10,
                    },
                    {
                        h: 19,
                        m: 40,
                    },
                    {
                        h: 20,
                        m: 10,
                    },
                    {
                        h: 21,
                        m: 10,
                    },
                ], // weekdays
                [
                    {
                        h: 8,
                        m: 40,
                    },
                    {
                        h: 9,
                        m: 10,
                    },
                    {
                        h: 9,
                        m: 40,
                    },
                    {
                        h: 10,
                        m: 10,
                    },
                    {
                        h: 10,
                        m: 40,
                    },
                    {
                        h: 11,
                        m: 10,
                    },
                    {
                        h: 11,
                        m: 40,
                    },
                    {
                        h: 12,
                        m: 0,
                    },
                    {
                        h: 12,
                        m: 20,
                    },
                    {
                        h: 12,
                        m: 40,
                    },
                    {
                        h: 13,
                        m: 0,
                    },
                    {
                        h: 13,
                        m: 20,
                    },
                    {
                        h: 13,
                        m: 40,
                    },
                    {
                        h: 14,
                        m: 0,
                    },
                    {
                        h: 14,
                        m: 20,
                    },
                    {
                        h: 14,
                        m: 40,
                    },
                    {
                        h: 15,
                        m: 0,
                    },
                    {
                        h: 15,
                        m: 20,
                    },
                    {
                        h: 15,
                        m: 40,
                    },
                    {
                        h: 16,
                        m: 10,
                    },
                    {
                        h: 16,
                        m: 40,
                    },
                    {
                        h: 17,
                        m: 10,
                    },
                    {
                        h: 17,
                        m: 40,
                    },
                    {
                        h: 18,
                        m: 10,
                    },
                    {
                        h: 18,
                        m: 40,
                    },
                    {
                        h: 19,
                        m: 10,
                    },
                    {
                        h: 19,
                        m: 40,
                    },
                    {
                        h: 20,
                        m: 10,
                    },
                    {
                        h: 21,
                        m: 10,
                    },
                ], // weekend
            ],
            faltay_departures: [
                [
                    {
                        h: 7,
                        m: 40,
                    },
                    {
                        h: 8,
                        m: 0,
                    },
                    {
                        h: 8,
                        m: 20,
                    },
                    {
                        h: 8,
                        m: 40,
                    },
                    {
                        h: 9,
                        m: 10,
                    },
                    {
                        h: 9,
                        m: 40,
                    },
                    {
                        h: 10,
                        m: 10,
                    },
                    {
                        h: 10,
                        m: 40,
                    },
                    {
                        h: 11,
                        m: 10,
                    },
                    {
                        h: 11,
                        m: 40,
                    },
                    {
                        h: 12,
                        m: 10,
                    },
                    {
                        h: 12,
                        m: 40,
                    },
                    {
                        h: 13,
                        m: 10,
                    },
                    {
                        h: 13,
                        m: 40,
                    },
                    {
                        h: 14,
                        m: 10,
                    },
                    {
                        h: 14,
                        m: 40,
                    },
                    {
                        h: 15,
                        m: 10,
                    },
                    {
                        h: 16,
                        m: 10,
                    },
                    {
                        h: 16,
                        m: 40,
                    },
                    {
                        h: 17,
                        m: 10,
                    },
                    {
                        h: 17,
                        m: 40,
                    },
                    {
                        h: 18,
                        m: 10,
                    },
                    {
                        h: 18,
                        m: 40,
                    },
                    {
                        h: 19,
                        m: 10,
                    },
                    {
                        h: 20,
                        m: 10,
                    },
                    {
                        h: 20,
                        m: 40,
                    },
                    {
                        h: 21,
                        m: 20,
                    },
                    {
                        h: 22,
                        m: 0,
                    },
                    {
                        h: 22,
                        m: 40,
                    },
                    {
                        h: 23,
                        m: 15,
                    },
                ], // weekdays
                [
                    {
                        h: 8,
                        m: 0,
                    },

                    {
                        h: 8,
                        m: 40,
                    },
                    {
                        h: 9,
                        m: 10,
                    },
                    {
                        h: 9,
                        m: 40,
                    },
                    {
                        h: 10,
                        m: 10,
                    },
                    {
                        h: 10,
                        m: 40,
                    },
                    {
                        h: 11,
                        m: 10,
                    },
                    {
                        h: 11,
                        m: 40,
                    },
                    {
                        h: 12,
                        m: 10,
                    },
                    {
                        h: 12,
                        m: 40,
                    },
                    {
                        h: 13,
                        m: 10,
                    },
                    {
                        h: 13,
                        m: 40,
                    },
                    {
                        h: 14,
                        m: 10,
                    },
                    {
                        h: 14,
                        m: 40,
                    },
                    {
                        h: 15,
                        m: 10,
                    },
                    {
                        h: 15,
                        m: 40,
                    },
                    {
                        h: 16,
                        m: 10,
                    },
                    {
                        h: 16,
                        m: 40,
                    },
                    {
                        h: 17,
                        m: 10,
                    },
                    {
                        h: 17,
                        m: 40,
                    },
                    {
                        h: 18,
                        m: 10,
                    },
                    {
                        h: 18,
                        m: 40,
                    },
                    {
                        h: 19,
                        m: 10,
                    },
                    {
                        h: 19,
                        m: 40,
                    },
                    {
                        h: 20,
                        m: 10,
                    },
                    {
                        h: 20,
                        m: 40,
                    },
                    {
                        h: 21,
                        m: 10,
                    },
                    {
                        h: 21,
                        m: 40,
                    },
                    {
                        h: 22,
                        m: 10,
                    },
                    {
                        h: 22,
                        m: 40,
                    },
                    {
                        h: 23,
                        m: 15,
                    },
                ], // weekend
            ],
        },
        {
            name: "982 - EShot",
            other: "F.ALTAY",
            departure: "IYTE",
            workText: "IYTE - F.ALTAY",
            price: 11.22,
            iyte_departures: [
                [
                    {
                        h: 6,
                        m: 15,
                    },
                    {
                        h: 8,
                        m: 45,
                    },
                    {
                        h: 10,
                        m: 40,
                    },
                    {
                        h: 12,
                        m: 20,
                    },
                    {
                        h: 14,
                        m: 0,
                    },
                    {
                        h: 15,
                        m: 40,
                    },
                    {
                        h: 17,
                        m: 20,
                    },
                    {
                        h: 19,
                        m: 0,
                    },
                ], // weekdays
                [
                    {
                        h: 10,
                        m: 15,
                    },
                    {
                        h: 11,
                        m: 45,
                    },
                    {
                        h: 13,
                        m: 15,
                    },
                    {
                        h: 14,
                        m: 45,
                    },
                    {
                        h: 16,
                        m: 15,
                    },
                    {
                        h: 17,
                        m: 45,
                    },
                ], // weekends
            ],

            faltay_departures: [
                [
                    {
                        h: 7,
                        m: 0,
                    },
                    {
                        h: 7,
                        m: 45,
                    },
                    {
                        h: 10,
                        m: 40,
                    },
                    {
                        h: 12,
                        m: 20,
                    },
                    {
                        h: 14,
                        m: 0,
                    },
                    {
                        h: 15,
                        m: 40,
                    },
                    {
                        h: 17,
                        m: 20,
                    },
                ], // weekdays
                [
                    {
                        h: 10,
                        m: 15,
                    },
                    {
                        h: 11,
                        m: 45,
                    },
                    {
                        h: 13,
                        m: 15,
                    },
                    {
                        h: 14,
                        m: 45,
                    },
                    {
                        h: 16,
                        m: 15,
                    },
                ], // weekends
            ],
        },
        {
            name: "883 - EShot",
            departure: "IYTE",
            other: "F.ALTAY",
            workText: "IYTE - F.ALTAY",
            price: 9.72,
            iyte_departures: [
                [
                    {
                        h: 6,
                        m: 35,
                    },
                    {
                        h: 7,
                        m: 30,
                    },
                    {
                        h: 8,
                        m: 45,
                    },
                    {
                        h: 9,
                        m: 10,
                    },
                    {
                        h: 9,
                        m: 25,
                    },
                    {
                        h: 9,
                        m: 50,
                    },
                    {
                        h: 11,
                        m: 10,
                    },
                    {
                        h: 12,
                        m: 30,
                    },
                    {
                        h: 13,
                        m: 50,
                    },
                    {
                        h: 15,
                        m: 10,
                    },
                    {
                        h: 16,
                        m: 30,
                    },
                    {
                        h: 17,
                        m: 50,
                    },
                    {
                        h: 18,
                        m: 30,
                    },
                    {
                        h: 19,
                        m: 10,
                    },
                    {
                        h: 20,
                        m: 30,
                    },
                    {
                        h: 21,
                        m: 30,
                    },
                    {
                        h: 22,
                        m: 30,
                    },
                ], // weekdays
                [
                    {
                        h: 7,
                        m: 20,
                    },
                    {
                        h: 8,
                        m: 30,
                    },
                    {
                        h: 9,
                        m: 35,
                    },
                    {
                        h: 10,
                        m: 45,
                    },
                    {
                        h: 11,
                        m: 55,
                    },
                    {
                        h: 13,
                        m: 0,
                    },
                    {
                        h: 14,
                        m: 10,
                    },
                    {
                        h: 15,
                        m: 15,
                    },
                    {
                        h: 16,
                        m: 25,
                    },
                    {
                        h: 17,
                        m: 30,
                    },
                    {
                        h: 18,
                        m: 35,
                    },
                    {
                        h: 19,
                        m: 50,
                    },
                    {
                        h: 20,
                        m: 55,
                    },
                    {
                        h: 22,
                        m: 0,
                    },
                ], // weekends
            ],
            faltay_departures: [
                [
                    {
                        h: 6,
                        m: 35,
                    },
                    {
                        h: 7,
                        m: 30,
                    },
                    {
                        h: 8,
                        m: 0,
                    },
                    {
                        h: 8,
                        m: 15,
                    },
                    {
                        h: 8,
                        m: 35,
                    },
                    {
                        h: 9,
                        m: 50,
                    },
                    {
                        h: 11,
                        m: 10,
                    },
                    {
                        h: 12,
                        m: 30,
                    },
                    {
                        h: 13,
                        m: 50,
                    },
                    {
                        h: 15,
                        m: 10,
                    },
                    {
                        h: 16,
                        m: 30,
                    },
                    {
                        h: 17,
                        m: 10,
                    },
                    {
                        h: 17,
                        m: 50,
                    },
                    {
                        h: 19,
                        m: 10,
                    },
                    {
                        h: 20,
                        m: 30,
                    },
                    {
                        h: 21,
                        m: 30,
                    },
                    {
                        h: 22,
                        m: 30,
                    },
                ], // weekdays
                [
                    {
                        h: 7,
                        m: 20,
                    },
                    {
                        h: 8,
                        m: 35,
                    },
                    {
                        h: 9,
                        m: 40,
                    },
                    {
                        h: 10,
                        m: 45,
                    },
                    {
                        h: 11,
                        m: 55,
                    },
                    {
                        h: 13,
                        m: 0,
                    },
                    {
                        h: 14,
                        m: 10,
                    },
                    {
                        h: 15,
                        m: 15,
                    },
                    {
                        h: 16,
                        m: 25,
                    },
                    {
                        h: 17,
                        m: 35,
                    },
                    {
                        h: 18,
                        m: 40,
                    },
                    {
                        h: 19,
                        m: 45,
                    },
                    {
                        h: 20,
                        m: 55,
                    },
                    {
                        h: 22,
                        m: 0,
                    },
                ], // weekends
            ],
        },
        {
            name: "882 - EShot",
            departure: "IYTE",
            other: "URLA",
            workText: "IYTE - URLA",
            price: 5,
            warning: true,
            iyte_departures: [
                [
                    {
                        h: 7,
                        m: 20,
                    },
                    {
                        h: 8,
                        m: 5,
                    },
                    {
                        h: 8,
                        m: 50,
                    },
                    {
                        h: 9,
                        m: 35,
                    },
                    {
                        h: 10,
                        m: 20,
                    },
                    {
                        h: 11,
                        m: 5,
                    },
                    {
                        h: 11,
                        m: 50,
                    },
                    {
                        h: 12,
                        m: 40,
                    },
                    {
                        h: 13,
                        m: 30,
                    },
                    {
                        h: 14,
                        m: 20,
                    },
                    {
                        h: 15,
                        m: 10,
                    },
                    {
                        h: 16,
                        m: 0,
                    },
                    {
                        h: 16,
                        m: 50,
                    },
                    {
                        h: 17,
                        m: 40,
                    },
                    {
                        h: 18,
                        m: 30,
                    },
                    {
                        h: 19,
                        m: 20,
                    },
                    {
                        h: 20,
                        m: 0,
                    },
                    {
                        h: 20,
                        m: 40,
                    },
                    {
                        h: 21,
                        m: 20,
                    },
                    {
                        h: 22,
                        m: 40,
                    },
                    {
                        h: 23,
                        m: 59,
                    },
                ], // weekdays
                [
                    {
                        h: 8,
                        m: 0,
                    },
                    {
                        h: 9,
                        m: 20,
                    },
                    {
                        h: 10,
                        m: 40,
                    },
                    {
                        h: 12,
                        m: 0,
                    },
                    {
                        h: 13,
                        m: 20,
                    },
                    {
                        h: 14,
                        m: 40,
                    },
                    {
                        h: 16,
                        m: 0,
                    },
                    {
                        h: 17,
                        m: 20,
                    },
                    {
                        h: 18,
                        m: 40,
                    },
                    {
                        h: 20,
                        m: 0,
                    },
                    {
                        h: 21,
                        m: 20,
                    },
                ],
            ],
            faltay_departures: [
                [
                    {
                        h: 6,
                        m: 30,
                    },
                    {
                        h: 7,
                        m: 20,
                    },
                    {
                        h: 8,
                        m: 5,
                    },
                    {
                        h: 8,
                        m: 50,
                    },
                    {
                        h: 9,
                        m: 35,
                    },
                    {
                        h: 10,
                        m: 20,
                    },
                    {
                        h: 11,
                        m: 5,
                    },
                    {
                        h: 11,
                        m: 50,
                    },
                    {
                        h: 12,
                        m: 40,
                    },
                    {
                        h: 13,
                        m: 30,
                    },
                    {
                        h: 14,
                        m: 20,
                    },
                    {
                        h: 15,
                        m: 10,
                    },
                    {
                        h: 16,
                        m: 0,
                    },
                    {
                        h: 16,
                        m: 50,
                    },
                    {
                        h: 17,
                        m: 40,
                    },
                    {
                        h: 18,
                        m: 30,
                    },
                    {
                        h: 19,
                        m: 20,
                    },
                    {
                        h: 20,
                        m: 0,
                    },
                    {
                        h: 20,
                        m: 40,
                    },
                    {
                        h: 22,
                        m: 0,
                    },
                    {
                        h: 23,
                        m: 20,
                    },
                ], // weekdays
                [
                    {
                        h: 7,
                        m: 20,
                    },
                    {
                        h: 8,
                        m: 40,
                    },
                    {
                        h: 10,
                        m: 0,
                    },
                    {
                        h: 11,
                        m: 20,
                    },
                    {
                        h: 12,
                        m: 40,
                    },
                    {
                        h: 14,
                        m: 0,
                    },
                    {
                        h: 15,
                        m: 20,
                    },
                    {
                        h: 16,
                        m: 40,
                    },
                    {
                        h: 18,
                        m: 0,
                    },
                    {
                        h: 19,
                        m: 20,
                    },
                    {
                        h: 20,
                        m: 40,
                    },
                ], // weekends
            ],
        },
        {
            name: "981 - EShot",
            departure: "BALIKLIOVA",
            other: "F.ALTAY",
            workText: "BALIKLIOVA - F.ALTAY",
            price: 4.38,
            warning: true,
            iyte_departures: [
                [
                    {
                        h: 6,
                        m: 35,
                    },
                    {
                        h: 8,
                        m: 30,
                    },
                    {
                        h: 21,
                        m: 0,
                    },
                    {
                        h: 22,
                        m: 0,
                    },
                ], // weekdays
                [
                    {
                        h: 6,
                        m: 35,
                    },
                    {
                        h: 8,
                        m: 15,
                    },
                    {
                        h: 19,
                        m: 40,
                    },
                    {
                        h: 21,
                        m: 30,
                    },
                ], // weekends
            ],
            faltay_departures: [
                [
                    {
                        h: 6,
                        m: 45,
                    },
                    {
                        h: 8,
                        m: 30,
                    },
                    {
                        h: 19,
                        m: 0,
                    },
                    {
                        h: 20,
                        m: 30,
                    },
                    {
                        h: 23,
                        m: 0,
                    },
                ], // weekdays
                [
                    {
                        h: 6,
                        m: 45,
                    },
                    {
                        h: 8,
                        m: 15,
                    },
                    {
                        h: 17,
                        m: 45,
                    },
                    {
                        h: 19,
                        m: 40,
                    },
                    {
                        h: 21,
                        m: 30,
                    },
                ], // weekends
            ],
        },
    ];

    upcomingTimes = [];

    d = new Date();
    gap = 10;

    upcomingType = 0; // 0: IYTE => FALTAY
    currentDay = this.d.getDay();
    isWeekday = this.currentDay < 6 && this.currentDay > 0;
    // isWeekday = true;

    addExtraZero = (x) => {
        return x < 10 ? "0" + x : x;
    };

    showMore = (e) => {
        let transportIndex = e.currentTarget.dataset.transportindex;
        let status = e.currentTarget.dataset.status;
        let height =
            e.currentTarget.querySelector(".element-inside").offsetHeight;
        let icon = e.currentTarget.querySelector(".show-more-btn");

        let top = e.currentTarget.offsetTop;

        setTimeout(() => {
            window.scrollTo({
                top: top - 8,
            });
        }, 500);

        if (status == "closed") {
            tableElements[transportIndex].style.overflow = "none";
            tableElements[
                transportIndex
            ].style.height = `calc(48px + 8px + ${height}px`;
            // icon.innerHTML = `<i class="fas fa-arrow-up"></i>`;
            icon.style.transform = "rotateX(180deg)";

            e.currentTarget.setAttribute("data-status", "open");
        } else {
            tableElements[transportIndex].style.overflow = "hidden";
            tableElements[transportIndex].style.height = `48px`;

            icon.style.transform = "rotateX(0deg)";

            e.currentTarget.setAttribute("data-status", "closed");
        }
    };

    updateTable = () => {
        let d = new Date();

        let h = d.getHours();
        let m = d.getMinutes();
        // let h = 0;
        // let m = 0;
        let dayIndex = d.getDay();

        rowBlocks.forEach((block) => {
            let blockH = block.dataset.h;
            let blockM = block.dataset.m;

            // past weekdays if we'r in weekend
            if (dayIndex > 5 && block.dataset.day == "weekday") {
                block.classList.add("past-block");
            }

            if (h > blockH) {
                block.classList.add("past-block");
            }

            if (h == blockH && m > blockM) {
                block.classList.add("past-block");
            }
        });
    };

    changeUpcomingType = () => {
        if (this.upcomingType == 0) {
            upcomingTypeText.innerHTML = `OTHER <span class="arrow"><i class="fa-solid fa-arrow-right-long"></i></span> IYTE`;

            this.upcomingType = 1;
        } else {
            upcomingTypeText.innerHTML = `IYTE <span class="arrow"><i class="fa-solid fa-arrow-right-long"></i></span> OTHER`;

            this.upcomingType = 0;
        }

        this.updateUpcoming();
        this.initTransports();
    };

    updateUpcoming = () => {
        upcomingsArea.innerHTML = ``;
        this.upcomingTimes = [];

        let d = new Date();

        let h = d.getHours();
        let m = d.getMinutes();

        // let h = 13;
        // let m = 19;

        this.transports.map((transport, tIndex) => {
            if (this.isWeekday) {
                if (this.upcomingType == 0) {
                    for (
                        let x = 0, count = transport.iyte_departures[0].length;
                        x < count;
                        x++
                    ) {
                        let time = transport.iyte_departures[0][x];
                        if (
                            time.h > h ||
                            (time.h == h && time.m > m - this.gap)
                        ) {
                            let remainingMinute;

                            if (time.h > h) {
                                remainingMinute =
                                    (time.h - h - 1) * 60 + time.m + (60 - m);
                            }

                            if (time.h == h && time.m > m - this.gap) {
                                remainingMinute = time.m - m;
                            }

                            this.upcomingTimes.push({
                                transportType: tIndex,
                                departureH: time.h,
                                departureM: time.m,
                                isVillage:
                                    transport.iyte_departures[0][x].isVillage,
                                remainedMinute: remainingMinute,
                                isLast:
                                    x ==
                                    transport.iyte_departures[0].length - 1,
                            });

                            break;
                        }
                    }
                } else {
                    for (
                        let x = 0,
                            count = transport.faltay_departures[0].length;
                        x < count;
                        x++
                    ) {
                        let time = transport.faltay_departures[0][x];
                        if (
                            time.h > h ||
                            (time.h == h && time.m > m - this.gap)
                        ) {
                            let remainingMinute;

                            if (time.h > h) {
                                remainingMinute =
                                    (time.h - h - 1) * 60 + time.m + 60 - m;
                            }

                            if (time.h == h && time.m > m - this.gap) {
                                remainingMinute = time.m - m;
                            }

                            this.upcomingTimes.push({
                                transportType: tIndex,
                                departureH: time.h,
                                departureM: time.m,
                                isVillage:
                                    transport.faltay_departures[0][x].isVillage,
                                remainedMinute: remainingMinute,
                                isLast:
                                    x ==
                                    transport.faltay_departures[0].length - 1,
                            });

                            break;
                        }
                    }
                }
            } else {
                if (
                    !(this.currentDay == 7 && transport.name == "883 - EShot")
                ) {
                    if (this.upcomingType == 0) {
                        if (transport.iyte_departures[1]) {
                            for (
                                let x = 0,
                                    count = transport.iyte_departures[1].length;
                                x < count;
                                x++
                            ) {
                                let time = transport.iyte_departures[1][x];
                                if (
                                    time.h > h ||
                                    (time.h == h && time.m > m - this.gap)
                                ) {
                                    let remainingMinute;

                                    if (time.h > h) {
                                        remainingMinute =
                                            (time.h - h - 1) * 60 +
                                            time.m +
                                            60 -
                                            m;
                                    }

                                    if (time.h == h && time.m > m - this.gap) {
                                        remainingMinute = time.m - m;
                                    }

                                    this.upcomingTimes.push({
                                        transportType: tIndex,
                                        departureH: time.h,
                                        departureM: time.m,
                                        isVillage:
                                            transport.iyte_departures[1][x]
                                                .isVillage,
                                        remainedMinute: remainingMinute,
                                        isLast:
                                            x ==
                                            transport.iyte_departures[1]
                                                .length -
                                                1,
                                    });

                                    break;
                                }
                            }
                        }
                    } else {
                        if (transport.faltay_departures[1]) {
                            for (
                                let x = 0,
                                    count =
                                        transport.faltay_departures[1].length;
                                x < count;
                                x++
                            ) {
                                let time = transport.faltay_departures[1][x];
                                if (
                                    time.h > h ||
                                    (time.h == h && time.m > m - this.gap)
                                ) {
                                    let remainingMinute;

                                    if (time.h > h) {
                                        remainingMinute =
                                            (time.h - h - 1) * 60 +
                                            time.m +
                                            60 -
                                            m;
                                    }

                                    if (time.h == h && time.m > m - this.gap) {
                                        remainingMinute = time.m - m;
                                    }

                                    this.upcomingTimes.push({
                                        transportType: tIndex,
                                        departureH: time.h,
                                        departureM: time.m,
                                        isVillage:
                                            transport.faltay_departures[1][x]
                                                .isVillage,
                                        remainedMinute: remainingMinute,
                                        isLast:
                                            x ==
                                            transport.faltay_departures[1]
                                                .length -
                                                1,
                                    });

                                    break;
                                }
                            }
                        }
                    }
                }
            }
        });

        // sort remaining times
        this.upcomingTimes.sort((a, b) => a.remainedMinute - b.remainedMinute);

        this.upcomingTimes.map((upcoming, uIndex) => {
            let upcomingDiv = document.createElement("div");
            upcomingDiv.className = "upcoming-transport";

            let transport = this.transports[upcoming.transportType];

            upcomingDiv.innerHTML = `
                <div class="upcoming-left">
                    <div class="upcoming-name">${transport.name}</div>
                    <div class="upcoming-price"> ${transport.price}₺</div>
                </div>
                <div class="upcoming-right">
                    <div class="remaining-time">${
                        upcoming.remainedMinute < 60
                            ? `in ${upcoming.remainedMinute} minutes`
                            : `in ${Math.floor(
                                  upcoming.remainedMinute / 60
                              )} hours ${upcoming.remainedMinute % 60} minutes`
                    }</div>
                    <div class="upcoming-time">[${this.addExtraZero(
                        upcoming.departureH
                    )}.${this.addExtraZero(upcoming.departureM)}]</div>
                </div>
            `;

            const remainingTimeArea =
                upcomingDiv.querySelector(".remaining-time");

            upcomingsArea.appendChild(upcomingDiv);

            if (
                upcoming.remainedMinute < this.gap + 1 &&
                upcoming.remainedMinute > -1 * (this.gap + 1)
            ) {
                upcomingDiv
                    .querySelector(".remaining-time")
                    .classList.add("active-transport");
                remainingTimeArea.innerHTML = `in ${upcoming.remainedMinute} minutes <i class="fa-solid fa-sign-hanging"></i>`;
            }

            if (
                upcoming.remainedMinute > 60 &&
                upcoming.remainedMinute % 60 == 0
            ) {
                remainingTimeArea.innerHTML = `in ${Math.floor(
                    upcoming.remainedMinute / 60
                )} hours <i class="fa-solid fa-sign-hanging"></i>`;
            }

            if (upcoming.remainedMinute < 0) {
                remainingTimeArea.innerHTML = `past by ${Math.floor(
                    Math.abs(upcoming.remainedMinute % 60)
                )} minutes <i class="fa-solid fa-sign-hanging"></i>`;
            }

            if (
                upcoming.remainedMinute % 60 == 0 &&
                upcoming.remainedMinute >= 60
            ) {
                remainingTimeArea.innerHTML = `in ${Math.floor(
                    upcoming.remainedMinute / 60
                )} hour <i class="fa-solid fa-sign-hanging"></i>`;
            }

            if (upcoming.remainedMinute == 0) {
                remainingTimeArea.innerHTML = `now <i class="fa-solid fa-sign-hanging"></i>`;
            }

            if (upcoming.remainedMinute == -1) {
                remainingTimeArea.innerHTML = `past by ${Math.floor(
                    Math.abs(upcoming.remainedMinute % 60)
                )} minute <i class="fa-solid fa-sign-hanging"></i>`;
            }

            if (upcoming.isLast) {
                upcomingDiv.classList.add("last-for-today");
                upcomingDiv.querySelector(
                    ".upcoming-name"
                ).innerHTML = `${transport.name} <span style="font-size: 8px;">[LAST!]</span>`;
            }

            if (upcoming.isVillage) {
                let content =
                    upcomingDiv.querySelector(".upcoming-name").textContent;
                content += `<span class="village">[gulbahce]</span>`;
                upcomingDiv.querySelector(".upcoming-name").innerHTML = content;
            }
        });

        if (this.upcomingTimes.length == 0) {
            let div = document.createElement("div");
            div.className = "info-div upcoming-transport";

            div.textContent = "NO MORE TRANSPORT FOR TODAY";

            upcomingsArea.appendChild(div);
        }
    };

    initTransports = () => {
        transportsTable.innerHTML = `
            <div class="table-info">
                <div class="table-info-left">
                    All Transports
                </div>
            </div>
            <!-- <div class="soon-transport">Kaydırak <span class="soon-text">(Yakında)</span></div> -->
        `;
        this.transports.map((transport, tIndex) => {
            let tableElementDiv = document.createElement("div");
            tableElementDiv.className = "table-element";
            tableElementDiv.setAttribute("data-transportindex", tIndex);
            tableElementDiv.setAttribute("data-status", "closed");

            tableElementDiv.innerHTML = `
                <div class="element-preview">
                    <div class="element-left">
                        <div class="element-name">${transport.name}</div>
                        <div class="element-price">${
                            transport.price ? `${transport.price}₺` : ""
                        }</div>
                    </div>
                    <div class="element-right">
                        <div class="element-times">${transport.workText}</div>
                        <div class="show-more-btn"><i class="fa-solid fa-angle-down"></i></div>
                    </div>
                </div>
                <div class="element-inside">
                    <div class="weekdays-side inside-side">
                        <div class="side-text">Weekdays</div>
                        <div class="time-table weekdays-time-table">
                            <div class="table-top">
                                <div class="iyte-departure-text departure-text">${
                                    transport.departure
                                }</div>
                                <div class="faltay-departure-text departure-text">${
                                    transport.other
                                }</div>
                            </div>
                        </div>
                    </div>
                    <div class="vertical-line"></div>
                    <div class="weekends-side inside-side">
                        <div class="side-text">${
                            transport.name == "883 - EShot"
                                ? "Saturday"
                                : "Weekends"
                        }</div>
                        <div class="time-table weekends-time-table">
                            <div class="table-top">
                                <div class="iyte-departure-text departure-text">${
                                    transport.departure
                                }</div>
                                <div class="faltay-departure-text departure-text">${
                                    transport.other
                                }</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // INIT FOR WEEKDAYS
            let weekdaysTimeTable = tableElementDiv.querySelector(
                ".weekdays-time-table"
            );

            for (
                let x = 0, count = transport.iyte_departures[0].length;
                x < count;
                x++
            ) {
                let rowDiv = document.createElement("div");
                rowDiv.className = "table-row";

                let iyteDeparture = transport.iyte_departures[0][x];
                let faltayDeparture = transport.faltay_departures[0][x];

                if (iyteDeparture.isVillage) {
                    rowDiv.classList.add("to-the-village");
                }

                rowDiv.innerHTML = `
                    <div class="row-left row-block" data-day="weekday" data-h="${
                        iyteDeparture.h
                    }" data-m="${iyteDeparture.m}">${
                    iyteDeparture
                        ? `${this.addExtraZero(
                              iyteDeparture.h
                          )}.${this.addExtraZero(iyteDeparture.m)}`
                        : "-"
                }</div>
                    <div class="row-right row-block" data-day="weekday" data-h="${
                        faltayDeparture ? faltayDeparture.h : 0
                    }" data-m="${faltayDeparture ? faltayDeparture.m : 0}">${
                    faltayDeparture
                        ? `${this.addExtraZero(
                              faltayDeparture.h
                          )}.${this.addExtraZero(faltayDeparture.m)}`
                        : "-"
                }</div>
                `;

                weekdaysTimeTable.appendChild(rowDiv);
            }

            // INIT FOR WEEKEND
            let weekendsTimeTable = tableElementDiv.querySelector(
                ".weekends-time-table"
            );

            if (transport.iyte_departures[1]) {
                let count = transport.faltay_departures[1].length;

                if (
                    transport.iyte_departures[1].length >
                    transport.faltay_departures[1].length
                ) {
                    count = transport.iyte_departures[1].length;
                }

                for (let x = 0; x < count; x++) {
                    let rowDiv = document.createElement("div");
                    rowDiv.className = "table-row";

                    let iyteDeparture = transport.iyte_departures[1][x];
                    let faltayDeparture = transport.faltay_departures[1][x];

                    rowDiv.innerHTML = `
                        <div class="row-left row-block" data-day="weekend" data-h="${
                            iyteDeparture ? iyteDeparture.h : 0
                        }" data-m="${iyteDeparture ? iyteDeparture.m : 0}">${
                        iyteDeparture
                            ? `${this.addExtraZero(
                                  iyteDeparture.h
                              )}.${this.addExtraZero(iyteDeparture.m)}`
                            : "-"
                    }</div>
                        <div class="row-right row-block" data-day="weekend" data-h="${
                            faltayDeparture ? faltayDeparture.h : 0
                        }" data-m="${
                        faltayDeparture ? faltayDeparture.m : 0
                    }">${
                        faltayDeparture
                            ? `${this.addExtraZero(
                                  faltayDeparture.h
                              )}.${this.addExtraZero(faltayDeparture.m)}`
                            : "-"
                    }</div>
                    `;

                    weekendsTimeTable.appendChild(rowDiv);
                }
            }

            transportsTable.appendChild(tableElementDiv);

            let HEIGHT =
                tableElementDiv.querySelector(".element-inside").offsetHeight;
            let verticalLine = tableElementDiv.querySelector(".vertical-line");

            const elementTimesArea =
                tableElementDiv.querySelector(".element-times");

            if (this.upcomingType == 0 && this.isWeekday) {
                elementTimesArea.textContent = `${this.addExtraZero(
                    transport.iyte_departures[0][0].h
                )}.${this.addExtraZero(
                    transport.iyte_departures[0][0].m
                )} - ${this.addExtraZero(
                    transport.iyte_departures[0][
                        transport.iyte_departures[0].length - 1
                    ].h
                )}.${this.addExtraZero(
                    transport.iyte_departures[0][
                        transport.iyte_departures[0].length - 1
                    ].m
                )}`;
            } else if (
                this.upcomingType == 0 &&
                !this.isWeekday &&
                transport.iyte_departures[1]
            ) {
                elementTimesArea.textContent = `${this.addExtraZero(
                    transport.iyte_departures[1][0].h
                )}.${this.addExtraZero(
                    transport.iyte_departures[1][0].m
                )} - ${this.addExtraZero(
                    transport.iyte_departures[1][
                        transport.iyte_departures[1].length - 1
                    ].h
                )}.${this.addExtraZero(
                    transport.iyte_departures[1][
                        transport.iyte_departures[1].length - 1
                    ].m
                )}`;
            } else if (this.upcomingType == 1 && this.isWeekday) {
                elementTimesArea.textContent = `${this.addExtraZero(
                    transport.faltay_departures[0][0].h
                )}.${this.addExtraZero(
                    transport.faltay_departures[0][0].m
                )} - ${this.addExtraZero(
                    transport.faltay_departures[0][
                        transport.faltay_departures[0].length - 1
                    ].h
                )}.${this.addExtraZero(
                    transport.faltay_departures[0][
                        transport.faltay_departures[0].length - 1
                    ].m
                )}`;
            } else if (
                this.upcomingType == 1 &&
                !this.isWeekday &&
                transport.faltay_departures[1]
            ) {
                elementTimesArea.textContent = `${this.addExtraZero(
                    transport.faltay_departures[1][0].h
                )}.${this.addExtraZero(
                    transport.faltay_departures[1][0].m
                )} - ${this.addExtraZero(
                    transport.faltay_departures[1][
                        transport.faltay_departures[1].length - 1
                    ].h
                )}.${this.addExtraZero(
                    transport.faltay_departures[1][
                        transport.faltay_departures[1].length - 1
                    ].m
                )}`;
            } else if (!this.isWeekday && !transport.faltay_departures[0]) {
                elementTimesArea.textContent = `only weekdays`;
            }

            verticalLine.style.height = `${HEIGHT * 0.8}px`;
        });

        tableElements = document.querySelectorAll(".table-element");
        rowBlocks = document.querySelectorAll(".row-block");

        rowBlocks.forEach((block) => {
            if (block.textContent == "-") {
                block.style.filter = "opacity(0)";
            }
        });

        tableElements.forEach((element) => {
            element.addEventListener("click", this.showMore);
        });
    };
}

const transports = new Transports();

transports.initTransports();

setInterval(transports.updateTable, 1000);
transports.updateUpcoming();
setInterval(transports.updateUpcoming, 1000);

changeUpcomingTypeBtn.addEventListener("click", transports.changeUpcomingType);
upcomingTypeText.addEventListener("click", transports.changeUpcomingType);

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        colorTheme = event.matches ? "dark" : "light";

        document.body.className = colorTheme;
    });

document.addEventListener("click", (e) => {
    if (e.target.className == "alert-modal") {
        alertModal.style.display = "none";
    }
});

closeModalBtn.addEventListener("click", () => {
    alertModal.style.display = "none";
});

dontShowAgainBtn.addEventListener("click", (e) => {
    if (e.currentTarget.dataset.status == "clicked") {
        e.currentTarget.dataset.status = "unclicked";
        dsaIcon.style.display = "none";
        alertModalDSA = "false";
    } else {
        e.currentTarget.dataset.status = "clicked";
        dsaIcon.style.display = "flex";
        alertModalDSA = "true";
    }
});

approveModalBtn.addEventListener("click", () => {
    alertModal.style.display = "none";
    localStorage.setItem("alertModalDSA", alertModalDSA);
});
