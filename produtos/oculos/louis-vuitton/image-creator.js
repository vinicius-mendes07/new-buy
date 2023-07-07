import { createPhoto } from "../../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 22
const caminho = '../../../imagens/Oculos/Oculos-Lv/louis-vuitton-'

createPhoto(maxImages, imageContainer, caminho)
