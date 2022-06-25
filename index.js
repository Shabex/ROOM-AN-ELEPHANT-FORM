
document.addEventListener("DOMContentLoaded",() => {
    
    function getElephants() {

        fetch('https://reliable-picturesque-bowler.glitch.me/db.json')
        .then(res=>res.json())
        .then(data => {
            console.log (data)
             elephantSpecies(data.Elephants);
        }) 

    }

    getElephants();

    function elephantSpecies(data){
        const newElephant = [...data.slice(5,20)]
        newElephant.forEach (elephant => {
            
        const elephantList = document.getElementById("elephant-list")
        const list = document.createElement("li")
        list.innerHTML = elephant.name;
          elephantList.appendChild(list)

          list.addEventListener('click', () => {
            const elephantImage = document.getElementById("elephant-image").src=elephant.image
            console.log(elephantImage)

            const elephantName = document.getElementById("elephant-name")
            elephantName.textContent = elephant.name;

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

          var likeButton = document.getElementById("btn")
          function toggle() {
              if (likeButton.style.color == "red") {
                  likeButton.style.color = "blue"
              } else {
                  likeButton.style.color = "red"
              }
          }

        })




        const feedbackForm = document.getElementById('feedback-form')
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault()
            alert("Thank you for your feedback. Click 'OK'")
            
            
            const feedbackList = document.getElementById ("feedback-list")

            const volunteerFeeback = document.getElementById("feeder").value
            const newFeedback = document.createElement('li')
            newFeedback.style.cursor = 'pointer'
            newFeedback.innerText = volunteerFeeback
            feedbackList.appendChild(newFeedback)
            feedbackForm.reset()
            newFeedback.addEventListener('click', (e) => {
                e.preventDefault()
                newFeedback.remove()
            })
            
        })
  
    }


})

  

