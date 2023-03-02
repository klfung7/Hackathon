document.addEventListener('DOMContentLoaded', function() {
    // on click event
    // go back into body and change style of background to the random image

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
    }

    let num = this.getRandomInt(1, 20);

    let img = document.createElement('img');
    img.src = `hackathon/images/puppy${num}.jpeg`;
    document.body.appendChild(img);
    document.body.setAttribute('style', 'background', `${img}`);
    document.querySelector('body').style.display = 'block';
})

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); 
// }
  

  