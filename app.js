const pictures = document.querySelectorAll('.pic')

for (const picture of pictures) {
    picture.addEventListener('click', () => {
        clearActiveClasses()
        picture.classList.add('active')
    })
}

function clearActiveClasses() {
    pictures.forEach((picture) => {
        picture.classList.remove('active')
    })
}