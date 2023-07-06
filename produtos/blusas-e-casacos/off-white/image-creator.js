import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 38
const caminho = '../../../imagens/Blusas-e-casacos/Blusas-e-casacos-Off-white/off-white-'

createPhoto(maxImages, imageContainer, caminho)
