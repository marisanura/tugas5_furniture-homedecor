AOS.init({
  once: true // Animasi hanya berjalan sekali saat di-scroll
});
function scrollGallery(val) {
  document.getElementById('productScroll').scrollLeft += val;
  }
function beliProduk(nama, harga) {
  // Ambil data pesanan yang sudah ada atau buat array baru
  let pesanan = JSON.parse(localStorage.getItem('daftarPesanan')) || [];
  
  // Tambah produk baru dengan ID unik (waktu)
  pesanan.push({
      id: Date.now(),
      nama: nama,
      harga: harga,
      tanggal: new Date().toLocaleDateString('id-ID')
  });
  
  // Simpan kembali ke localStorage
  localStorage.setItem('daftarPesanan', JSON.stringify(pesanan));
  
  // Pindah ke halaman daftar pesanan
  window.location.href = 'pesanan.html'; 
}