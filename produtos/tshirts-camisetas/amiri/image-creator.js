import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 39
const caminho = '../../../imagens/Camisas/Camisas-amiri/amiri-'

createPhoto(maxImages, imageContainer, caminho)
