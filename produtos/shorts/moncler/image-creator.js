import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 5
const caminho = '../../../imagens/Shorts/Shorts-Moncler/moncler-'

createPhoto(maxImages, imageContainer, caminho)
