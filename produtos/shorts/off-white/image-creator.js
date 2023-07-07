import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 17
const caminho = '../../../imagens/Shorts/Shorts-Off-white/off-white-'

createPhoto(maxImages, imageContainer, caminho)
