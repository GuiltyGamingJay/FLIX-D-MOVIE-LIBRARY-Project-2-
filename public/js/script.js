const { post } = require("../../controllers/api/user");

var savedGames = [];

const clickedDiv = document.getElementsByClassName('example-draggable');

// for each method

clickedDiv.forEach(div => {
    console.log(div);

    div.addEventListener("click", function(event) { 
        savedGames.push(event.target.innerText);
        postSavedGames(savedGames)
    })
});


// save userID in new session
const postSavedGames = (savedGames) =>
  fetch('/addGame', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(savedGames),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });