import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 19
const caminho = '../../../imagens/Shorts/Shorts-givenchy/givenchy-'

createPhoto(maxImages, imageContainer, caminho)
