var i =0; 

var images=[];
var time=3000;
//image list
images[0]="pc.jpg";
images[1]="pc1.jpg";
images[2]="pc2.jpg";
images[3]="pc3.jpg";
images[4]="pc4.jpg";

//change image
function chaneImg(){
    document.slide.src=image[i];
    if(i<images.length-1){
        i++;

    }else{
        i=0;
    }
    setTimeout("changeImg()",time);

}

window.onload=changeImg;



