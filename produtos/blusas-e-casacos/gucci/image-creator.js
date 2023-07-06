import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 51
const caminho = '../../../imagens/Blusas-e-casacos/Blusas-e-casacos-Gucci/gucci-'

createPhoto(maxImages, imageContainer, caminho)
