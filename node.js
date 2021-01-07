var cycle = 0; 

var allBackgrounds = [
                    "images/ollivanders.jpg",
                     "images/green.jpg",
                       "images/hogwarts.jpg",                      
                       "images/class.jpg",
                       "images/corridor.jpg",
                       "images/quidditch.jpg"
                       
                       
                       


                       
					    ]; 
 
setInterval(function() { 
	if (cycle < 6) { 
        
        document.getElementById("background").style.backgroundImage = "url('" + allBackgrounds[cycle] + "')"; 
		cycle += 1; 
	} else {  
		cycle = 0; 
    } 
    
    
}, 10000); 

//about me
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

