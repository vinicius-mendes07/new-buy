import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 30
const caminho = '../../../imagens/Camisas/Camisas-Burberry/burberry-'

createPhoto(maxImages, imageContainer, caminho)
