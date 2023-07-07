import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 44
const caminho = '../../../imagens/Camisas/Camisas-dior/dior-'

createPhoto(maxImages, imageContainer, caminho)
