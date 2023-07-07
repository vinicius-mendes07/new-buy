import { createPhoto } from "../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 130
const caminho = '../../imagens/Relogios/relogios-'

createPhoto(maxImages, imageContainer, caminho)
