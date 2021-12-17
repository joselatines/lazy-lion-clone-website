let imgs = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png', 'img/6.png', 'img/7.png', 'img/8.png', 'img/9.png'];

// let imgsLoop = () => {
//     for (let i = 0; i < imgs.length; i++) {
//         setTimeout(() => {
//             document.getElementById('imgLoop').src = imgs[i];
//         }, 1500);
//     }
// }

let i = 0;
setInterval (()=> {
    document.getElementById('imgLoop').src = imgs[i];
    i++;
    if (i === imgs.length){
        return i = 0;
    }
    console.log(i)
}, 1000);


