let urun1 = {
  isim: "Acer Swift",
  kategori: "teknoloji",
  fiyat: 6.219,
};

let urun2 = {
  isim: "Acer Nitro 5",
  kategori: "teknoloji",
  fiyat: 15.475,
};

let urun3 = {
  isim: "Lenovo v15",
  kategori: "teknoloji",
  fiyat: 12.11,
};
let urun4 = {
  isim: "Lenovo v14",
  kategori: "teknoloji",
  fiyat: 12.78,
};
let urun5 = {
  isim: "Lenovo ideapad",
  kategori: "teknoloji",
  fiyat: 9.78,
};

let urunler = [urun1, urun2, urun3, urun4, urun5];
let filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("bir ürün ismi giriniz");

filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);

function filtreliUrunleriDoldur(urunler) {
  urunler.forEach(function (urun) {
    if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {
      filtreliUrunler.push(urun);
    }
  });
}

function filtreliUrunleriYazdir(urunler) {
  urunler.forEach(function (urun) {
    console.log("---------------------------------------------------");
    console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
    console.log("---------------------------------------------------");
  });
}
