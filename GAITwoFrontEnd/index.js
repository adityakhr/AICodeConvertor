const url = "http://localhost:8080/chat?prompt=";
const key="YOURKEY";


let languageValue = document.getElementById("select");
let lang = "java"
languageValue.addEventListener("change", function(el){
    el.preventDefault();
    lang=languageValue.value;
});
let answerBody = document.getElementById("ans");
let converButton = document.getElementById("one");
converButton.addEventListener("click",async function(el){
    el.preventDefault();
    try {
        let code = JSON.parse( localStorage.getItem("userinput"));
        let answer = await fetch(url+code+" conver it into proper runable code of "+lang+" CODE ONLY Don't generate explainations",{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${key}`
            }
        });
        let data=await answer.json();
        console.log(data["message"]["content"])
        if(answer.ok){
            answerBody.innerText=data["message"]["content"];
        }

     } catch (error) {
        answerBody.innerText="Error occuured...Sorry!";
     }
});

let debugButton = document.getElementById("two");
debugButton.addEventListener("click",async function(el){
    el.preventDefault();
    try {
        let code = JSON.parse( localStorage.getItem("userinput"));
        let answer = await fetch(url+code+" debug it",{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${key}`
            }
        });
        let data=await answer.json();
        if(answer.ok){
            answerBody.innerText=data["message"]["content"];
        }
     } catch (error) {
        answerBody.innerText="Error occuured...Sorry!";
     }
});

let qualityButton = document.getElementById("three");
qualityButton.addEventListener("click",async function(el){
    el.preventDefault();
    try {
        let code = JSON.parse( localStorage.getItem("userinput"));
        let answer = await fetch(url+code+" please do Quality check of it",{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${key}`
            }
        });
        let data=await answer.json();
        if(answer.ok){
            answerBody.innerText=data["message"]["content"];
        }
     } catch (error) {
        answerBody.innerText="Error occuured...Sorry!";
     }
});