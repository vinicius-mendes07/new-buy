import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 20
const caminho = '../../../imagens/Shorts/Shorts-Prada/prada-'

createPhoto(maxImages, imageContainer, caminho)
