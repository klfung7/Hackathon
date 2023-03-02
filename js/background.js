

document.addEventListener('DOMContentLoaded', function() {
    // on click event
    // go back into body and change style of background to the random image
    const button = document.querySelector("button");
    button.addEventListener("click", function() {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); 
        }
    
        let num = getRandomInt(1, 20);
    
        let img = document.createElement('img');
        img.src = `images/puppy/puppy${num}.jpeg`;
        img.style.width = '300px';
        img.style.height = '300px';
        document.body.appendChild(img);
        document.body.setAttribute('style', `background: ${img}`);
        
    })
})

