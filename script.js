document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    let input = document.querySelector('.inp');
    let username = input.value.trim();
    if (username === "") {
        alert("Please enter a GitHub username!");
        return;
    }
    const requestUrl = `https://api.github.com/users/${username}`;
    const request = new XMLHttpRequest();
    request.open('GET', requestUrl, true);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                const data = JSON.parse(request.responseText);
                let card = document.querySelector('.card');
                let img = document.querySelector('img');
                let h2 = document.querySelector('h2');
                let p = document.querySelector('p');

                card.style.display = 'block';
                img.src = data.avatar_url;
                h2.textContent = data.name || "No Name Available";
                p.textContent = data.bio || "No Bio Available";
            } else {
                alert("User not found!");
            }
        }
    };

    request.send();
});