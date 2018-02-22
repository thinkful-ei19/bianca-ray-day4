//create listener
$(function() {
    $('#number-chooser').submit(event => {
    //when event happens
    //stop page from going blank
    event.preventDefault();
   //generates fizzbuzz sequence to num user inputed
   //use .val to get the value of the input
   //set numbers added into the input to a variable
    $('.js-results').empty();
   let num = parseInt($('#number-choice').val(),10); 
   $('#number-choice').val('');
   //each element generated should insert element into .js-results div
   for(let i = 1; i <= num; i++){
       if(i % 15 === 0){
            $('.js-results').append(`<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>`);
       }
       else if (i % 5 === 0){
            $('.js-results').append(`<div class="fizz-buzz-item buzz"><span>buzz</span></div>`);
        }
        else if (i % 3 === 0){
            $('.js-results').append(`<div class="fizz-buzz-item fizz"><span>fizz</span></div>`)
        }
        else {
            $('.js-results').append(`<div class="fizz-buzz-item"><span>${i}</span></div>`)
        }

     };
   // if element is fizz the div .fizz-buzz-item should get fizz class
   // if element is buzz the div .fizz-buzz-item should get buzz class
   //if element is fizzbuzz the div .fizz-buzz-item should get fizzbuzz class
   // function should append the resulting html to .js-results
    })
})