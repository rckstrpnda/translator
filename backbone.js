
var outputt=document.getElementById("gand");
var button=document.getElementById("convert");


var adda="https://api.funtranslations.com/translate/pirate.json?text="

function change(inputt){
    // console.log(adda+inputt);
    return adda+inputt;
}

function search(){
    var inputt=document.getElementById("lawda").value;
    fetch(change(inputt)).then(response=>response.json())
    .then(result=>{
        console.log(result)
        outputt.value=result.contents.translated ;
        
    })
}

button.addEventListener("click",function(){
    search()
})