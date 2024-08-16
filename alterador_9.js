
console.log("o javascript esta rodando")


let  btn=document.querySelector("#btn")

 btn.addEventListener("click",()=>{ 
    const input=document.querySelector("#text-input");
    const input1=document.querySelector("#replace-input");
    const input3=document.querySelector("#replace-with-input");
    
    if(input.value==" "){
        alert("Não pode começar com espaço");
    }

    else if(!input.value){
        alert("digite um texo para alterar")
    }
    else if(!input1.value){
        alert("o espaço da subistituição está vazio")
        
            }

            setInterval(()=>{
                
    if(input.value.includes(input1.value)){
        const sect=document.querySelector("#sect");
            sect.value=input.value.replaceAll (input1.value,input3.value);
            console.log(sect.value)
       sect.innerHTML=`<Selection id="sect"><p id="h1">${sect.value}</p></Selection>`
    }

            },1000)

    if(!input3.value){
        alert("digite algo para alterar o texto");
    }
})
