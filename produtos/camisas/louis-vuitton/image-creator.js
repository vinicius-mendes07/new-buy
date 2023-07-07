import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 43
const caminho = '../../../imagens/Camisas/Camisas-LV/louis-vuitton-'

createPhoto(maxImages, imageContainer, caminho)
