// // function salom(ism,yosh) {
// //     alert("Assalomu aleykum " +ism+"+ yoshingizni " +yosh+ "da" );
    
// document.body.innerHTML += `
//     <button id="oq">oq</button>
//  <button id="qora">qora</button>
// `;

// document.getElementById('oq').addEventListener('click', function() {
//     if (document.body.style.backgroundColor === 'black') {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     } else {
//         document.body.style.backgroundColor = 'black';                               
//         document.body.style.color = 'white';
//     }
// });
// document.getElementById('qora').addEventListener('click', function() {
//     if (document.body.style.backgroundColor === 'black') {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     } else {
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
//     }                                                                                     
// });
 const body=document.getElementsByTagName("body")[0]
function darkmode(){
    body.classList.add("dark");
}
 function lightmode(){  
    body.classList.remove("dark");
}
 