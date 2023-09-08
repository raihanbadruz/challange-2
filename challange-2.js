// NOMOR 1
console.log("Soal Nomor 1");
function changeWord(selectedText, changedText, text) {
  // Memecah teks menjadi array kata-kata menggunakan spasi sebagai pemisah
  const kata = text.split(" ");

  // Menggunakan metode map untuk membuat array baru dengan kata-kata yang mungkin diubah
  const hasil = kata.map((kata) =>
    kata === selectedText ? changedText : kata
  );

  // Menggabungkan kembali array kata-kata menjadi teks menggunakan spasi sebagai pemisah
  return hasil.join(" ");
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

// Mengganti kata 'mencintai' dengan 'membenci' dalam kalimat1
console.log(changeWord("mencintai", "membenci", kalimat1));

// Mengganti kata 'bromo' dengan 'semeru' dalam kalimat2
console.log(changeWord("bromo", "semeru", kalimat2));

// NOMOR 2
console.log("");
console.log("Soal Nomor 2");

const checkTypeNumber = (givenNumber) => {
  if (givenNumber % 2 == 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
};

// let angka = 9;
let angka = 200;

console.log("Ini adalah angka " + checkTypeNumber(angka));

// NOMOR 3
console.log("");
console.log("Soal Nomor 3");

function getAngkaTerbesarKedua(arr) {
  // Menghapus duplikat dan mengurutkan array secara menurun
  const uniqueSortedArr = Array.from(new Set(arr)).sort((a, b) => b - a);

  // Mengembalikan angka terbesar kedua
  return uniqueSortedArr[1];
}

// Data array yang akan diuji
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

// Menggunakan fungsi getAngkaTerbesarKedua untuk mendapatkan angka terbesar kedua dari dataAngka
console.log("angka terbesar kedua = " + getAngkaTerbesarKedua(dataAngka));

// NOMOR 4
console.log("");
console.log("Soal Nomor 4");

const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 76000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 96000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High",
    hargaSatuan: 36000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

function hitungTotalPenjualan(dataPenjualan) {
  let total = 0;

  for (let i = 0; i < dataPenjualan.length; i++) {
    total += dataPenjualan[i].totalTerjual;
  }

  return total;
}

console.log(
  "Total Penjualan Barang Pak Aldi = " +
    hitungTotalPenjualan(dataPenjualanPakAldi)
);

// NOMOR 5
console.log("");
console.log("Soal Nomor 5");

const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: "60000",
    hargaJual: "86000",
    totalTerjual: "150",
    sisaStok: "17",
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: "75000",
    hargaJual: "103000",
    totalTerjual: "171",
    sisaStok: "20",
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: "67000",
    hargaJual: "99000",
    totalTerjual: "213",
    sisaStok: "5",
  },
  {
    idProduct: "BOOK002942",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: "55000",
    hargaJual: "68000",
    totalTerjual: "20",
    sisaStok: "56",
  },
];

// TOTAL KEUNTUNGAN
function hitungTotalKeuntungan(dataPenjualan) {
  let totalKeuntungan = 0;

  for (let i = 0; i < dataPenjualan.length; i++) {
    const penjualan = dataPenjualan[i];
    const hargaBeli = parseFloat(penjualan.hargaBeli);
    const hargaJual = parseFloat(penjualan.hargaJual);
    const totalTerjual = parseInt(penjualan.totalTerjual);

    const keuntunganProduk = (hargaJual - hargaBeli) * totalTerjual;
    totalKeuntungan += keuntunganProduk;
  }

  return totalKeuntungan;
}

const totalKeuntungan = hitungTotalKeuntungan(dataPenjualanNovel);
console.log("Total Keuntungan: Rp. " + totalKeuntungan);

// TOTAL MODAL
function hitungTotalModal(dataPenjualan) {
  let jumlahModal = 0;

  for (let i = 0; i < dataPenjualan.length; i++) {
    const penjualan = dataPenjualan[i];
    const hargaBeli = parseFloat(penjualan.hargaBeli);
    const totalTerjual = parseInt(penjualan.totalTerjual);
    const sisaStok = parseInt(penjualan.sisaStok);

    const totalModal = hargaBeli * (totalTerjual + sisaStok);
    jumlahModal += totalModal;
  }

  return jumlahModal;
}

const jumlahModal = hitungTotalModal(dataPenjualanNovel);
console.log("Total Modal: Rp. " + jumlahModal);

// PRESENTASE KEUNTUNGAN
function presentaseKeuntungan() {
  const presentase = ((totalKeuntungan / jumlahModal) * 100).toFixed(1);

  return presentase;
}

const presentaseUntung = presentaseKeuntungan(dataPenjualanNovel);
console.log("Presentase Keuntungan: " + presentaseUntung + "%");

// BUKU TERLARIS
function produkBukuTerlaris(dataPenjualan) {
  let judulTerlaris = "";
  let banyakTerjual = 0;

  for (let i = 0; i < dataPenjualan.length; i++) {
    const penjualan = dataPenjualan[i].totalTerjual;

    if (penjualan > banyakTerjual) {
      banyakTerjual = penjualan;
      judulTerlaris = dataPenjualan[i].namaProduk;
    }
  }

  return judulTerlaris;
}

const namaProdukTerlaris = produkBukuTerlaris(dataPenjualanNovel);
console.log("Judul buku terlaris adalah " + namaProdukTerlaris);

//PENULIS TERLARIS
function dapatkanPenulisTerpopuler(dataPenjualan) {
  const penjualanPenulis = {};

  // Menghitung total penjualan untuk setiap penulis
  dataPenjualan.forEach((produk) => {
    if (!penjualanPenulis[produk.penulis]) {
      penjualanPenulis[produk.penulis] = 0;
    }
    penjualanPenulis[produk.penulis] += parseInt(produk.totalTerjual);
  });

  let penjualanTerbanyak = 0;
  let penulisTerpopuler = "";

  // Mencari penulis dengan penjualan terbanyak
  for (const penulis in penjualanPenulis) {
    if (penjualanPenulis[penulis] > penjualanTerbanyak) {
      penjualanTerbanyak = penjualanPenulis[penulis];
      penulisTerpopuler = penulis;
    }
  }

  return penulisTerpopuler;
}

const penulisTerlaris = dapatkanPenulisTerpopuler(dataPenjualanNovel);
console.log("Penulis buku terlaris adalah " + penulisTerlaris);
