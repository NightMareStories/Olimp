//================= Variables for header menu operation ================= 

let in_burger = document.querySelector('.menu__body');
let in_header = document.querySelector('.contacts-header');

let from_actions = document.querySelector('._actions');
let from_info = document.querySelector('.info-header');

let actions = document.querySelector('.actions-header');
let info_callback = document.querySelector('._callback');
let info_schedule = document.querySelector('._schedule');
let info_cart = document.querySelector('._cart');

//=======================================================================


//============ Function with rebuilding elements on loading =============
//================ and resizing the browser window ====================== 

function navMenu() {
    let viewport_width = Math.max(widthContentArea = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);

    if (viewport_width < 992) {
        if (!info_schedule.classList.contains('replaced')) {
            in_burger.append(info_schedule);
            info_schedule.classList.add('replaced');
        }
    }
    else {
        from_info.prepend(info_schedule);
        info_schedule.classList.remove('replaced');
    }

    if (viewport_width < 640) {
        if (!actions.classList.contains('replaced') && !info_callback.classList.contains('replaced') && !info_cart.classList.contains('replaced')) {
            in_burger.prepend(actions);
            in_burger.append(info_callback);
            in_header.prepend(info_cart);
            actions.classList.add('replaced');
            info_callback.classList.add('replaced');
            info_cart.classList.add('replaced');
        }
    }
    else {
        from_actions.append(actions);
        from_info.prepend(info_callback);
        from_info.append(info_cart);
        actions.classList.remove('replaced');
        info_callback.classList.remove('replaced');
        info_cart.classList.remove('replaced');
    }
}

//=======================================================================


//=============== Function for working the product menu =================
//================ with a change in the browser window ==================

function menuPage() {
    let menuParents = document.querySelectorAll('.menu-page__parent');
    let submenuPage = document.querySelectorAll('.submenu-page');
    let elem = document.querySelector('.menu-page__parent');

    for (let i = 0; i < menuParents.length; i++) {
        let menuParent = menuParents[i];
        let subMenu = submenuPage[i];

        menuParent.addEventListener("click", function (e) {
            e.preventDefault();

            let target = e.currentTarget;

            if (menuParent.classList.contains('_active')) {
                elem = menuParent;
                if (target.classList.contains('_active')) {
                    target.classList.remove('_active');
                }
            }
            else if (!menuParent.classList.contains('_active')) {
                if (!target.classList.contains('_active') && !elem.classList.contains('_active')) {
                    target.classList.add('_active');
                    elem = target;
                }
                else if (!target.classList.contains('_active') && elem.classList.contains('_active')) {
                    elem.classList.remove('_active');
                    target.classList.add('_active');
                    elem = target;
                }
            }
        });

        subMenu.addEventListener("click", function (e) {
            e.stopPropagation();
        });
    }
}

//=======================================================================


//================== Variables for the side-content =====================

let side_in = document.querySelector('.page__content-side-in');
let side_from = document.querySelector('.page__side');

let side_content = document.querySelector('.page__content-side-from');

//=======================================================================


//============= Function to arrange blocks of side-content ==============
//============ according to the size of the browser window ==============

function sideContent() {
    if (side_content != undefined) {
        let viewport_width = Math.max(widthContentArea = window.innerWidth || document.documentElement.clientWidth ||
            document.body.clientWidth);

        if (viewport_width < 992) {
            if (!side_content.classList.contains('replaced')) {
                side_in.append(side_content);
                side_content.classList.add('replaced');
            }
        }
        else {
            side_from.append(side_content);
            side_content.classList.remove('replaced');
        }
    }
}

//=======================================================================


//=============== Variables for the product filtering ===================

let filterMobile = document.querySelector('.filter__title');
let filterContent = document.querySelector('.filter__content');

//=======================================================================


//=== Hide and show function for product filtering on a mobile device ===

