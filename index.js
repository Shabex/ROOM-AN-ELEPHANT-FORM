
document.addEventListener("DOMContentLoaded",() => {
    
    function getElephants() {

        fetch('http://localhost:3000/Elephants')
        .then(res=>res.json())
        .then(data => {
             elephantSpecies(data.slice(7,14));
        }) 

    }

    getElephants();

    function elephantSpecies(data){
        data.forEach (elephant => {
            
        const elephantList = document.getElementById("elephant-list")
        const list = document.createElement("li")
        list.innerHTML = elephant.name;
          elephantList.appendChild(list)

          list.addEventListener('click', () => {
            const elephantImage = document.getElementById("elephant-image").src=elephant.image
            console.log(elephantImage)

            const elephantSex = document.getElementById("sex")
            elephantSex.textContent = elephant.sex

            const elephantSpecies = document.getElementById("species")
            elephantSpecies.textContent = elephant.species

            const elephantAffiliation = document.getElementById("affiliation")
            elephantAffiliation.textContent = elephant.affiliation

            const elephantDOB = document.getElementById("dob")
            elephantDOB.textContent = elephant.dob

            const elephantNote = document.getElementById("note")
            elephantNote.textContent = elephant.note




          })

        })
  
    }


})

  

