const form = document.querySelector("form");
const sectionTask = document.querySelector("section");
const input = document.getElementById("input");
const deleteds = document.querySelectorAll(".icon-trash");

// this for add prodact
form.addEventListener("submit",(eo)=> {
    eo.preventDefault();
   if (input.value == "") {
    window.alert("Write any thing");
} else {
    const addProudact = `
         <div class="task">
            <span class="icon-star-o icon"></span>

            <p class="tast-text">${input.value}</p>
            <div>
                <span class="icon-trash icon"></span>    
                <span class="icon-angry icon"></span>
                <span class="icon-heart icon dispaly"></span>
            </div>
        </div>
    `;
    sectionTask.innerHTML += addProudact;
    input.value = '';
    }
});

sectionTask.addEventListener("click",(eo)=> {
    if(eo.target.className == "icon-trash icon"){
        eo.target.parentElement.parentElement.remove()
    } else if(eo.target.className == "icon-angry icon"){
        eo.target.parentElement.parentElement.getElementsByTagName("p")[0].classList.add("actionE");
        eo.target.parentElement.getElementsByClassName("icon-angry")[0].classList.add("dispaly");
        eo.target.parentElement.getElementsByClassName("icon-heart")[0].classList.remove("dispaly")
    } else if(eo.target.className == "icon-heart icon"){
        eo.target.parentElement.getElementsByClassName("icon-angry")[0].classList.remove("dispaly");
        eo.target.parentElement.getElementsByClassName("icon-heart")[0].classList.add("dispaly");
        eo.target.parentElement.parentElement.getElementsByTagName("p")[0].classList.remove("actionE");
    } else if(eo.target.className == "icon-star-o icon"){
        sectionTask.prepend(eo.target.parentElement);
        eo.target.parentElement.parentElement.getElementsByClassName("icon-star-o icon")[0].classList.add("activeButton");
    } else if(eo.target.className == "icon-star-o icon activeButton"){
        sectionTask.append(eo.target.parentElement);
        eo.target.parentElement.parentElement.getElementsByClassName("icon-star-o icon activeButton")[0].classList.remove("activeButton");
    }

})