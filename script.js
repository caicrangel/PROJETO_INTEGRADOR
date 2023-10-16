
let count = 1;

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

document.getElementById("radio1").checked = true;

setInterval(nextImage, 3000); // Mudei o intervalo para 3000ms (3 segundos)

/*Codigo Raquel avançando com clic*/

// let count =1;
// document.getElementsById("radio1").checked = true;

// setInterval(function(){
// },2000)


// function nextImage(){
//     count++;
//     if(count>4){
//         count = 1;
//     }

//     document.getElementsById("radio"+count).checked = true;
// }
