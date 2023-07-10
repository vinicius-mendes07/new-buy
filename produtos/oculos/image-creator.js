import { createPhoto } from "../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 62
const caminho = '../../imagens/Oculos/oculos-'

createPhoto(maxImages, imageContainer, caminho)
