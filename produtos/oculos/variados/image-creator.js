import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 40
const caminho = '../../../imagens/Oculos/Oculos-variados/variados-'

createPhoto(maxImages, imageContainer, caminho)
