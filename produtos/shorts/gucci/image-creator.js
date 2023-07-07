import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 21
const caminho = '../../../imagens/Shorts/Shorts-Gucci/gucci-'

createPhoto(maxImages, imageContainer, caminho)
