window.onload = function () {
    let home = document.getElementById('home');
    let bBottom = document.getElementsByClassName('bBottom');
    let bannerPointer = bBottom[0].getElementsByTagName('li');
    let activeColor = '#00bfb8', disactiveColor = '#d8dcdd';
    /*
    谁        什么时候          干什么
    事件源     事件类型          事件处理函数
     */

    /*
    博客/圆圈圈变色
     */
    home.onmouseenter = function () {
        home.style.color = '#fff143'
        // console.log(home.style);
    };
    home.onmouseleave = function () {
        home.style.color = '#d8dcdd';
    };
    for (var i = 0; i < bannerPointer.length; i++) {
        bannerPointer[i].onmouseenter = function () {
            this.style.backgroundColor = activeColor
        };
        bannerPointer[i].onmouseleave = function () {
            this.style.backgroundColor = disactiveColor
        };
    }

    /*
    下划线
     */
    let navigation = document.getElementsByClassName('navigation')[0];
    let listA = navigation.getElementsByTagName('h2');

    for (let i = 0; i < listA.length; i++) {
        listA[i].onclick = function () {
            for (let j = 0; j < listA.length; j++) {
                listA[j].style.borderBottom = 'none'
            }
            this.style.borderBottom = '2px solid #000';
        }
    }
    /*
    轮播图
     */
    let current = 0, next = 0;
    let bRight = document.querySelector('.bRight');
    let bLeft = document.querySelector('.bLeft');
    let midImg = document.querySelectorAll('.midImg>li');
    // let bBottom = document.querySelector('.bBottom');
    let w = midImg[0].offsetWidth;
    // bRight.onclick = function () {
    //     index++;
    //     if (index == midImg.length) {
    //         index = 0;
    //     }
    //     midImg.forEach(function (ele) {
    //         ele.style.zIndex = 1;
    //     });
    //     // Array.prototype.forEach.call(bBottom,function (elem) {
    //     //     elem.classList.remove('hot');
    //     // });
    //     // bBottom[index].classList.add('hot');
    //     midImg[index].style.zIndex = 100;
    // }
    // bLeft.onclick = function () {
    //     index--;
    //     if (index < 0) {
    //         index = midImg.length - 1;
    //     }
    //     midImg.forEach(function (ele) {
    //         ele.style.zIndex = 1;
    //     });
    //     midImg[index].style.zIndex = 100;
    // };
    //

    bRight.onclick = function () {
        next++;
        if (next == midImg.length) {
            next = 0;
        }
        midImg[next].style.left = w+'px';
        bannerPointer[current].classList.remove('hot');
        bannerPointer[next].classList.add('hot');
        animate(midImg[current],{left:-w});
        animate(midImg[next],{left: 0});
        current = next;
    }
    bLeft.onclick = function () {
        next--;
        if (next <0) {
            next = midImg.length - 1;
        }
        midImg[next].style.left = -w+'px';
        bannerPointer[current].classList.remove('hot');
        bannerPointer[next].classList.add('hot');
        animate(midImg[current],{left:w});
        animate(midImg[next],{left: 0});
        current = next;
    }


    let t = setInterval(bRight.onclick, 3000);

    for(let i=0;i<bannerPointer.length;i++){
        bannerPointer[i].onclick = function () {
            if(next === i){
                return;
            }
            next = i;
            midImg[next].style.left = w+'px';
            animate(midImg[current],{left:-w});
            animate(midImg[next],{left: 0});

        }
        bannerPointer[current].classList.remove('hot');
        bannerPointer[next].classList.add('hot');
        current = next;
    }


    let viewH = window.innerHight;
    let imgs = document.querySelectorAll('.lazyLoad');
    let positionArr = [];
    imgs.forEach(function (ele) {
        let parent = ele.offsetParent;
        positionArr.push(parent.offsetTop + ele.offsetTop)
    });

     window.onscroll = function () {
         let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
         for(let i=0;i<positionArr.length;i++){
             if(scrolltop + viewH >=positionArr[i] ){
                 if (!imgs[i].src) {
                     imgs[i].src = imgs[i].getAttribute('aa');
                 }
             }
         }
     }
}

