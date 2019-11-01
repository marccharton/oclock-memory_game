import * as $ from "jquery";

var imgHeight = 100;
// var numImgs = 18;
// var img = $('#card-container').find('img');

let cardTypeList = [];
for (let i = 0; i < 18; i++) {
    cardTypeList.push({
        "type": `fruit_${i + 1}`,
        "offset": imgHeight * i
    })
}

function selectCardImg(type, img) {
    let cardType = cardTypeList.find((currentType) => {
        return currentType.type === type;
    });
    if (cardType !== undefined) {
        img.css('margin-top', -1 * cardType.offset);
    }
    return img;
}

function getCard(type) {
    // var img = $('<img />', {
    //     id: `${type}`,
    //     src: 'assets/cards.png',
    //     alt: `${type}`
    // });

    var img = $('<img />');
    img.attr('alt', type);
    // img = selectCardImg(type, img);
    let li = $("<li>");
    li.attr('id', type);

    img.appendTo(li);
    li.appendTo('#card-container');

    //img.appendTo($('#card-container'));
}

export { getCard };
