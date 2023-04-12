const search= document.getElementById("search");
const list = document.querySelector('.autocom-box');

if(search){
    search.addEventListener("keyup", (e)=>{
        list.innerHTML = "";
        if(e.target.value != ''){
            fetch('recherche.php?search='+e.target.value).then((res) => {
                return res.json()
            }).then((data) => {
                data.forEach(element => {
                    let p = document.createElement('p');
                    p.innerHTML = '<a href="element.php?id='+ element.id+'">'+element.prenom+'</a>';
                     list.append(p);
                });
            }).catch((err) => {
                console.log(err);
            })
        
        }
        })
        
}

// console.log(window.location.href);
let id = window.location.href.split('=');
console.log( window.location.href);
fetch('recherche.php?id='+id[1]).then((res) => {
    return res.json()
}).then((data) => {
    data.forEach(element => {
        let listGrimpeur = document.querySelector('.grimpeur')
        let p = document.createElement('p');
        p.innerHTML = element.prenom+' '+ element.nom;
        let pText = document.createElement('p');
        pText.innerHTML = element.Infos;
        listGrimpeur.append(p);
        listGrimpeur.append(pText);
    });
})



// getting all required elements
// const searchWrapper = document.querySelector(".search-input");
// const inputBox = searchWrapper.querySelector("input");
// const suggBox = searchWrapper.querySelector(".autocom-box");
// const icon = searchWrapper.querySelector(".icon");
// let linkTag = searchWrapper.querySelector("a");
// let webLink;
// // if user press any key and release
// inputBox.onkeyup = (e)=>{
//     let userData = e.target.value; //user enetered data
//     let emptyArray = [];
//     if(userData){
//         icon.onclick = ()=>{
//             webLink = `http://localhost/autocompletion/recherche.php/?search=${userData}`;
//             linkTag.setAttribute("href", webLink);
//             linkTag.click();
//         }
//         emptyArray = suggestions.filter((data)=>{
//             //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
//             return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
//         });
//         emptyArray = emptyArray.map((data)=>{
//             // passing return data inside li tag
//             return data = `<li>${data}</li>`;
//         });
//         searchWrapper.classList.add("active"); //show autocomplete box
//         showSuggestions(emptyArray);
//         let allList = suggBox.querySelectorAll("li");
//         for (let i = 0; i < allList.length; i++) {
//             //adding onclick attribute in all li tag
//             allList[i].setAttribute("onclick", "select(this)");
//         }
//     }else{
//         searchWrapper.classList.remove("active"); //hide autocomplete box
//     }
// }
// function select(element){
//     let selectData = element.textContent;
//     inputBox.value = selectData;
//     icon.onclick = ()=>{
//         webLink = `https://www.google.com/search?q=${selectData}`;
//         linkTag.setAttribute("href", webLink);
//         linkTag.click();
//     }
//     searchWrapper.classList.remove("active");
// }
// function showSuggestions(list){
//     let listData;
//     if(!list.length){
//         userValue = inputBox.value;
//         listData = `<li>${userValue}</li>`;
//     }else{
//       listData = list.join('');
//     }
//     suggBox.innerHTML = listData;
// }
