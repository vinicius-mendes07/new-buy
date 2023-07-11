import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 27
const caminho = '../../../imagens/Shorts/Shorts-amiri/amiri-'

createPhoto(maxImages, imageContainer, caminho)
