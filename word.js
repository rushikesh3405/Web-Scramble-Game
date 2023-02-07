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
