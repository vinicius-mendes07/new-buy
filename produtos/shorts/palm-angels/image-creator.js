import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 4
const caminho = '../../../imagens/Shorts/Shorts-Palm-angels/palm-angels-'

createPhoto(maxImages, imageContainer, caminho)
