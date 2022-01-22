let tblmenu = [
    {idmenu:1, 
     idkategori:22,
     menu:"jus alpukat",
     gambar:"alpukat.jpg",
     harga:3000},
    
    {idmenu:4,
     idkategori:26,
     menu:"bubur kacang ijo",
     gambar:"bubur.jpg",
     harga:3000},
    
    {idmenu:2,
     idkategori:22,
     menu:"jus jambu",
     gambar:"jambu.jpg",
     harga:3000},
    
     {idmenu:3,
      idkategori:22,
      menu:"es dawer",
      gambar:"dawet.jpg",
      harga:3000},
    
     {idmenu:6,
      idkategori:27,
      menu:"es doger",
      gambar:"es doger.jpg",
      harga:3000},
     
      {idmenu:5,
      idkategori:27,
      menu:"sate ayam",
      gambar:"sate.jpg",
      harga:3000}
];

let tampil = tblmenu.map(function (kolom) {
    return `<div class="produk-content">
    <div class="image">
      <img src="images/${kolom.gambar}" alt="" />
    </div>
    <div class="titel">
      <h2>${kolom.menu}</h2>
    </div>
    <div class="harga">
      <h2>Rp. ${kolom.harga}</h2>
    </div>
    <div class="btn-beli">
        <button data-idmenu=${kolom.idmenu}>Beli</button>
    </div>
  </div>`;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function (){
    // console.log(btnbeli[index].dataset["idmenu"]);
    // cart.push(btnbeli[index].dataset["idmenu"]);

    tblmenu.filter(function (a) {
        if(a.idmenu==btnbeli[index].dataset["idmenu"]){
         cart.push(a);
         console.log(cart);
        }
    })

    };
}

// console.log(cart)
