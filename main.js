let demo=document.querySelector('.html-demo')
let style= document.querySelector('#style')


let str=`
/* 我目前在做前端开发，下面我要动态生成一张太极图,
敬请欣赏叭。
这是一份demo演示 */

div {
    color:#333;
}
/*
我要绘制一张太极图了
*/
#div1 {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 20px;
  }
.taiji {
    border-radius: 50%;
    box-shadow: 5px 5px 5px rgb(190, 187, 187);
    width: 200px;
    height: 200px;
    position: fixed;
    top:0px;
    left: 50%;
    transform: translateX(-50%);
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(0, 0, 0, 1) 50%
    );
    /* border: 1px solid red; */
  }
  /* 伪类是css创建的虚拟元素，所以不是真实存在的，相当于一个span元素,不可以删除content 
    伪元素里面是不能放伪元素的。
  */
  .taiji::before {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    display: block;
    background: rgb(255, 255, 255);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 25%,
      rgba(0, 0, 0, 1) 25%
    );
  }
  .taiji::after {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    display: block;
    background: rgb(0, 0, 0);
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 29%,
      rgba(255, 255, 255, 1) 29%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`
var cssnewstr=str.replace(/<br>/g,'\n')
let str2=``
// 控制每次打印
let n= 0
// question  为什么每次br标签就打印一半呢。 那我怎么知道该如何解决？

let a=function anmation () {
    setTimeout(()=>{
        if(str[n]==='\n') {
            // 如果是回车
           str2+='<br>'
        }
        else {
            // 为什么只是一个个字打印,所以要用到substring方法
            str2+=str[n]
        }
        if(n<=str.length-1) {
            console.log(n)
            demo.innerHTML=str2
            // css里面不能显示 html标签
            style.innerHTML=str.substr(0,n)
            window.scrollTo(0,9999)
            n+=1
           anmation()
        }
      
    },10)
}
a.call(undefined);