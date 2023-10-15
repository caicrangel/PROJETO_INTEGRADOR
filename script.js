let count =1;
document.getElementsById("radio1").checked = true;

setInterval(function(){
},2000)


function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementsById("radio"+count).checked = true;
}
