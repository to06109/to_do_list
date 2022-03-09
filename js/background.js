const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']

const chosenImage = images[Math.round(Math.random() * images.length)]

const bgImage = document.createElement('img')

console.log(chosenImage)
bgImage.src = `img/${chosenImage}`
bgImage.alt = 'background images'
bgImage.classList.add('bgimg')

//html에 요소 추가
document.body.appendChild(bgImage)
