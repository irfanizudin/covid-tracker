//selector
const card = document.querySelector(".card");
const input = document.querySelector("input");
const time = document.querySelector('.time');

global();

//fetch api
fetch("https://covid19.mathdro.id/api/confirmed")
    .then(response => {
        return response.json();
    })
    .then(data2 => {
        //filter search
        input.addEventListener('keyup', (e) => {
            let search = e.target.value.toLowerCase();
            let filter = data2.filter((karakter) => {
                return (
                    karakter.countryRegion.toLowerCase().includes(search)
                );
            });
            console.log(filter);
            if (search.length === 0) {
                console.log("kosong");
                global();

            } else if (filter.length === 0) {
                console.log("not found");
                notFound();

            } else {
                //allcases
                let allcases = '';
                filter.forEach(allcase => {

                    allcases += `
                    <div class = "listcase">
                        <div class="title">
                            <h1>${allcase.countryRegion}</h1>
                            ${allcase.provinceState == null ? `` : `<p>${allcase.provinceState}</p>`}
                        </div>
                        <div class="allcase">
                            <div class="card-1 a">
                                <h1>CONFIRMED</h1>
                                <p>${allcase.confirmed}</p>
                                <span><i class="fas fa-check-circle"></i></span>
                            </div>
                            <div class="card-1 b">
                                <h1>RECOVERED</h1>
                                <p>${allcase.recovered}</p>
                                <span><i class="fas fa-plus-circle"></i></span>
                            </div>
                            <div class="card-1 c">
                                <h1>DEATHS</h1>
                                <p>${allcase.deaths}</p>
                                <span><i class="fas fa-times"></i></span>
                            </div>
                        </div>
                     </div> `;
                });

                card.innerHTML = allcases;

            }


        });
    })

function global() {
    fetch("https://covid19.mathdro.id/api")
        .then(response => {
            return response.json();
        })
        .then(dataGlobal => {

            //time
            let timeAwal = dataGlobal.lastUpdate;
            let year = timeAwal.slice(0, 4);
            let month = timeAwal.slice(5, 7);
            let day = timeAwal.slice(8, 10);
            let hours = timeAwal.slice(11, 13);
            let minute = timeAwal.slice(14, 16);
            let second = timeAwal.slice(17, 19);

            let updatetime = `Last Update at ${day}-${month}-${year} on ${hours}:${minute}:${second} `;
            time.innerHTML = updatetime;


            //global
            let global = `
                    <div class="title" >
                        <h1>Global Case</h1>
                    </div>
                    <div class="allcase">
                        <div class="card-1 a">
                            <h1>CONFIRMED</h1>
                            <p>${dataGlobal.confirmed.value}</p>
                            <span><i class="fas fa-check-circle"></i></span>
                        </div>
                        <div class="card-1 b">
                            <h1>RECOVERED</h1>
                            <p>${dataGlobal.recovered.value}</p>
                            <span><i class="fas fa-plus-circle"></i></span>
                        </div>
                        <div class="card-1 c">
                            <h1>DEATHS</h1>
                            <p>${dataGlobal.deaths.value}</p>
                            <span><i class="fas fa-times"></i></span>
                        </div>
                    </div>`;
            card.innerHTML = global;

        });
}

function notFound() {

    card.innerHTML = `<div class="allcase">
                        <div class="card-1 ">
                            
                            <h1>Search Not Found</h1>
                            
                        </div>
                    </div>`;
}


