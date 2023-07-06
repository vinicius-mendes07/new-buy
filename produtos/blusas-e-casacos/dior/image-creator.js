import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 41
const caminho = '../../../imagens/Blusas-e-casacos/Blusas-e-casacos-Dior/dior-'

createPhoto(maxImages, imageContainer, caminho)
