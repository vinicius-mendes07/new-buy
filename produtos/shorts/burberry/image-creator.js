import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 19
const caminho = '../../../imagens/Shorts/Shorts-Burberry/burberry-'

createPhoto(maxImages, imageContainer, caminho)
