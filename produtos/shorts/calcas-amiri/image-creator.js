import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 44
const caminho = '../../../imagens/Shorts/Calcas-amiri/amiri-'

createPhoto(maxImages, imageContainer, caminho)
