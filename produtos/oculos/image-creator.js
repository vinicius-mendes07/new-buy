import { createPhoto } from "../../scripts/create-photo.js"

const imageContainer = document.getElementById('image-container')
const maxImages = 62
const caminho = '../../imagens/Oculos/oculos-'
const caminhoMarcaDagua = '../../imagens/newbuy-white-logo-2.png'

createPhoto(maxImages, imageContainer, caminho, caminhoMarcaDagua)
