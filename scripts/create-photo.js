export function createPhoto(maxImages, imageContainer, caminho, caminhoMarcaDagua = '../../../imagens/newbuy-white-logo-2.png') {   
    for (let i = 1; i <= maxImages; i++) {
        const imageWrapper = document.createElement("div")
        const img = document.createElement("img");
        const marcaDagua = document.createElement("img")
        marcaDagua.src = caminhoMarcaDagua
        imageWrapper.appendChild(img)
        imageWrapper.appendChild(marcaDagua)

        imageWrapper.style = `
            position: relative;
            transition: 0.5s;
            cursor: pointer;
        `
        
        marcaDagua.style = `
            position: absolute;
            width: 100px;
            right: 10px;
            bottom: 15px;
            z-index: 0;
            opacity: 0.5;
        `
    
        img.style = `
            width: 250px;
            height: 300px;
            padding: 0;
            margin:0;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            transition: 0.5s;
        `

        img.addEventListener('mouseover', () => {
            imageWrapper.style.transform ='scale(1.1)'
            img.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'

        })
        
        img.addEventListener('mouseout', () => {
            imageWrapper.style.transform = 'scale(1)'
            img.style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
        })

        
        img.src = caminho + i + ".jpg";
        img.loading = "lazy"
        img.addEventListener('click', () => expandImage(img.src, marcaDagua.src))
        imageContainer.appendChild(imageWrapper);
    }
}

function expandImage(imageUrl, caminhoMarcaDagua) {
    const body = document.querySelector('body')
    const imageContainer = document.createElement('div')
    const image = document.createElement('img')
    const marcaDagua = document.createElement('img')
    const closeBtn = document.createElement('div')
    const x1 = document.createElement('div')
    const x2 = document.createElement('div')
    const imageWrapper = document.createElement('div')
    const whatsappBtn = document.createElement('a')
    
    image.src = imageUrl

    whatsappBtn.textContent = 'Tenho interesse'
    whatsappBtn.target = "_blank"
    whatsappBtn.href = `https://api.whatsapp.com/send?phone=553172348460&text=${encodeURIComponent( 'Olá! Eu vi esse produto no seu catálogo e tenho interesse, gostaria de saber mais informações! \n\nAqui está uma prévia:\n ' + image.src)}`

    whatsappBtn.style = `
        font-family: Helvetica, sans-serif;
        font-size: 16px;
        color: #fff;
        background-color: #25d366;
        padding: 10px;
        text-transform: uppercase;
        border-radius: 8px;
        font-weight: 500;
    `

    marcaDagua.src = caminhoMarcaDagua

    imageWrapper.appendChild(image)
    imageWrapper.appendChild(marcaDagua)

    marcaDagua.style = `
        position: absolute;
        width: 100px;
        right: 10px;
        bottom: 15px;
        z-index: 0;
        opacity: 0.5;
    `

    x1.style = `
        width: 100%;
        height: 3px;
        background-color: #dbdbdb;
        transform-origin: 0% 0%;
        transform: rotate(45deg) scaleX(1.25);
    `
    x2.style = `
        width: 100%;
        height: 3px;
        background-color: #dbdbdb;
        transform-origin: 0% 100%;
        transform: rotate(-45deg) scaleX(1.25);
    `

    closeBtn.appendChild(x1)
    closeBtn.appendChild(x2)


    imageContainer.appendChild(imageWrapper)
    imageContainer.appendChild(whatsappBtn)
    imageContainer.appendChild(closeBtn)

    closeBtn.style = `
        position: fixed;
        top: 2rem;
        right: 2rem;

        width: 24px;
        height: 24px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        `

    image.style = `
        width: 100%;
    `
        
    var mediaQueryList = window.matchMedia('(max-width: 500px)');

    function screenSize(e) {
        if (e.matches) {
            imageWrapper.style = `
                position: relative;
                width: 90%;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            `
        } else {
            imageWrapper.style = `
                position: relative;
                width: 400px;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            `
        }
    }

    screenSize(mediaQueryList)
    mediaQueryList.addEventListener('change', screenSize);


    imageContainer.style = `
        position: fixed;
        top: 0;
        left: 0;

        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.95);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        z-index: 999;
        padding: 10px;
    `

    closeBtn.addEventListener('click', ()=> {
        body.removeChild(imageContainer)
        body.style.overflow = 'visible'
    })

    body.style.overflow = 'hidden'

    body.appendChild(imageContainer)
}