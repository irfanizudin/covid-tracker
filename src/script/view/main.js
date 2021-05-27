//app-bar
// let app_bar = document.querySelector("header");
// app_bar.innerHTML = `<h1>COVID TRACKER</h1>`;

// //time
// let time = document.querySelector(".time");
// time.innerHTML = `<p> Last Updated on ${global.lastUpdate}</p>`;

// //card
// let card = document.querySelector(".card");
// card.innerHTML = `
//             <div class="card-1 a">
//                 <h1>CONFIRMED</h1>
//                 <p>${global.confirmed.value}</p>
//                 <span><i class="fas fa-check-circle"></i></span>
//             </div>
//             <div class="card-1 b">
//                 <h1>RECOVERED</h1>
//                 <p>${global.recovered.value}</p>
//                 <span><i class="fas fa-plus-circle"></i></span>
//             </div>
//             <div class="card-1 c">
//                 <h1>DEATHS</h1>
//                 <p>${global.deaths.value}</p>
//                 <span><i class="fas fa-times"></i></span>
//             </div>`;


// const getBook = () => {
//     fetch(`${baseUrl}/list`)
//         .then(response => {
//             return response.json();
//         })
//         .then(responseJson => {
//             if (responseJson.error) {
//                 showResponseMessage(responseJson.message);
//             } else {
//                 renderAllBooks(responseJson.books);
//             }
//         })
//         .catch(error => {
//             showResponseMessage(error);
//         })
// };