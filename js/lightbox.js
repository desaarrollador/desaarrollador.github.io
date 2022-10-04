const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLiht = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-ligth')
const hamburger1 = document.querySelector('.hamburguer');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e) => {
    if (e.target !== imagenesLiht) {
        contenedorLight.classList.toggle('show')
        imagenesLiht.classList.toggle('showImage')
        hamburger1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen) => {
    imagenesLiht.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLiht.classList.toggle('showImage')
    hamburger1.style.opacity = '0'
}

