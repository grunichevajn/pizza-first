$('.js-navigation-page').on('click', function(ev) {

    $('.js-navigation-page').each(function(index, elm) {
        var $el = $(elm);
        $el.removeClass('navigation_active');
    });

    $(ev.target).addClass('navigation_active');
    var dataAttr = ev.currentTarget.getAttribute('data-page');
    var pages = $('.page');
    pages.removeClass('page-show');

    pages.each(function(index, elm) {
        var $el = $(elm);
        var dataAtt = $el.attr('data-page');

        if (dataAtt === dataAttr) {
            $el.addClass('page-show');
        }
    });
});

var ingridients = {
    cucumber: {
        img: "assets/images/cucumber.png",
        title: "огурец"
    },
    tomato: {
        img: "assets/images/tomato.png",
        title: "помидор"
    },
}

var cards = [
    {
        id: 1,
        title: "Пипирони",
        img: "assets/images/product1.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti veniam culpa, ab cum tempore sapiente. Quis esse perferendis quae.",
        sostav: ["cucumber", "tomato"]
    },
    {
        id: 2,
        title: "Пипирони",
        img: "assets/images/product2.jpeg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti veniam culpa, ab cum tempore sapiente. Quis esse perferendis quae.",
        sostav: ["cucumber", "cucumber", "cucumber", "tomato", "cucumber"]
    },
    {
        id: 3,
        title: "Пипирони",
        img: "assets/images/product3.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti veniam culpa, ab cum tempore sapiente. Quis esse perferendis quae."
    },
    {
        id: 4,
        title: "Пипирони",
        img: "assets/images/product4.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti veniam culpa, ab cum tempore sapiente. Quis esse perferendis quae."
    },
    {
        id: 5,
        title: "Пипирони",
        img: "assets/images/product5.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti veniam culpa, ab cum tempore sapiente. Quis esse perferendis quae."
    },
    {
        id: 6,
        title: "Пипирони",
        img: "assets/images/product6.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti veniam culpa, ab cum tempore sapiente. Quis esse perferendis quae."
    },
    {
        id: 7,
        title: "Пипирони",
        img: "assets/images/product6.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti veniam culpa, ab cum tempore sapiente. Quis esse perferendis quae."
    }
];

function deleteCard(ev) {
    cards = cards.filter(function(card) {
        if (card.id == ev.target.getAttribute('id')) {
            return false
        }
        return true;
    });
    updateCadrs(cards);
}

function updateCadrs(cards) {
    $(".js-delete-product").off("click", deleteCard);
    var htmlCards = cards.map(function(card) {
        return `<div class="product-page__product-card">
                    <div class="product-page__product-card-helper">
                        <img class="product-page__product-card-helper-icon" src="assets/images/question.svg" alt="подсказка">
                        <div class="product-page__product-card-helper-description">
                            ${card?.sostav?.map(ingridient => {
                                return `<img class="product-page__product-card-helper-description-ingridient" title="${ingridients[ingridient].title}" src="${ingridients[ingridient].img}"/>`;
                            }).join('') || ''}
                        </div>
                    </div>
                    <img class="product-page__product-card-img" title="пицца" src="${card.img}" alt="">
                    <div class="product-page__product-card-description">${card.description}</div>
                    <div id="${card.id}" class="product-page__product-card-button js-delete-product">Заказать</div>
                </div>`;
    })
    $(".js-product-list").html(htmlCards);
    $(".js-delete-product").on("click", deleteCard);
}

updateCadrs(cards);

$(".js-add-product").on("click", function() {
    cards.push({
        id: cards.length + 1,
        title: "new",
        img: 'assets/images/product1.jpg',
        description: "новая пицца"
    });
    updateCadrs(cards);
});



$(".js-delete-product").on("click", target);