//enable when user clicks an image, that particular uploads to the main display
//also need to let user do same function with the keyboar




 
$('.thumbnail').click(function(event) {
        //displays on hero class one at a time
        //replace display picture with clicked image
        //find out which anchor and which image child was clicked
        //look into anchor object to find source image
        //push source image to hero class
        //find hero
       console.log(event.currentTarget);
       let image = $(event.currentTarget).find('img');
       (image).attr('src');
       let hero = $('.hero img');


        console.log((image).attr('src'));
        console.log(hero);

        hero.attr('src', (image).attr('src'));
        hero.attr('alt', (image).attr('alt'));
})
