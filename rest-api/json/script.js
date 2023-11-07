//vanilajavascipt-JSON.stringify
// const mahasiswa = {
//     nama : "Arif Wicaksono",
//     nim : "2000018229",
//     jenis_kel : "laki-laki"

// }

// console.log(JSON.stringify(mahasiswa));


//vanilajavascipt-JSON.parse
// let xhr =new XMLHttpRequest();
// xhr.onreadystatechange = function (){
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send(); 

//jquery
$.getJSON('coba.json', function (data){
    console.log(data);
})