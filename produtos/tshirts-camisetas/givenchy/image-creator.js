import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 25
const caminho = '../../../imagens/Camisas/Camisas-givenchy/givenchy-'

createPhoto(maxImages, imageContainer, caminho)
