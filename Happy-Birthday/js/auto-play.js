const audioPlayer = document.getElementById('audioPlayer');

  // Cek apakah ada waktu tersimpan di localStorage
  const savedTime = localStorage.getItem('audioTime');
  if (savedTime) {
    audioPlayer.currentTime = savedTime;
  }

  // Saat audio sedang diputar, simpan waktunya ke localStorage
  audioPlayer.addEventListener('timeupdate', () => {
    localStorage.setItem('audioTime', audioPlayer.currentTime);
  });

  // Pastikan audio terus berjalan saat halaman lain dimuat
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('audioTime', audioPlayer.currentTime);
  });