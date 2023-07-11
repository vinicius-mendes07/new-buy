import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 25
const caminho = '../../../imagens/Tenis/Tenis-Jordan-4/jordan-4-'

createPhoto(maxImages, imageContainer, caminho)
