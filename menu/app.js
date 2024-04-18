const restaurantsArea = document.querySelector('.restaurants');

let restaurantDivs;

class App {
    restaurants = [
        {
            name: 'Name',
            hasPacketService: true,
            location: "",
            openingTime: "07.00", 
            closingTime: "23.00",
            hasSpecialOffer: true,
            lastUpdateDate: '23 October 2023',
            specialOffers: [
                {
                    name: 'Kahve + Kurabiye',
                    price: 30,
                    time: '2',
                },
                {
                    name: 'Kahve + Kurabiye',
                    price: 30,
                    time: '2',
                },
            ],
            categories: [
                {
                    title: 'Burgerler',
                    items: [],
                },
                {
                    title: 'Pizzalar',
                    items: [],
                },
                {
                    title: 'Tatlilar',
                    items: [],
                },
                {
                    title: 'Icecekler',
                    items: [
                        {
                            name: 'Su',
                            price: 30,
                        },
                        {
                            name: 'Kola',
                            price: 60,
                        },


                        {
                            name: 'Maden Suyu',
                            price: 40,
                        },

                        {
                            name: 'Ayran',
                            price: 50,
                        },

                    ],
                },
            ],
        },

        {
            name: 'Name',
            hasPacketService: true,
            location: "",
            openingTime: "07.00", 
            closingTime: "23.00",
            hasSpecialOffer: false,
            lastUpdateDate: '23 October 2023',
            specialOffers: [
                {
                    name: 'Kahve + Kurabiye',
                    price: 30,
                    time: '2',
                },
                {
                    name: 'Kahve + Kurabiye',
                    price: 30,
                    time: '2',
                },
            ],

            categories: [
                {
                    title: 'Burgerler',
                    items: [],
                },
                {
                    title: 'Pizzalar',
                    items: [],
                },
                {
                    title: 'Tatlilar',
                    items: [],
                },
                {
                    title: 'Icecekler',
                    items: [
                        {
                            name: 'Su',
                            price: 30,
                        },
                        {
                            name: 'Kola',
                            price: 60,
                        },


                        {
                            name: 'Maden Suyu',
                            price: 40,
                        },

                        {
                            name: 'Ayran',
                            price: 50,
                        },

                    ],
                },
            ],
        },
    ];

    categoriesDivHeight = 0;
    restaurantDivHeight = 0;
    categoryDivHeight = 0;

    showCategory = (e) => {
        let categoryDiv = e.currentTarget;
        let isActive = categoryDiv.dataset.status == "active";
        let categoriesDiv = categoryDiv.parentElement;
        let restaurantDiv = categoriesDiv.parentElement;

        this.categoriesDivHeight = categoriesDiv.offsetHeight;
        this.restaurantDivHeight = restaurantDiv.offsetHeight;

        this.categoryDivHeight = categoryDiv.offsetHeight;
        let categoryItemsHeight = categoryDiv.querySelector('.category-items').offsetHeight;

        if(!isActive) {
            categoriesDiv.style.height = `${this.categoriesDivHeight + categoryItemsHeight}px`;    
            restaurantDiv.style.height = `${this.restaurantDivHeight + categoryItemsHeight}px`;
            categoryDiv.style.height = `${this.categoryDivHeight + categoryItemsHeight}px`;

            categoryDiv.setAttribute('data-status', "active");

        } else {
            categoriesDiv.style.height = `${this.categoriesDivHeight - categoryItemsHeight}px`;    
            restaurantDiv.style.height = `${this.restaurantDivHeight - categoryItemsHeight}px`;
            categoryDiv.style.height = `${this.categoryDivHeight - categoryItemsHeight}px`;

            categoryDiv.setAttribute('data-status', "inactive");
        }

    }

    showRestaurant = (e) => {
        let isActive = e.currentTarget.classList.contains('active-restaurant');

        let restaurantIndex = e.currentTarget.dataset.restaurant;
        let restaurantDiv = restaurantDivs[restaurantIndex];
        let categoriesDiv = restaurantDiv.querySelector('.restaurant-categories');
        let arrow = restaurantDiv.querySelector('.preview-arrow');

        if(e.target.className == "restaurant-preview") {
            if(!isActive) {
                let marginHeight = 4;
                let previewHeight = 36;
                let infoHeight = 16;
                let height = categoriesDiv.offsetHeight + marginHeight * 2 + infoHeight + previewHeight;

                restaurantDiv.classList.add('active-restaurant');
                restaurantDiv.style.height = `${height}px`;

                arrow.style.transform = "rotate(-180deg)";

            } else {
                restaurantDiv.style.height = `56px`;

                restaurantDiv.classList.remove('active-restaurant');

                arrow.style.transform = "rotate(0deg)";
            }

        }
    }

