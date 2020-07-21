const btnSubmit = document.querySelector(".btn-submit");
const form = document.querySelector("form");


const fields = document.querySelectorAll("[required]")


// for(field of fields){
//     field.addEventListener("invalid", event =>{
//         console.log("campo invalido")
//     })
// }
btnSubmit.addEventListener("click", event =>{
    event.preventDefault();

    const inputs = [...document.querySelectorAll(".input-block input")];

    inputs.forEach(input => {
        if(input.value === "") form.classList.add("validate-error");
    });
    const inputError = document.querySelector(".validate-error");
    if(inputError){
        inputError.addEventListener("animationend", event =>{
            if(event.animationName === "nono") {
                inputError.classList.remove("validate-error");
            }
        });
    }else{
        form.classList.add("form-hide");

    }
});

form.addEventListener("animationstart", event =>{
   if(event.animationName === "formDown") {
       document.querySelector("body").style.overflow = "hidden";
   }
});

form.addEventListener("animationend", event =>{
    if(event.animationName === "formDown"){
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none";    
    }  
});

//Square animation bg

const ulSquares = document.querySelector("ul.squares");
for (let i = 0; i < 11; i++){
    const li = document.createElement("li");
    const random = (min, max) => Math.random() * (max - min) + min;

    const size = Math.floor(random(10, 120));
    const position = random(1, 99);
    const delay = random(5, 0.1);
    const duration = random(24,12);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;
    li.style.left = `${position}%`;
    li.style.animationDelay = `${delay}s`;
    li.style.duration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
    ulSquares.appendChild(li);
}
