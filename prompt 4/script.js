const input = document.getElementById("n-input");
const result = document.getElementById("result");

function handleClickButton(el){
    console.log(el.innerText);
    const exp =`${input.value}${el.innerText}`;
    input.value = exp;
    if(["+","-","*","/"].includes(el.innerText));
        result.value = eval(exp);
}
function reset() {
    input.value = "";
    result.value ="";
}