    initSpecialOffers = (area, restaurant) => {
        if(restaurant.hasSpecialOffer) {
            let specialOffersDiv = document.createElement('div');
            specialOffersDiv.className = "special-offers";

            specialOffersDiv.innerHTML = `
            <div class="special-offers">
                <div class="special-offers-top">
                    <div class="offers-text">Special Offers</div>
                </div>

                <div class="special-offers-list">
                </div>
            </div> 
            `;

            let offersList = specialOffersDiv.querySelector('.special-offers-list');
            let specialOfferCount = restaurant.specialOffers.length;

            restaurant.specialOffers.map((offer, index) => {
                let offerDiv = document.createElement('div');
                offerDiv.className = "special-offer"

                offerDiv.innerHTML = `
                    <div class="special-offer-left">${offer.name} [${offer.time}]</div>
                    <div class="special-offer-right">${offer.price}₺</div>
                `

                offersList.appendChild(offerDiv);

                if(index != specialOfferCount - 1) {
                    let line = document.createElement('div');
                    line.className = "line";

                    offersList.appendChild(line);
                }
            });

            specialOffersDiv.appendChild(offersList);

            area.prepend(specialOffersDiv);
        } 
    }

    initCategories = (area, restaurant, restaurantIndex) => {
        restaurant.categories.map((category, categoryIndex) => {
            let categoryDiv = document.createElement('category');
            categoryDiv.className = "category";
            categoryDiv.setAttribute('data-restaurant', restaurantIndex);
            categoryDiv.setAttribute('data-category', categoryIndex);

            let length = restaurant.categories.length;

            categoryDiv.innerHTML = `
            <div class="category-preview">
                <div class="category-left">${category.title}</div>
                <div class="category-right">
                    <div class="show-category-btn"><i class="fa-solid fa-angle-down"></i></div>
                </div>
            </div>

            <div class="category-items">
            </div>
            `;

            let categoryItemsList = categoryDiv.querySelector('.category-items');

            category.items.map((item) => {
                let categoryItem = document.createElement('div');
                categoryItem.className = "category-item";

                categoryItem.innerHTML = `
                    <div class="item-left">${item.name}</div>
                    <div class="item-right">${item.price}</div>
                `;

                categoryItemsList.appendChild(categoryItem);
            });

            categoryDiv.addEventListener('click', this.showCategory);

            area.appendChild(categoryDiv);

            if(categoryIndex != length - 1) {
                let line = document.createElement('div');
                line.className = "line";

                area.appendChild(line);
            }

        });
    }

    initRestaurants = (filter) => {
        this.restaurants.map((restaurant, index) => {
            let restaurantDiv = document.createElement('div');
            restaurantDiv.className = "restaurant";
            restaurantDiv.setAttribute('data-restaurant', index);

            restaurantDiv.innerHTML = `

            <div class="restaurant-preview">
                <div class="preview-left">
                    ${restaurant.name}
                </div>

                <div class="preview-right">
                    ${restaurant.hasPacketService ? `<div class="service-icon"><i class="fa-solid fa-motorcycle"></i></div>` : ``}
                    <div class="working-hours">${restaurant.openingTime} - ${restaurant.closingTime}</div>
                    <a href="" class="location-icon"><i class="fa-solid fa-map-location-dot"></i></a>
                    <div class="preview-arrow"><i class="fa-solid fa-angle-down"></i></div>
                </div>
            </div>

            <div class="restaurant-update-info">Last updated ${restaurant.lastUpdateDate}</div>

            <div class="restaurant-categories">
            </div>
    
            `;

            let categoriesDiv = restaurantDiv.querySelector('.restaurant-categories');

            this.initSpecialOffers(categoriesDiv, restaurant);
            this.initCategories(categoriesDiv, restaurant, index);

            if(!restaurant.hasSpecialOffer) {
                let firstCategory = restaurantDiv.querySelectorAll('.category')[0];

                firstCategory.style.borderTopLeftRadius = "4px";
                firstCategory.style.borderTopRightRadius = "4px";
            }

            restaurantDiv.addEventListener('click', this.showRestaurant);

            restaurantsArea.appendChild(restaurantDiv);
        });
    }
}

const app = new App();
app.initRestaurants();

restaurantDivs = document.querySelectorAll('.restaurant');