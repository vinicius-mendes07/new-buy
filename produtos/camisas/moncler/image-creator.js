import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 22
const caminho = '../../../imagens/Camisas/Camisas-Moncler/moncler-'

createPhoto(maxImages, imageContainer, caminho)
