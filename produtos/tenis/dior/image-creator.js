import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 29
const caminho = '../../../imagens/Tenis/Tenis-Dior/dior-'

createPhoto(maxImages, imageContainer, caminho)
