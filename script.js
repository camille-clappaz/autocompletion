const search= document.getElementById("search");
const list = document.querySelector('.autocom-box');
const list2= document.querySelector('.autocom-box2');
const list3 = document.querySelector('.autocom-box3');
const list4= document.querySelector('.autocom-box4'); 

if(search){
    search.addEventListener("keyup", (e)=>{
        list.innerHTML = "";
        if(e.target.value != ''){
            fetch('recherche.php?search='+e.target.value).then((res) => {
                return res.json()
            }).then((data) => {
                data.forEach(element => {
                    let p = document.createElement('p');
                    p.innerHTML = '<a href="element.php?id='+ element.id+'">'+element.prenom+" "+element.nom+'</a>';
                     list.append(p);
                });
            }).catch((err) => {
                console.log(err);
            })
        
        }
        })
        
}
if(search){
    search.addEventListener("keyup", (e)=>{
        list2.innerHTML = "";
        if(e.target.value != ''){
            fetch('recherche.php?search2='+e.target.value).then((res) => {
                return res.json()
            }).then((data) => {
                data.forEach(element => {
                    let p = document.createElement('p');
                    p.innerHTML = '<a href="element.php?id='+ element.id+'">'+element.prenom+" "+element.nom+'</a>';
                     list2.append(p);
                });
            }).catch((err) => {
                console.log(err);
            })
        
        }
        })
        
}
if(recherche){
    recherche.addEventListener("keyup", (e)=>{
        list3.innerHTML = "";
        if(e.target.value != ''){
            fetch('recherche.php?recherche='+e.target.value).then((res) => {
                return res.json()
            }).then((data) => {
                data.forEach(element => {
                    let p = document.createElement('p');
                    p.innerHTML = '<a href="element.php?id='+ element.id+'">'+element.prenom+" "+element.nom+'</a>';
                     list3.append(p);
                });
            }).catch((err) => {
                console.log(err);
            })
        
        }
        })
        
}
// if(recherche2){
//     recherche2.addEventListener("keyup", (e)=>{
//         list4.innerHTML = "";
//         if(e.target.value != ''){
//             fetch('recherche.php?recherche2='+e.target.value).then((res) => {
//                 return res.json()
//             }).then((data) => {
//                 data.forEach(element => {
//                     let p = document.createElement('p');
//                     p.innerHTML = '<a href="element.php?id='+ element.id+'">'+element.prenom+" "+element.nom+'</a>';
//                      list4.append(p);
//                 });
//             }).catch((err) => {
//                 console.log(err);
//             })
        
//         }
//         })
        
// }

// console.log(window.location.href); permet de cibler l'url de la page sur laquelle on est 
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



