const textInput = document.getElementById('textInput')
const changeButton = document.getElementById('changeButton')

changeButton.addEventListener('click', function(){
    changeButton.textContent = textInput.value || "Change Text"
})

const image = document.querySelector('.image');

image.addEventListener('click', function(){
    image.src = './plane2.jpeg'
})

const link = document.querySelector('.link');

link.href = 'https://www.tissotwatches.com/en-gb?msclkid=f7eb5b9029651792677e33ecc30c9a7f&utm_source=bing&utm_medium=cpc&utm_campaign=IKOM%20-%20UK(EN)%20-%20BRANDING%20-%20Exact&utm_term=tissot&utm_content=All'

const myImage = document.querySelector('.watch');

myImage.setAttribute('alt', 'VeryCoolWatch')

const list = document.querySelector(".list");

list.firstElementChild.textContent = "Tissot"