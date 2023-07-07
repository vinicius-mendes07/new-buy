import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 71
const caminho = '../../../imagens/Calcas-e-Shorts-Amiri/amiri-'

createPhoto(maxImages, imageContainer, caminho)