function filterCatalog() {
    let viewport_width = Math.max(widthContentArea = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth);

    if (filterMobile != undefined) {
        if (viewport_width < 992) {
            filterMobile.addEventListener('click', function (e) {
                e.preventDefault();

                filterContent.classList.toggle('_active');
            });
        }
    }
}

//=======================================================================


//============ Event listener for loading and page resizing =============

window.addEventListener('load', function (event) {
    return navMenu(), menuPage(), sideContent(), filterCatalog();
})

window.addEventListener('resize', function (event) {
    return navMenu(), sideContent();
})

//=======================================================================


//======================= Header burger menu ============================

let iconMenu = document.querySelector('.icon-menu');
let menuBody = document.querySelector('.menu__body');

iconMenu.addEventListener('click', function (e) {
    e.preventDefault();

    if (iconMenu.classList.contains('_active') && menuBody.classList.contains('_active')) {
        document.body.classList.remove('_nav-visible');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
    }
    else if (!iconMenu.classList.contains('_active') && !menuBody.classList.contains('_active')) {
        document.body.classList.add('_nav-visible');
        iconMenu.classList.add('_active');
        menuBody.classList.add('_active');
    }
});

//=======================================================================


//====================== Product burger menu ============================

let productBurger = document.querySelector('.menu-page__burger');
let productBody = document.querySelector('.menu-page__body');

productBurger.addEventListener("click", function (e) {
    productBurger.classList.toggle('_active');
    productBody.classList.toggle('_active');
});

//=======================================================================


//======================== Product search ===============================

let searchSelect = document.querySelector('.search-page__title');
let searchCategories = document.querySelector('.categories-search');

searchSelect.addEventListener("click", function (e) {
    searchSelect.classList.toggle('_active');
    searchCategories.classList.toggle('_active');
});

//=======================================================================


//==================== Product search checkboxes ========================

let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');
let checkboxSelected = document.querySelector('.search-page__title>span');

for (let i = 0; i < checkboxCategories.length; i++) {
    let checkboxItem = checkboxCategories[i];
    checkboxItem.addEventListener("change", function (e) {
        checkboxItem.classList.toggle('_active');
        let categories = document.querySelectorAll('.categories-search__checkbox._active');
        if (categories.length > 0) {
            searchSelect.classList.add('_selected');
            let searchCount = document.querySelector('.search-page__count');
            searchCount.textContent = searchCount.getAttribute('data-text') + categories.length;
        }
        else {
            searchSelect.classList.remove('_selected');
        }
    })
}

//=======================================================================


//=========================== noUiSlider ================================

let priceSlider = document.querySelector('.price-filter__slider');

if (priceSlider != undefined) {
    noUiSlider.create(priceSlider, {
        start: [0, 100000],
        connect: true,
        tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
        range: {
            'min': [0],
            'max': [200000]
        }
    });

    let priceStart = document.getElementById('price-start');
    let priceEnd = document.getElementById('price-end');
    let nodes = [
        document.getElementById('price-start'),
        document.getElementById('price-end')
    ];
    let formatPrice = wNumb({
        decimals: 0
    })
    priceSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
        nodes[handle].value = formatPrice.to(+values[handle]);
    });
    priceStart.addEventListener('change', function (e) {
        priceSlider.noUiSlider.set([this.value, null]);
    });
    priceEnd.addEventListener('change', function (e) {
        priceSlider.noUiSlider.set([null, this.value]);
    });
}

//=======================================================================


//============ Hide and show the product filtering section ==============

let filterTitle = document.querySelectorAll('._spoller');

if (filterTitle != undefined) {
    filterTitle.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.target.parentElement.classList.toggle('_active');
            this.classList.toggle('_active');
        })
    });
}

//=======================================================================

//==================== Sort products by tile or list ====================

let viewGrid = document.querySelector('.view-catalog__item_grid');
let viewList = document.querySelector('.view-catalog__item_list');

