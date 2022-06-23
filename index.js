
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

          })

        })
  
    }


    // fetch('https://flame-somber-crepe.glitch.me/db.json')
    //     .then(res=>res.json())
    //     // .then(data => {
    //     //     return elephantSpecies(data.Elephants);
    //     .then(elephantSpecies)


    //     function elephantSpecies(elephants)
    //     elephants.forEach(elephant => {
            
    //     });(elephant => {

    //         const barNav = document.getElementById("elephant-list")
    //         const list = document.createElement("list")

    //         list.innerText = elephant.name;
    //         barNav.appendChild(list)
    //     })

})

  

