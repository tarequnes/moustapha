function testerAPI() {
    fetch("/api/status")
        .then(response => response.json())
        .then(data => {
            document.getElementById("resultat").innerText =
                data.message;
        });
}