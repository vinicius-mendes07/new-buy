import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 33
const caminho = '../../../imagens/Tenis/Tenis-Nike-Off-white/nike-off-white-'

createPhoto(maxImages, imageContainer, caminho)
