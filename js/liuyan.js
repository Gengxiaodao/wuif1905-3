window.onload = function () {
    let touxiang = document.querySelectorAll('.touxiang');
    let op = 0;
    for (i = 0; i < touxiang.length; i++) {
        touxiang[i].onclick = function () {
            touxiang[op].style.opacity = '0.7';
            this.style.opacity = '1'
        }
        op = i;
    }
    // touxiang.addEventListener('click', fn);
    //
    // function fn() {
    //     if (flag) {
    //         this.style.opacity = '1'
    //     } else {
    //         this.style.opacity = '0.7'
    //     }
    // }
}