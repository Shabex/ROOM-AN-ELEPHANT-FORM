
document.addEventListener('DOMContentLoaded',() => {
    
    function getElephant() {

        fetch('https://elephant-api.herokuapp.com/elephants')
        .then(res=>res/json())
        .then(data => {
            return elephantSpecies(data);
        }) 

    }

    getElephant();

  function elephantSpecies(elephants){
      elephants.forEach(elephant => {
          const barNav = document.getElementById('elephant-list')
          const list = document.createElement('li')

          list.textContent = `${elephant.name}`
          barNav.appendeChild(list)
      })
           
      }
  
})
