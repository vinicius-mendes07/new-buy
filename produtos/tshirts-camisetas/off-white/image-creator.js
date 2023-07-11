import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 52
const caminho = '../../../imagens/Camisas/Camisas-Off-White/off-white-'

createPhoto(maxImages, imageContainer, caminho)
