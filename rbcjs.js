function showInfo() {
    var number = document.getElementById('numberInput').value;
    var infoDisplay = document.getElementById('infoDisplay2');
    
    if (number == 101598
    ) {
        window.location.href = "/descargas.html"
    } else if (number == 815776
    ) {
        window.location.href = "descargas2.html"
    } else if (number == 525905) {
        window.location.href = "descargas3.html"
    } else if (number == 236726
) {
        window.location.href = "descargas4.html"
    } else {
        infoDisplay.innerHTML = "<p>Información no disponible para este número.</p>";
    }
}
