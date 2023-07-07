import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 106
const caminho = '../../../imagens/Tenis/Tenis-LV/louis-vuitton-'

createPhoto(maxImages, imageContainer, caminho)
