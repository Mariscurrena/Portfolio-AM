function projecturl(url) {
    window.open(url, '_blank');
}

//---------------Modal Windows---------------//
//Modal Window Open
var botones = document.querySelectorAll('.openModal');

botones.forEach(function(boton) {
    boton.onclick = function() {
        var modalId = boton.getAttribute('data-modal');
        var modal = document.getElementById(modalId);
        modal.classList.add('show');
    }
});

//Close Window
window.onclick = function(event) {
    var modales = document.querySelectorAll('.modal');
    modales.forEach(function(modal) {
        if (event.target == modal) {
            modal.classList.remove('show');
        }
    });
}