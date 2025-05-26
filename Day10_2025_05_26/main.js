const images = [
    "img/anh1.jpg" ,
    "img/anh2.jpg" ,
    "img/anh3.jpg"
] ;

let currentIndex = 0 ;
const imgElement = document.getElementsByClassName("slideshow")[0] ; 
function showImage(index) {
    imgElement.src = images[index] ;

}

function pre_img() {
    // do có 3 ảnh ,  nếu đang ở ảnh số 2 thì (2-1+3) % 3 = 4%3 = 1 = ? quay về ảnh 1 
    // nếu ảnh đang ở số 0 thì (0-1+3) % 3 = 2%3 = 2 = > suy về ảnh cuối cùng 
    currentIndex = (currentIndex - 1 + images.length) % images.length ;
    showImage(currentIndex) ; 
}

function next_img() {

    // ví ụ ảnh ở vị trí đầu tiên thì : (0+1)%3 = 1 = > suy đến ảnh 1 
    // ....
    currentIndex = (currentIndex + 1 ) % images.length ;
    showImage(currentIndex);
}

showImage(currentIndex);