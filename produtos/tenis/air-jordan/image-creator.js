import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 25
const caminho = '../../../imagens/Tenis/Tenis-Air-Jordan/air-jordan-'

createPhoto(maxImages, imageContainer, caminho)
