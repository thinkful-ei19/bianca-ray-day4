//event listener for user click
//find new entry in input(currentTarget)
//input should then add to 
//toggle shopping item
//remove shopping item from list

$(function() {
    $('#js-shopping-list-form').submit(function(event) {
       event.preventDefault();

       const shoppingItem = $(event.currentTarget).find('.js-shopping-list-entry');

       console.log(shoppingItem);

       shoppingList.add('.shoppingItem');


    })

    $('.shopping-item-delete').on('click', function(event) {
        this.remove();
    })

    $('.shopping-item-toggle').on('click', function(event) {
        this.toggleClass("shopping-item__checked");
    })
});