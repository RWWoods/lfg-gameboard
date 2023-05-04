

var RAWGAPIKey ="f52c05a92ae849e584adebbb8e0dbe2a";

var RAWGQueryURL = "https://api.rawg.io/api/games?key=" +RAWGAPIKey+ "";


// // event listener to get the info


// $("#formSubmit").on("submit", function (e) {
//     e.preventDefault();
// // # references ID in HTML
//     var searchResult = $("#search").val();
//     getSearch(searchResult);
//     console.log(searchResult);
// })


// function getSearch(search) {
//     fetch(`https://api.rawg.io/api/games?search=${search}key=${RAWGAPIKey}`)
//     .then (function (res) {
//         return res.json();
//     })
//     .then(function (results) {
//         console.log(results);
//             var name = results.name
//             var image = results.background_image
//             var releaseDate = results.released
//             var platforms = results.platform.name
//         console.log(name, image, releaseDate,);
//         console.log(platforms);
//     })
// }

var RAWGAPIKey ="f52c05a92ae849e584adebbb8e0dbe2a";

var RAWGQueryURL = "https://api.rawg.io/api/games?key=" +RAWGAPIKey+ "";

// function getSearch(search) {
//   fetch(`https://api.rawg.io/api/games?search=${search}&key=${RAWGAPIKey}`)
//   .then(function (res) {
//       return res.json();
//   })
//   .then(function (results) {
//       console.log(results);
//       var name = results.name;
//       var image = results.background_image;
//       var releaseDate = results.released;
//       var platforms = results.platforms.map(platform => platform.name).join(", ");
//       console.log(name, image, releaseDate, platforms);
      
//       // Compile the Handlebars template
//       const template = ExpressHandlebars.compile(`
//         <h2>About the Game</h2>
//         <p>Genre: ${results.genres[0].name}</p>
//         <p>Release Date: ${results.released}</p>
//         <p>Developer: ${results.developers[0].name}</p>
//         <p>Tags: ${results.tags[0].name}, ${results.tags[1].name}, ${results.tags[2].name}</p>
//       `);
      
     

//       // Pass the game data into the compiled template function
//       const renderedHtml = template({ data: results });

//       // Insert the rendered HTML into the game-stats div
//       document.getElementById('game-stats').innerHTML = renderedHtml;
//   })
//   .catch(function (error) {
//       console.log(error);
//   });
// }

function compileGameTemplate(game) {
  console.log(game);
  // document.getElementById("background_image").src=game.background_image
  document.getElementById("genre").textContent=game.genres[0].name
  document.getElementById("releaseDate").textContent=game.released
  document.getElementById("platform").textContent=game.platforms[0].platform.name
  document.getElementById("tags").textContent=game.tags[0].name
}

function getSearch(search) {
  fetch(`https://api.rawg.io/api/games?search=${search}&key=${RAWGAPIKey}`)
  .then(function (res) {
      return res.json();
  })
  .then(function (results) {
      console.log(results);
      compileGameTemplate(results.results[0]);
  })
  .catch(function (error) {
      console.log(error);
  });
}
getSearch("Destiny 2")