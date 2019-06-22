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
    let banner1img =document.querySelectorAll('.dnf');
    let current = 0, next = 0;
    let bRight = document.querySelector('.bRight');
    let bLeft = document.querySelector('.bLeft');
    let midImg = document.querySelectorAll('.midImg>li');
    // let bBottom = document.querySelector('.bBottom');
    let w = midImg[0].offsetWidth;
    let flag = true;
    console.log(bRight);
    console.log(bLeft);
    bRight.onclick = function () {
        index++;
        if (index == midImg.length) {
            index = 0;
        }
        midImg.forEach(function (ele) {
            ele.style.zIndex = 1;
        });
        // Array.prototype.forEach.call(bBottom,function (elem) {
        //     elem.classList.remove('hot');
        // });
        // bBottom[index].classList.add('hot');
        midImg[index].style.zIndex = 100;
    }
    bLeft.onclick = function () {
        index--;
        if (index < 0) {
            index = midImg.length - 1;
        }
        midImg.forEach(function (ele) {
            ele.style.zIndex = 1;
        });
        midImg[index].style.zIndex = 100;
    };


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

    midImg.onmouseenter =function () {
        clearInterval(t);
        bBottom[0].style.opacity=1;
        bLeft[0].style.opacity=1;
        bRight[0].style.opacity=1;
    };
    midImg.onmouseleave=function () {
        t =setInterval(rightbtn[0].onclick,3000);
        bBottom[0].style.opacity=0;
        bLeft[0].style.opacity=0;
        bRight[0].style.opacity=0;
    };


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
    };




    bRight.onclick=function(){
        if(!flag){
            return ;
        }
        flag=false;
        next++;
        if(next == banner1img.length){
            next=0;
        }
        banner1img[next].style.left=w+'px';
        animate(banner1img[current],{left:-w});
        animate(banner1img[next],{left:0},function () {
            flag =true;
            return flag;
        });
        current = next;
        Array.prototype.forEach.call(bannerPointer,function (ele) {
            ele.classList.remove('hot')
        });
        // bannerPointer[current].classList.add('hot');
        // banner1img.forEach(function (ele) {
        //     ele.style.opacity=0.3;
        // });
        // banner1img[current].style.opacity= 1;
        return false;
    };
    bLeft.onclick=function(){
        if(!flag){
            return ;
        }
        flag=false;
        next--;
        if(next < 0){
            next=banner1img.length-1;
        }
        banner1img[next].style.left=-w+'px';
        animate(banner1img[current],{left:w});
        animate(banner1img[next],{left:0},function () {
            flag =true;
            return flag;
        });
        current = next;
        Array.prototype.forEach.call(bannerPointer,function (ele) {
            ele.classList.remove('hot')
        });
        // bannerPointer[current].classList.add('hot');
        // banner1img.forEach(function (ele) {
        //     ele.style.opacity=0.3;
        // });
        // banner1img[current].style.opacity= 1;
        return false;
    };




    //按需加载图片
    //滚动的高度+窗口的高度  >=  图片距离文档的高度
    //img.src=img.aa
    // let viewH = window.innerHight;
    // let imgs = document.querySelectorAll('.lazyLoad');
    // let positionArr = [];
    // imgs.forEach(function (ele) {
    //     let parent = ele.offsetParent;
    //     positionArr.push(parent.offsetTop + ele.offsetTop)
    // });
    //
    //  window.onscroll = function () {
    //      let scrolltop = document.documentElement.scrollTop;
    //      for (let i =0; i<positions.length;i++){
    //          if(scrolltop + viewH >=positions[i]+50){
    //              if(!imgs[i].src){
    //                  imgs[i].src = imgs[i].getAttribute('aa');
    //              }
    //          }
    //      }
    //  }
};

