console.log("my new extention is fired")

const images = document.querySelectorAll('img');

console.log(images,"images")

images.forEach((image)=>{
    image.src = 'https://img.wataninet.com/2022/01/1642583314553blob-650x375.png'
})