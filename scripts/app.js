document.addEventListener('DOMContentLoaded', function() {

    var hamburger = document.getElementById('hamburger');
    var nav = document.querySelector('nav');

   hamburger.addEventListener('click', function(e){
      nav.classList.toggle('hidden');
   });

    window.addEventListener('resize', function() {
        if (window.matchMedia("(max-width:820px)").matches) {
          nav.classList.add('hidden');
        }
        else if (window.matchMedia("(min-width:820px)").matches) {
          nav.classList.remove('hidden');
        }
    });
});
