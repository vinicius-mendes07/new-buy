import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 13
const caminho = '../../../imagens/Tenis/Tenis-Amiri/amiri-'

createPhoto(maxImages, imageContainer, caminho)
