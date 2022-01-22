// array - string, number, objek, function, campuran

let nilai = [
    {nama: "venti", ipa:90, bahasa:70, matematika:70},
    {nama: "amber", ipa:80, bahasa:90, matematika:60},
    {nama: "tatang", ipa:75, bahasa:70, matematika:90},
    {nama: "abah", ipa:90, bahasa:80, matematika:90},
]

let nama = ["venti","amber", "tatang", "abah"];
// nama.push("ani", "roma");

//console.log(nama.shift())

// nama.unshift("benny", "albudi");

// console.log(nama.slice(6, 8));

let mapel = ["ipa", "bahasa", "matematika"];

// console.log(nama.concat(mapel));

// console.log(nama.splice(5, 2));

// console.log(nama.concat(["ips", "pkn", "sejarah"]))

//console.log(nama.pop());

//nama.splice(0, 3);

//console.log(nilai[0].nama);
// console.log(nama);

// for (let index = 0; index < nama.length; index++) {
//     console.log(nama[index]); 
// }

// nama.forEach(function (a) {
//     console.log(a);
// });

// nama.forEach(a => console.log(a));

// nilai.filter(function (a) {
//     if (a.ipa > 80) {
//         console.log(a);
//     }
// });

//console.log(nilai);


// nilai.filter(a => 
//     (a.ipa > 80 && a.matematika > 80 ? console.log(a.name) : null));

// let siswa = nilai.map(function (a) {
//     return a.nama;
// })

// let siswa = nilai.map((a) => [a.nama, a.ipa, a.bahasa]);

// console.log(siswa);

// mapel.sort();

// console.log(mapel);

// let hasil = nilai.reduce(function (a, b) {
//     return (a = a + b.ipa);
// }, 0);

let hasil = nilai.reduce((a,b) => (a+=b.bahasa), 0);

console.log(hasil);