import { createPhoto } from "../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 36
const caminho = '../../imagens/Blusas-e-casacos/Blusas-e-casacos-Amiri/amiri-'

createPhoto(maxImages, imageContainer, caminho)
