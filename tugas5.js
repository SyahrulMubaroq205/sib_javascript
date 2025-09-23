// Data awal produk
let products = [
  { nama: "Laptop", harga: 7500000 },
  { nama: "Mouse", harga: 150000 },
  { nama: "Keyboard", harga: 300000 },
  { nama: "Monitor", harga: 2000000 },
  { nama: "Headset", harga: 500000 }
];

// Format angka ke Rupiah
function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(angka);
}

// Tampilkan produk
function renderProducts() {
  console.log("\nDaftar Produk:");
  products.forEach((item, index) => {
    console.log(`${index + 1}. ${item.nama} - ${formatRupiah(item.harga)}`);
  });
}

// Tambah produk
function addProduct(nama, harga) {
  products.push({ nama, harga });
  console.log(`\nProduk "${nama}" berhasil ditambahkan!`);
  renderProducts();
}

// Hapus produk
function deleteProduct(index) {
  if (index >= 0 && index < products.length) {
    const removed = products.splice(index, 1);
    console.log(`\nProduk "${removed[0].nama}" berhasil dihapus!`);
  } else {
    console.log("\nIndex tidak valid!");
  }
  renderProducts();
}

renderProducts();              
addProduct("Flashdisk", 75000); // tambah produk
deleteProduct(2);              // hapus produk ke-3 (index 2) dimulai dari 0 index nya
