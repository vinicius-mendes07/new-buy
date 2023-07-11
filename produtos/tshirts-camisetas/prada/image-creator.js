import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 27
const caminho = '../../../imagens/Camisas/Camisas-Prada/prada-'

createPhoto(maxImages, imageContainer, caminho)
