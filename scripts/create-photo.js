export function createPhoto(maxImages, imageContainer, caminho) {   
    for (let i = 1; i <= maxImages; i++) {
        const img = document.createElement("img");
    
        img.style = `
            width: 250px;
            height: 300px;
            cursor: pointer;
            // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

            transition: 0.5s;
        `

        img.addEventListener('mouseover', () => {
            img.style.transform ='scale(1.1)'
            img.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
        })
        
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)'
            img.style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
        })

        
        img.src = caminho + i + ".jpg"; // Substitua pelo caminho correto para a pasta e a extensão das imagens
        img.addEventListener('click', () => expandImage(img.src))
        imageContainer.appendChild(img);
    }
}

function expandImage(imageUrl) {
    const body = document.querySelector('body')
    const imageContainer = document.createElement('div')
    const image = document.createElement('img')
    const closeBtn = document.createElement('div')
    const x1 = document.createElement('div')
    const x2 = document.createElement('div')

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



    imageContainer.appendChild(image)
    imageContainer.appendChild(closeBtn)
    image.src = imageUrl

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
        width: 450px;
    `

    var mediaQueryList = window.matchMedia('(max-width: 500px)');

    function screenSize(e) {
        if (e.matches) {
            image.style = `
                width: 90%;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            `
        } else {
            image.style = `
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
        background-color: rgba(0, 0, 0, 0.7);

        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
        padding: 10px;
    `

    closeBtn.addEventListener('click', ()=> {
        body.removeChild(imageContainer)
    })

    body.appendChild(imageContainer)
}