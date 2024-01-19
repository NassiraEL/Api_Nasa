let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let section = document.querySelector("section");

let allData = {};
btn.addEventListener("click", function(){
    section.innerHTML = "";
    if(inp.value != ""){
        let api = `https://images-api.nasa.gov/search?q=${inp.value}`
        fetch(api)
            .then(rep => rep.json())
            .then(data => allData = {...data})
            .then(end => allData.collection.items.forEach(element => {
                console.log(element.data[0].description)
                        section.innerHTML += `<div class="box">
                                <img src=${element.links[0].href} alt="">
                                <h1>${element.data[0].title}</h1>
                                <p>${element.data[0].description}</p>
                             </div>`;
                })
            )
    }else{
        alert("enter a word");
    }
})