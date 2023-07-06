import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 18
const caminho = '../../../imagens/Blusas-e-casacos/Blusas-e-casacos-Prada/prada-'

createPhoto(maxImages, imageContainer, caminho)
