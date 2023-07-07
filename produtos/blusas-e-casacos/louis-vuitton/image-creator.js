import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 46
const caminho = '../../../imagens/Blusas-e-casacos/Blusas-e-Casacos-LV/louis-vuitton-'

createPhoto(maxImages, imageContainer, caminho)
