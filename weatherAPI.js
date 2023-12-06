let APIkey="9809bd576ddfaa7c5aa1d629e397f720"

let inp=document.querySelector('input')
let btn=document.querySelector('button')
let temp=document.querySelector('#temp');
let p=document.querySelector('#loc')

btn.addEventListener('click',function(){
    let text=inp.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${APIkey}`)
    .then((res)=>{
      return res.json();
    }).then((data)=>{
        console.log(data);
        manipulationDOM(data);
    })
})


function manipulationDOM(data){
 temp.innerHTML=data.main.temp
 p.innerHTML=data.name
}