if (viewGrid != undefined && viewList != undefined) {
    viewGrid.addEventListener('click', function (e) {
        if (!viewGrid.classList.contains('_active') && viewList.classList.contains('_active')) {
            viewList.classList.remove('_active');
            viewGrid.classList.add('_active');
        }
    });

    viewList.addEventListener('click', function (e) {
        if (!viewList.classList.contains('_active') && viewGrid.classList.contains('_active')) {
            viewGrid.classList.remove('_active');
            viewList.classList.add('_active');
        }
    });
}

//=======================================================================

//=========================== SwiperSlider ==============================

if (document.querySelector('.mainslider')) {
    let mainSlider = new Swiper('.mainslider', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        simulateTouch: true,
        pagination: {
            el: '.mainslider__dotts',
            clickable: true,
        },
    });
    let mainSliderImages = document.querySelectorAll('.mainslider__image');
    let mainSliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');

    for (let i = 0; i < mainSliderImages.length; i++) {
        const mainSliderImage = mainSliderImages[i].querySelector('img').getAttribute('src');
        mainSliderDotts[i].style.backgroundImage = `url(${mainSliderImage})`;
    }
}

if (document.querySelector('.products-slider')) {
    let productsSlider = new Swiper('.products-slider', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        simulateTouch: true,
        navigation: {
            nextEl: '.products-slider__arrow_next',
            prevEl: '.products-slider__arrow_prev'
        },
        pagination: {
            el: '.products-slider__info',
            type: 'fraction'
        }
    });
}

if (document.querySelector('.brands-slider')) {
    let brandsSlider = new Swiper('.brands-slider__container', {
        observer: true,
        observeParents: true,
        slidesPerView: 5,
        spaceBetween: 0,
        // autoHeight: true,
        speed: 800,
        simulateTouch: true,
        loop: true,
        navigation: {
            nextEl: '.brands-slider__arrow_next',
            prevEl: '.brands-slider__arrow_prev'
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 0,

            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            1180: {
                slidesPerView: 5,
                spaceBetween: 0,
            },
        }
    });
}

if (document.querySelector('.images-product')) {
    let productSubSlider = new Swiper('.images-product__subslider', {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 0,
        // autoHeight: true,
        speed: 800,
        simulateTouch: true,
    });
    let productMainSlider = new Swiper('.images-product__mainslider', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        // autoHeight: true,
        speed: 800,
        simulateTouch: true,
        thumbs: {
            swiper: productSubSlider
        }
    });


}

//=======================================================================


//===================== Quantity of selected item =======================

if (document.querySelector('.quantity')) {
    let quantityInput = document.querySelector('.quantity__input input');
    let quantityButtons = document.querySelectorAll('.quantity__button');
    let count = 1;

    for (let i = 0; i < quantityButtons.length; i++) {
        quantityButtons[i].addEventListener('click', function (e) {
            if (e.target == quantityButtons[0]) {
                if (+count == 1) {
                    count = 1;
                    quantityInput.value = +count;
                }
                else {
                    count--;
                    quantityInput.value = +count;
                }
            }
            else if (e.target == quantityButtons[1]) {
                count++;
                quantityInput.value = +count;
            }
        })
    }
}

//=======================================================================

//====================== Tabs on the product page =======================

if (document.querySelector('.info-product')) {
    let infoProductItem = document.querySelectorAll('.info-product__item');
    infoProductItem.forEach(function (item) {
        item.onclick = showTabs;
    });
    function showTabs() {
        let data = this.getAttribute('data');

        let infoProductBlock = document.querySelectorAll('.info-product__block');
        let infoProductItem = document.querySelectorAll('.info-product__item');

        let blockWithAttr = document.querySelector(`.info-product__block[data="${data}"]`);
        let itemWithAttr = document.querySelector(`.info-product__item[data="${data}"]`);

        infoProductBlock.forEach(function (item) {
            item.classList.remove('_active');
        });
        infoProductItem.forEach(function (item) {
            item.classList.remove('_active');
        });

        blockWithAttr.classList.add('_active');
        itemWithAttr.classList.add('_active');
    }
}

//=======================================================================