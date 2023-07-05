import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 21
const caminho = '../../../imagens/Blusas-e-casacos/Blusas-e-casacos-Burberry/burberry-'

createPhoto(maxImages, imageContainer, caminho)
