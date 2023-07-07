import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 38
const caminho = '../../../imagens/Camisas/Camisas-Gucci/gucci-'

createPhoto(maxImages, imageContainer, caminho)
