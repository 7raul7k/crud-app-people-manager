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

let createCard = document.querySelector(".create-card-button");

createCard.addEventListener("click",()=>{
attachNewCardPage();
});

attachCards(card);



let cardContainer = document.querySelector(".cards");

cardContainer.addEventListener("click",(e)=>{
    let obj = e.target;

    if(obj.classList.contains("name")){

        let person = card.find(function(p){
            return p.name === obj.innerText;
        });

        attachUpdatePage(person);
    }


})
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
                <li class="card-item card-name name">${people.name}</li>
                <li class="card-item card-job-title">${people.job} </li>
                <li class="card-item card-location">${people.location}</li>
                <li class="card-item wallet">${people.wallet}/hours</li>
               </ul>
            </section>
    
    `;
}

function attachNewCardPage(){

    let container = document.querySelector(".container");


    container.innerHTML = `  <h3 class="title">Create Card</h3>

    <div class='container-errors'>
		</div>
    <form action="" class="form-container">

        <label for="people-name" id="people-name">Full Name</label>
        <input type="text" class="inpt-name" name="people-name" id="people-name">

        <label for="job-title">Job Title</label>
        <input type="text" class="inpt-job"name="job-title" id="job-title">

        <label for="location">Location</label>
        <input type="text" class="inpt-location" name="location" id="location">

        <label for="wallet">Pay for hour</label>
        <input type="text" class="inpt-wallet" name="wallet" id="wallet">

    </form>

   

        <p>
             <a class="button add-card">Add card</a>
        </p>
        <p>
             <a class="button cancel">Cancel</a>
        </p>
   `;

   let addCard = document.querySelector(".add-card");

    let inptName = document.querySelector(".inpt-name");

    let inptJob = document.querySelector(".inpt-job");

    let inptLocation = document.querySelector(".inpt-location");

    let inptWallet = document.querySelector(".inpt-wallet");

    let cancel = document.querySelector(".cancel");


  

    cancel.addEventListener("click",()=>{
       attachHomePage();
    });
   

    addCard.addEventListener("click",()=>{
     
        errors =[];
        let person =  {
            name: inptName.value,
            job: inptJob.value,
            location: inptLocation.value,
            wallet:inptWallet.value
          };


          if(inptName.value!== "" && inptJob.value!==""&&inptLocation.value!==""&&inptWallet.value!=""){

            card.push(person);
            attachHomePage();
          }else{
          for(const property in person){

            if(person[property] === ""){
                errors.push(`${property}: missing`);
            }
          }
          attachErrors(errors);
        }

    
    });
}

function attachErrors(errors){

    let containerErrors = document.querySelector(".container-errors");

    let text =`<ul class="error"`
    errors.forEach(err=>{
        text +=`<li>${err}</li>`;
    });
    text +="</ul";

    containerErrors.innerHTML = text;

}

function attachUpdatePage(people){

   let container = document.querySelector(".container");
   
   container.innerHTML =`
   <h3 class="title">Update Card</h3>

   <form action="" class="form-container">

       <label for="people-name" id="people-name">Full Name</label>
       <input type="text" class="inpt-name" name="people-name" id="people-name" value="${people.name}">

       <label for="job-title">Job Title</label>
       <input type="text" class="inpt-job" name="job-title" id="job-title " value="${people.job}">

       <label for="location">Location</label>
       <input type="text" class="inpt-location" name="location" id="location" value="${people.location}">

       <label for="wallet">Pay for hour</label>
       <input type="text" name="wallet" class="inpt-wallet" id="wallet" value="${people.wallet}">
   </form>

   <section class="buttons-container">

       <p><button class="button update-card">Update Card</button></p>
       <p><button class="button cancel">Cancel</button></p>
       <p><button class="button delete-card">Delete Card</button></p>
   </section>
   `;

   let update = document.querySelector(".update-card");

   let inptName = document.querySelector(".inpt-name");

    let inptJob = document.querySelector(".inpt-job");

    let inptLocation = document.querySelector(".inpt-location");

    let inptWallet = document.querySelector(".inpt-wallet");
   update.addEventListener("click",()=>{

    let updateCard = {id:people.id,name:inptName.value,job:inptJob.value,location:inptLocation.value,wallet:inptWallet.value}

    card[people.id - 1] = updateCard;

    attachHomePage();

    

   })

}

