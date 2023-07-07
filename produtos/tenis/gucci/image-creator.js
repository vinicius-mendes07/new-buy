import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 53
const caminho = '../../../imagens/Tenis/Tenis-Gucci/gucci-'

createPhoto(maxImages, imageContainer, caminho)
