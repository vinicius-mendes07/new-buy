import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 11
const caminho = '../../../imagens/Tenis/Tenis-valentino/valentino-'

createPhoto(maxImages, imageContainer, caminho)
