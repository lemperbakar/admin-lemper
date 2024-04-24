document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;

    if (username === 'helloworld' && password === 'haihello') {
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password.');
    }
});