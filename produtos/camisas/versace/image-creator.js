import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 24
const caminho = '../../../imagens/Camisas/Camisas-Versace/versace-'

createPhoto(maxImages, imageContainer, caminho)
