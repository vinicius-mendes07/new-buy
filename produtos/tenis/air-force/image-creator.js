import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 56
const caminho = '../../../imagens/Tenis/Tenis-Air-Force/air-force-'

createPhoto(maxImages, imageContainer, caminho)
