// console.log("hi welcome");
// console.log("hi this is gurushanth m");

// let arr=["guru","hi","good"]

// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// })


// let num=[1,2,3,4]

// num.forEach((val)=>{
//     console.log(val*val) ;

// })

// console.log(num);

// let v=[3,4,6,8,9]

// let ans =v.filter((val)=>{
//     return val%2 === 0;
// })

// console.log(ans);

// // let heading =document.getElementById("heading");
// // console.dir(heading);

// let classname = document.getElementsByClassName("heading")
// console.dir(classname);

// console.dir(document.body.firstChild);
// let div = document.querySelector("div");
// console.dir(div);

// let head = document.querySelector("h1");
// console.dir(head);

// let h1 = document.querySelector("h1");
// console.dir(h1.innerText);

// h1.innerText =h1.innerText + " this is from guru"; 

// let newbox = document.querySelectorAll(".box");
// let idx = 1;
// for(div of newbox){
//    div.innerText=`the unique value of the box ${idx}`;
//    idx++;
// }
// console.log(newbox[0])
// newbox[0].innerText = "first text in first box";
// newbox[1].innerText = "second text in second box";
// newbox[2].innerText = "third text in third box";

let newbtn = document.querySelector("#mode");
let currmode ="light";

newbtn.addEventListener("click", ()=>{
   // console.log("ur the trying to chnege the mode");
   if(currmode=="light"){
      currmode = "dark";
      document.querySelector("body").style.backgroundColor ="black";
   }else{
      currmode = "light";
      document.querySelector("body").style.backgroundColor ="white";
   }


   console.log(currmode);
});