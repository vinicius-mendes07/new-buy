import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 23
const caminho = '../../../imagens/Blusas-e-casacos/Blusas-e-casacos-balenciaga/balenciaga-'

createPhoto(maxImages, imageContainer, caminho)
