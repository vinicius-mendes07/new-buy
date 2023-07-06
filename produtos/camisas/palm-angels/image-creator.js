import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 15
const caminho = '../../../imagens/Blusas-e-casacos/Blusas-e-casacos-Palm-angels/palm-angels-'

createPhoto(maxImages, imageContainer, caminho)
