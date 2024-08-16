console.log("o javascript esta rodando")



function btn() {
    const input=document.querySelector("#text-input");
    const input1=document.querySelector("#replace-input");
    const input3=document.querySelector("#replace-with-input");
    

    if(input.value.includes(input1.value)){
        input.value.replace(/javascript/gi,input1.value,input3.value);
        input.value=input3.value


      const sect=document.querySelector("#sect");
       sect.innerHTML=" "
       sect.innerHTML=`<Selection id="sect"><p id="h1">${input.value}</p></Selection>`
    }
}