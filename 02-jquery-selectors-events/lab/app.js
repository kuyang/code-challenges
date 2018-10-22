const $main = $('main')
const $selector = $('#image-filter')

const apiSource = 'https://raw.githubusercontent.com/CodePartnersMD/MD301-01/master/02-jquery-selectors-events/lab/page-1.json'

const Horns = function(imageObj){
    this.imgage_url = imageObj.imgage_url;
    this.title = imageObj.title;
    this.description = imageObj.description;
    this.keyword = imageObj.keyword;
    this.horns = imageObj.horns;
}


let allHorns = []

Horns.prototype.renderHorns = imgObj => {
    let $hornClone = $('#image-template').clone()
    $main.append($hornClone)
    $hornClone.attr('id', imgObj.title)
    $hornClone.find('img').attr('src', imgObj.image_url)
    $hornClone.find('p').text(imgObj.title)
}

$($selector).on('change', () => {
    $('section').hide()
    $(`section[id=${event.target.value}]`).show()
});

$.getJSON(apiSource, response => {
    response.forEach((val) => {
        let newHorns = new Horns(val);
        allHorns.push(newHorns);
        newHorns.renderHorns(val);
        $selector.append(`<option value=${newHorns.title}>${newHorns.title}</option>`);
    });
})