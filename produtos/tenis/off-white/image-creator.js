import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 40
const caminho = '../../../imagens/Tenis/Tenis-Off-white/off-white-'

createPhoto(maxImages, imageContainer, caminho)
