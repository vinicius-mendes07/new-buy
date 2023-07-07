import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 28
const caminho = '../../../imagens/Shorts/Shorts-LV/louis-vuitton-'

createPhoto(maxImages, imageContainer, caminho)
