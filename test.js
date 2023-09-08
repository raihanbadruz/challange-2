function dapatkanPenulisTerpopuler(data) {
  const penjualanPenulis = {};

  // Menghitung total penjualan untuk setiap penulis
  data.forEach((produk) => {
    if (!penjualanPenulis[produk.penulis]) {
      penjualanPenulis[produk.penulis] = 0;
    }
    penjualanPenulis[produk.penulis] += produk.totalTerjual;
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

function hasilkanLaporan(data) {
  const totalData = hitungTotalKeuntungan(data);
  const produkTerlaris = dapatkanProdukTerlaris(data);
  const penulisTerpopuler = dapatkanPenulisTerpopuler(data);

  return {
    ...totalData,
    produkBukuTerlaris: produkTerlaris,
    penulisTerlaris: penulisTerpopuler,
  };
}

// Menghasilkan laporan berdasarkan data penjualan yang diberikan
const laporan = hasilkanLaporan(dataPenjualanNovel);
console.log(laporan);
