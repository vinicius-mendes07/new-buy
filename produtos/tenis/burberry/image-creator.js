import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 12
const caminho = '../../../imagens/Tenis/Tenis-Burberry/burberry-'

createPhoto(maxImages, imageContainer, caminho)
