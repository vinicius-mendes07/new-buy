import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 32
const caminho = '../../../imagens/Camisas/Camisas-Palm-Angels/palm-angels-'

createPhoto(maxImages, imageContainer, caminho)
