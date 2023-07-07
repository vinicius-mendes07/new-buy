import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 21
const caminho = '../../../imagens/Tenis/Tenis-versace/versace-'

createPhoto(maxImages, imageContainer, caminho)
