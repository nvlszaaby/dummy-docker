function checkBackend() {
    fetch("http://localhost:5000/")
        .then(res => res.text())
        .then(data => document.getElementById("status").innerText = data);
}

function checkDatabase() {
    fetch("http://localhost:5000/check-db")
        .then(res => res.text())
        .then(data => document.getElementById("status").innerText = data);
}

function addUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    fetch("http://localhost:5000/add-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    })
    .then(res => res.text())
    .then(data => alert(data));
}
