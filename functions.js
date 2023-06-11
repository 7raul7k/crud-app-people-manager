function attachHomePage(){

    let container = document.querySelector(".container");

    container.innerHTML=`

       <header class="header-container">
        <h3 class="main-title">People</h3>

        <button class="button create-card-button">Create a card</button>
       </header>
 
        <div class="cards">

        
        </div>
`;

attachCards(peoples);
}

function attachCards(arr){

    let body = document.querySelector(".cards");

    body.innerHTML = "";

    let text = "";

    arr.forEach(element => {
         text += createCard(element);
    });

    body.innerHTML = text;
}

function createCard(people){
    return `
    <section class="card-container">
                <img src='http://fakeimg.pl/100?font=lobster' alt='' class="card-image"/>
               <ul class="card-information-container">
                <li class="card-item card-name">${people.name}</li>
                <li class="card-item card-job-title">${people.job} </li>
                <li class="card-item card-location">${people.location}</li>
                <li class="card-item wallet">${people.wallet}/hours</li>
               </ul>
            </section>
    
    `;
}

