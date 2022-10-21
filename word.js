// var today = new Date();
// var day = today.getDay();
// var daylist = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// console.log("today is: " +daylist[day]);
// var hour = today.getHours();
// var minutes = today.getMinutes();
// var seconds = today.getSeconds();
 const wordText = document.querySelector(".word"),
 hintText = document.querySelector(".hint span"), 
 wordin = document.querySelector("input"),
 timing  = document.querySelector(".time b"),
 refreshbtn = document.querySelector(".refresh-word"),
 checkbtn = document.querySelector(".check-word");

let correctword,timer;
    clearInterval(timer);

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
    if(maxTime > 0){
        maxTime--;
       return timing.innerText = maxTime;
    }
    clearInterval(timer);
    alert(`Time off! ${correctword.toUpperCase()} was a correct answer`);
    initgame()
    },1000);
}

// var prepand = (hour >= 12)? "PM" : "AM";
// if(hour === 0  && prepand==='PM'){
//     if(minutes === 0 && second === 0){
//         hour = 12
//         prepand = 'Noon';
//     }
//     else{
//         hour = 12;
//         prepand = 'PM';
//     }
// }

// if(hour === 0 && prepand === 'AM'){
//     if(minutes=== 0 && seconds == 0){
//     hour = 12;
//     prepand = 'midnight';
//     }
//     else{
//         hour = 12;
//         prepand = 'AM';
//     }
// }

const initgame = () =>{
    initTimer(30);
    let randobj = words[Math.floor(Math.random()*words.length)];
    let wordArray = randobj.word.split("");

    for(let l=wordArray.length - 1;l>0;l--){
        let j = Math.floor(Math.random() * (l+1));
       [wordArray[l],wordArray[j]] =  [wordArray[j],wordArray[l]];
    }
    
    wordText.innerText = wordArray.join("");
    hintText.innerHTML = randobj.hint;
    correctword = randobj.word.toLocaleLowerCase();
    wordin.value = "";
    wordin.setAttribute("maxlength",correctword.length);
}

initgame();

refreshbtn.addEventListener("click",initgame);

const checkword = () => {
    let userword = wordin.value.toLocaleLowerCase();
    if(!userword) return alert("please enter a word");

    if(userword != correctword) return alert(`Oops! ${userword} is not a correct word`);

    alert(`Great ${userword.toUpperCase()} is a correct word`);
    initgame();
}

checkbtn.addEventListener("click",checkword);

//ECMA


// var time = document.getElementsByClassName('time');
// let timer = function(x){
//     if(x===0){
//         return 1;
//     }
// }

// let data = [10,20,30,40];
// let new_data = data.map(function(item){
//     return item*2;
// })
// console.log(new_data);

// //arrow funcation

// let arrdata = data.map((item)=>(item*2));
// console.warn(arrdata);

// //this
// let ite = {
//     name : "anil",
//     getname: function(){
//         console.warn(this);
//     }
// }

// ite.getname();

// class fruit{
//    constructor(){
//     console.warn("constructor");
//    }
// };

// let cl = new fruit();

// let fri = {
//     data : 'friends',
//     list : ['sam' , 'ram' , 'bob' ],
//     getfriends: function(){
//         this.list.map((item)=>{
//             console.warn(this.data,item);
//         })
//     }

// }

// fri.getfriends();


//promise
// let a = undefined;

// let promisedata = new Promise((resolved,reject)=>{
//     setTimeout(() => {
//       a = "hello ecma" 
//       resolved("done")
//     }, 3000);
// })

// promisedata.then(()=>{
//     alert(a);
// })

// let b = undefined;

// let promiseb = new Promise((resolved,reject)=>{
//    setTimeout(() => {
//     b = "are you 18+";
//     resolved("done");
//    }, 5000); 
// })

// promiseb.then(()=>{
//     alert(b);
// })



//destructuring array

// let van = ['threewhell','fourwh','sixwh'];
// let [first,...other] = van;
// console.warn(first);
// console.warn(other);


// let obje = {nameo:'rushikesh',college:'sit',marks:88,rollno:02}
// let{nameo,college,rollno,...marks}= obje;
// console.log(marks);


//spread operator

// let names = ['ramesh','onkar','priya','rahul'];
// let othernames =['nikhil',...names,'pratham','radhika'];

// function printname(...names){
//    console.log(...names);
// }

// console.log(printname(othernames));

//expontiation operator (power)
//


//module

// export default function fun(){
//     console.warn(3*3);
// }