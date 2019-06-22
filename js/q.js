window.onload=function () {
    let home =document.getElementById('home');
    home.onmouseenter = function () {
        home.style.color='#ffd8ff';

    };
    home.onmouseleave = function () {
        home.style.color='#403e3b';

    };
    let uljs =document.getElementsByClassName('uljs');
    let ulpoint = uljs[0].getElementsByTagName('li');
    for(let i =0;i<ulpoint.length;i++){
        // ulpoint[i].onmouseenter = function () {
        //     this.style.background='#ffa8cf';
        //
        //  };//onmouseover
        // ulpoint[i].onmouseleave = function () {
        //      this.style.background='#ffd8ff';//行内样式
        //
        //  };//onmouseout



        // ulpoint[i].onclick=function () {
        //     index=i;
        //     banner1img.forEach(function (ele) {
        //         ele.style.zIndex= 1;
        //     });
        //     Array.prototype.forEach.call(ulpoint,function (ele) {
        //         ele.classList.remove('hot')
        //     });
        //     ulpoint[index].classList.add('hot')
        //     banner1img[index].style.zIndex= 999;
        //     return false;
        // }
        ulpoint[i].onclick=function () {
            if(current===i){
                return;
            }
            next=i;
            if(next>current){
                banner1img[next].style.left=w+'px';
                animate(banner1img[current],{left:-w});
                animate(banner1img[next],{left:0});
            }
            if(next<current){
                banner1img[next].style.left=-w+'px';
                animate(banner1img[current],{left:w});
                animate(banner1img[next],{left:0});
            }

            ulpoint[current].classList.remove('hot');
            ulpoint[next].classList.add('hot');
            current = next;
            banner1img.forEach(function (ele) {
                ele.style.opacity=0.3;
            });
            banner1img[current].style.opacity= 1;
            return false;

        }
    }


    let aboutmelist =document.getElementsByClassName('aboutmelist');
    let amltul= aboutmelist[0].getElementsByTagName('a');

    for(let i =0;i<amltul.length;i++){
        amltul[i].onclick = function () {
            for(let j=0;j<amltul.length;j++){
                amltul[j].style.borderBottom = 'none';

            }
            this.style.borderBottom = '100px solid #000';

        };

    }

//@1
//     let ullist =document.querySelectorAll('.ulList>li');
//     console.log(ullist);
//     ullist.forEach(function (elem（元素）,index) {
//         elem.onmouseenter=function () {
//             for(let i = 0;i<ullist.length;i++){
//                 ullist[i].classList.remove('hot');//this.className('hot')这个是用来修改类名的，会把之前的类名覆盖掉
//             }
//             this.classList.add('hot');//classList.toggle('hot')  有hot当鼠标移入时删除hot,没有hot移入时添加hot
//         }
//
//     });
    //@2
//     let ullist =document.querySelectorAll('.ulList>li');
//     console.log(ullist);
//     for(var i=0;i<ullist.length;i++) {
//         ullist[i].onmouseenter = (function (i) {
//             return function () {
//                    for (var j = 0; j < ullist.length; j++) {
//                         ullist[j].classList.remove('hot');//this.className('hot')这个是用来修改类名的，会把之前的类名覆盖掉
//                     }
//                        ullist[i].classList.add('hot');//classList.toggle('hot')  有hot当鼠标移入时删除hot,没有hot移入时添加hot
//             }
//         })(i)
//
//     }//闭包

//@3
    let ullist =document.querySelectorAll('.ulList>li');
    console.log(ullist);
    ullist.forEach(function (elem,index) {
        elem.onmouseenter=function () {
            ullist.forEach(function (elem,index) {
                elem.classList.remove('hot');
            })
            this.classList.add('hot');
        }
    });


    let banner1img =document.querySelectorAll('.maomi');
    // let index = 0;//保存窗口中图片的下标
    let current =0,next = 0;

    let rightbtn =document.querySelectorAll('.rightbtn>a>img');
    let leftbtn =document.querySelectorAll('.leftbtn>a>img');
    let banner1 = document.querySelector('.banner1');
    let w = banner1img[0].offsetWidth;
    let flag = true;
    console.log(leftbtn);
    console.log(rightbtn);
    //向左向右式轮播图
    rightbtn[0].onclick=function(){
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
        Array.prototype.forEach.call(ulpoint,function (ele) {
            ele.classList.remove('hot')
        });
        ulpoint[current].classList.add('hot');
        banner1img.forEach(function (ele) {
            ele.style.opacity=0.3;
        });
        banner1img[current].style.opacity= 1;
        return false;
    };
    leftbtn[0].onclick=function(){
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
        Array.prototype.forEach.call(ulpoint,function (ele) {
            ele.classList.remove('hot')
        });
        ulpoint[current].classList.add('hot');
        banner1img.forEach(function (ele) {
            ele.style.opacity=0.3;
        });
        banner1img[current].style.opacity= 1;
        return false;
    };





    //层级转换的轮播图
    // rightbtn[0].onclick=function () {
    //     index++;
    //     if(index == banner1img.length){
    //         index=0;
    //     }
    //     banner1img.forEach(function (ele) {
    //         ele.style.zIndex= 1;
    //     });
    //     Array.prototype.forEach.call(ulpoint,function (ele) {
    //         ele.classList.remove('hot')
    //     });
    //     ulpoint[index].classList.add('hot');
    //     banner1img[index].style.zIndex= 999;
    //
    //     return false;
    // }
    // leftbtn[0].onclick=function () {
    //     index--;
    //     if(index < 0){
    //         index = banner1img.length-1;
    //     }
    //     banner1img.forEach(function (ele) {
    //         ele.style.zIndex= 1;
    //     });
    //    Array.prototype.forEach.call(ulpoint,function (ele) {
    //        ele.classList.remove('hot')
    //    });
    //    ulpoint[index].classList.add('hot');
    //     banner1img[index].style.zIndex= 999;
    //     return false;
    // };


    let t = setInterval(rightbtn[0].onclick,2000);
    banner1.onmouseenter =function () {
        clearInterval(t);
        uljs[0].style.opacity=1;
        leftbtn[0].style.opacity=1;
        rightbtn[0].style.opacity=1;
    };
    banner1.onmouseleave=function () {
        t =setInterval(rightbtn[0].onclick,2000);
        uljs[0].style.opacity= 0;
        leftbtn[0].style.opacity= 0;
        rightbtn[0].style.opacity= 0;
    };


    //按需加载图片
    //滚动的高度+窗口的高度  >=  图片距离文档的高度
    //img.src=img.aa
    let viewH =window.innerHeight;
    let imgs =document.querySelectorAll('.lazyload');
    let positions =[];
    imgs.forEach(function (ele) {
        let parent = ele.offsetParent;
        positions.push(parent.offsetTop + ele.offsetTop)

    });
    window.onscroll = function () {
        let scrolltop = document.documentElement.scrollTop;
        for (let i =0; i<positions.length;i++){
            if(scrolltop + viewH >=positions[i]+50){
                if(!imgs[i].src){
                    imgs[i].src = imgs[i].getAttribute('aa');
                }
            }
        }
    }
}