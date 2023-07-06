import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 19
const caminho = '../../../imagens/Blusas-e-casacos/Blusas-e-casacos-versace/versace-'

createPhoto(maxImages, imageContainer, caminho)
