import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 14
const caminho = '../../../imagens/Tenis/Tenis-Prada/prada-'

createPhoto(maxImages, imageContainer, caminho)
