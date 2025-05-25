function changeBg() {
    const selected = document.getElementById('bgSelect').value ;
    document.body.style.backgroundImage = `url('${selected}')` ;

}