const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const closeModal = document.querySelector('.close-modal');

for(let card of cards) {
  card.addEventListener('click', function() { 
    const video_id = card.getAttribute('id')  
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('iframe').src = `https://youtube.com/embed/${video_id}`
  })
}

closeModal.addEventListener('click', function() {
  modalOverlay.querySelector('iframe').src = ""
  modalOverlay.classList.remove('active')
})
