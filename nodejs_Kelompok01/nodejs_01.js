const fs = require("fs");

// Nama file yang akan digunakan
const namaFileTxt = "file.txt";

// Contoh data untuk berkas Txt
const dataTxt = {
  nama: "Mas Ibrahim",
  umur: 20,
  bidang: "Frontend Javascript",
};

// Operasi Tulis File .txt
fs.writeFile(namaFileTxt, JSON.stringify(dataTxt, null, 2), "utf8", (err) => {
  if (err) {
    console.error("Terjadi kesalahan saat menulis berkas:", err);
    return;
  }
  console.log("file.txt telah ditulis.");
});

// Operasi Ganti Nama Berkas Txt
const namaFileBaruTxt = "catatanBaru.txt";
fs.rename(namaFileTxt, namaFileBaruTxt, (err) => {
  if (err) {
    console.error("Terjadi kesalahan saat mengganti nama berkas:", err);
    return;
  }
  console.log("file.txt telah diganti nama menjadi catatanBaru.txt.");
});

// Operasi BacaFile .txt
fs.readFile(namaFileBaruTxt, "utf8", (err, data) => {
  if (err) {
    console.error("Terjadi kesalahan saat membaca berkas:", err);
    return;
  }
  console.log("Isi dari file.txt:", data);
});

// Nama file yang akan digunakan
const namaFileJson = "file.json";

// Contoh data untuk berkas JSON
const dataJson = {
  nama: "Mas Bayu",
  umur: 12,
  bidang: "Frontend Javascript",
};

// Operasi Tulis File .Json
fs.writeFile(namaFileJson, JSON.stringify(dataJson, null, 2), "utf8", (err) => {
  if (err) {
    console.error("Terjadi kesalahan saat menulis berkas:", err);
    return;
  }
  console.log("file.json telah ditulis.");
});

// Operasi Ganti Nama Berkas JSON
const namaFileBaruJson = "jsonBaru.json";
fs.rename(namaFileJson, namaFileBaruJson, (err) => {
  if (err) {
    console.error("Terjadi kesalahan saat mengganti nama berkas:", err);
    return;
  }
  console.log("file.json telah diganti nama menjadi jsonBaru.json.");
});

// Operasi BacaFile .json
fs.readFile(namaFileJson, "utf8", (err, data) => {
  if (err) {
    console.error("Terjadi kesalahan saat membaca berkas:", err);
    return;
  }
  console.log("Isi dari file.json:", data);
});
